import React, { useRef } from 'react';
import FormInput from './FormInput/FormInput';

const SHOW_RENDER_COUNTERS = true;

const useRenderCounter = () => {
  const renderCount = useRef(0);
  renderCount.current = renderCount.current + 1;

  if (SHOW_RENDER_COUNTERS) {
    return (
      <FormInput
        style={{
          backgroundColor: 'hsl(0, 100%, 50%)',
          borderRadius: 6,
          color: 'hsl(0, 0%, 100%)',
          fontSize: 10,
          fontWeight: 'bold',
          height: 35,
          margin: 2,
          textAlign: 'center',
          width: 35,
        }}
        value={String(renderCount.current)}
      />
    );
  }
  return null;
};

export default useRenderCounter;
