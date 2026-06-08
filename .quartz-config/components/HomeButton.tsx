// quartz/components/HomeButton.tsx
import React from "react";
import type { QuartzComponent, QuartzComponentConstructor } from "./types";

const HomeButton: QuartzComponent = () => {
  return (
    <a className="q-home-btn desktop-only" href="/home/">
      ← Home
    </a>
  );
};

HomeButton.css = `
.q-home-btn {
  display: inline-block;
  border-radius: 6px;
  border: 1px solid rgba(0,0,0,0.08);
  user-select: none;
  font-size: .95rem;
  line-height: 1.5rem;
}`;

export default (() => HomeButton) satisfies QuartzComponentConstructor;
