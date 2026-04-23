import { useEffect, useRef, useState } from 'react';

export function useInView<T extends Element>(threshold = 0.15) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export const sectionPad: React.CSSProperties = { padding: '96px 0', position: 'relative', overflow: 'hidden' };
export const container: React.CSSProperties = { maxWidth: 1200, margin: '0 auto', padding: '0 clamp(20px, 4vw, 48px)' };
