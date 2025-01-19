import React, { useRef } from 'react';
import useComponentSize from '../customHooks/useComponentSize';
import useIsMounted from '../customHooks/useIsMounted';
import useWindowSize from '../customHooks/useWindowSize';
import '../assignment3.css';


function Assignment3() {
  const elementRef = useRef();
  const componentSize = useComponentSize(elementRef);
  const isMounted = useIsMounted();
  const windowSize = useWindowSize();

  return (
    <div>
      <h1>Custom Hooks Assignment</h1>

      <div
        ref={elementRef}
        style={{ padding: '20px', border: '1px solid black', resize: 'both', overflow: 'auto' }}
        className='resizable-box'
      >
        <p>Component Width: {componentSize.width}px</p>
        <p>Component Height: {componentSize.height}px</p>
      </div>

      <p>Is Component Mounted: {isMounted ? 'Yes' : 'No'}</p>

      <p>Window Width: {windowSize.width}px</p>
      <p>Window Height: {windowSize.height}px</p>
    </div>
  );
}

export default Assignment3;
