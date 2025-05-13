import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";

export function useScrollHighlight(text) {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const splitRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useEffect(() => {
    if (!textRef.current) return;

    if (splitRef.current) {
      splitRef.current.revert();
    }

    splitRef.current = new SplitType(textRef.current, {
      types: "words, chars",
      tagName: "span"
    });

    if (splitRef.current.chars) {
      gsap.set(splitRef.current.chars, {
        position: "relative",
        display: "inline-block",
        opacity: 0.3
      });
    }

    return () => {
      if (splitRef.current) {
        splitRef.current.revert();
      }
    };
  }, [text]);

  useEffect(() => {
    if (!containerRef.current || !splitRef.current?.chars) return;

    const chars = splitRef.current.chars;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom 30%",
        scrub: true,
        markers: false
      }
    });

    tl.to(chars, {
      opacity: 1,
      duration: 0.3,
      stagger: 0.1,
      ease: "none"
    });

    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
    };
  }, [text]);

  return { containerRef, textRef };
}
