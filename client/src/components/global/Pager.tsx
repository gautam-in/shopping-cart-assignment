/* eslint-disable react/require-default-props */
import React from 'react';

function Pager({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={`pager ${className}`}>{children}</div>;
}

export default Pager;
