import { useEffect, useRef, useState } from 'react';

/**
 * useScrollAnimation
 * Returns a [ref, isVisible] pair.
 * Once the element enters the viewport, isVisible becomes true and stays true.
 * @param {Object} options – IntersectionObserver options (threshold, rootMargin, etc.)
 */
export function useScrollAnimation(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -20px 0px', ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref.current]); // Re-run when ref is assigned (e.g. after loading)

  return [ref, isVisible];
}
