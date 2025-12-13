import remarkMath from "remark-math"
import rehypeKatex from "rehype-katex"
import rehypeMathjax from "rehype-mathjax/svg"
import { QuartzTransformerPlugin } from "../types"
import { visit } from "unist-util-visit"

interface Options {
  renderEngine: "katex" | "mathjax"
  customMacros: MacroType
}

interface MacroType {
  [key: string]: string
}

function remarkSanitizeMath() {
  return (tree: any) => {
    visit(tree, (node: any) => {
      if (node.type === "math" || node.type === "inlineMath") {
        let v = String(node.value ?? "");

        // 1) Remove invisible characters that break KaTeX
        v = v.replace(/\u200B/g, ""); // zero-width space
        v = v.replace(/\uFEFF/g, ""); // BOM

        // 2) Convert align -> aligned (KaTeX doesn't support align)
        v = v.replace(/\\begin\{align\*\}/g, "\\begin{aligned}");
        v = v.replace(/\\end\{align\*\}/g, "\\end{aligned}");
        v = v.replace(/\\begin\{align\}/g, "\\begin{aligned}");
        v = v.replace(/\\end\{align\}/g, "\\end{aligned}");

        // 3) Normalize repeated \\ or \\newline sequences and remove stray blank lines
        //    e.g. "\\\\ \\\\\n\n"  ->  "\\\\\n"
        v = v.replace(/(\\\\|\$\\\\newline\$|\\newline)[\s\u00A0]*((\\\\|\$\\\\newline\$|\\newline)[\s\u00A0]*)+/g, "\\\\\n");
        // also turn explicit \newline \newline into a single \\ (KaTeX-friendly)
        v = v.replace(/\\newline\s*\\newline/g, "\\\\\n");

        // 4) If the math block contains \end{aligned} but no \begin{aligned}, add a begin at top
        const hasBegin = /\\begin\{aligned\}/.test(v);
        const hasEnd = /\\end\{aligned\}/.test(v);
        if (hasEnd && !hasBegin) {
          // insert begin{aligned} at start (after any leading spaces/newlines)
          v = v.replace(/^\s*/, (m) => m + "\\begin{aligned}\n");
        }
        // If has begin but no end, append an end at the end
        if (hasBegin && !hasEnd) {
          v = v + "\n\\end{aligned}";
        }

        // 5) Ensure each row separator ends with a single newline (KaTeX-friendly)
        v = v.replace(/\\\\\s*\n+/g, "\\\\\n");

        // 6) Trim stray leading/trailing whitespace in math block
        v = v.replace(/^\s+/, "");
        v = v.replace(/\s+$/, "");

        node.value = v;
      }
    });
  };
}
function remarkDebugMath() {
  return (tree: any) => {
    visit(tree, "math", (node: any) => {
      console.log("RAW MATH NODE:");
      console.log(JSON.stringify(node.value));
    });
  };
}

export const Latex: QuartzTransformerPlugin<Partial<Options>> = (opts) => {
  const engine = opts?.renderEngine ?? "katex"
  const macros = opts?.customMacros ?? {}

  return {
    name: "Latex",
    markdownPlugins() {
      return [remarkMath, remarkSanitizeMath]
    },
    htmlPlugins() {
      if (engine === "katex") {
        return [[rehypeKatex, { output: "html", newLineInDisplayMode: true, macros }]]
      } else {
        return [[rehypeMathjax, { macros }]]
      }
    },
    externalResources() {
      if (engine === "katex") {
        return {
          css: [
            // base css
            "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/katex.min.css",
          ],
          js: [
            {
              // fix copy behaviour: https://github.com/KaTeX/KaTeX/blob/main/contrib/copy-tex/README.md
              src: "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/contrib/copy-tex.min.js",
              loadTime: "afterDOMReady",
              contentType: "external",
            },
          ],
        }
      } else {
        return {}
      }
    },
  }
}
