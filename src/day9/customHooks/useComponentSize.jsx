import { useState, useEffect } from 'react';

function useComponentSize(elementRef) {
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      if (elementRef.current) {
        setSize({
          width: elementRef.current.offsetWidth,
          height: elementRef.current.offsetHeight,
        });
      }
    };

    const observer = new ResizeObserver(handleResize);
    if (elementRef.current) {
      observer.observe(elementRef.current);
      handleResize();
    }

    return () => {
      observer.disconnect();
    };
  }, [elementRef]);

  return size;
}

export default useComponentSize;
