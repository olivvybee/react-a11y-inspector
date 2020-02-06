import React, { createContext, useState } from 'react';
import * as examples from './examples';

interface Context {
  example: JSX.Element;
  setExample: (example: JSX.Element) => void;
}

export const context = createContext<Context>({
  example: <div />,
  setExample: () => null
});

const ContextProvider: React.FC = ({ children }) => {
  const DefaultExample = Object.values(examples)[0];

  const [example, setExample] = useState<JSX.Element>(<DefaultExample />);

  return (
    <context.Provider value={{ example, setExample }}>
      {children}
    </context.Provider>
  );
};

export default ContextProvider;
