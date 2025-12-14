// quartz/components/HomeButton.tsx
import React from "react";
import type { QuartzComponent, QuartzComponentConstructor } from "./types";

const HomeButton: QuartzComponent = () => {
  return (
    <a className="q-home-btn" href="/home/">
      Home
    </a>
  );
};

HomeButton.css = `
.q-home-btn {
  display: inline-block;
  padding: 0.35rem 0.6rem;
  border-radius: 6px;
  text-decoration: none;
  border: 1px solid rgba(0,0,0,0.08);
  font-weight: 600;
  user-select: none;
}

/* a small hover/focus affordance */
.q-home-btn:focus,
.q-home-btn:hover {
  transform: translateY(-1px);
  text-decoration: none;
}
`;

export default (() => HomeButton) satisfies QuartzComponentConstructor;
