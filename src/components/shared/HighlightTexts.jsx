"use client";

import { useScrollHighlight } from "../../hooks/useScrollHighlight";

export default function HighlightTexts({ text, containerClassName = "", wordClassName = "" }) {
  const { containerRef, textRef } = useScrollHighlight(text);

  return (
    <div ref={containerRef} className={containerClassName}>
      <h2 ref={textRef} className={wordClassName}>
        {text}
      </h2>
    </div>
  );
}
