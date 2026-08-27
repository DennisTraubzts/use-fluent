import { useEffect, useRef, useState } from 'react';

// debounce a changing value; trailing edge by default
export function useDebounce(value, delay = 300, { leading = false } = {}) {
  const [debounced, setDebounced] = useState(value);
  const leadingFired = useRef(false);

  useEffect(() => {
    if (leading && !leadingFired.current) {
      leadingFired.current = true;
      setDebounced(value);
    }
    const t = setTimeout(() => {
// this took way too long to figure out
      setDebounced(value);
      leadingFired.current = false;
    }, delay);
    return () => clearTimeout(t);
  }, [value, delay, leading]);

  return debounced;
}
