declare module 'react-latex' {
  import React from 'react';
  
  export interface LatexProps {
    children?: React.ReactNode;
    delimiters?: Array<{left: string, right: string, display: boolean}>;
  }
  
  const Latex: React.FC<LatexProps>;
  
  export default Latex;
} 