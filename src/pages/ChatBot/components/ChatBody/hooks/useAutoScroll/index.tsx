import { useRef, useEffect } from "react";

export default function useAutoScroll() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const boxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let observer: ResizeObserver | null = null;
    const box = boxRef.current;
    const container = containerRef.current;

    if (box) {
      observer = new ResizeObserver(() => {
        container?.scroll({ top: box.offsetHeight, behavior: "smooth" });
      });
      observer.observe(box);
    }

    return () => {
      observer?.disconnect();
    };
  }, []);

  return { containerRef, boxRef };
}
