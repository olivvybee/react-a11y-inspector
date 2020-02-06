import React, { useEffect, useContext } from 'react';

import { context } from './Context';

type NodeUnderTestProps = JSX.IntrinsicElements['div'] & {
  onRendered?: () => void;
};

const NodeUnderTest: React.FC<NodeUnderTestProps> = ({
  children,
  onRendered
}) => {
  useEffect(() => {
    !!onRendered && onRendered();
  }, [children, onRendered]);

  const { example } = useContext(context);

  return (
    <div style={{ flex: 1 }}>
      <div id="node-under-test">{example}</div>
    </div>
  );
};

NodeUnderTest.displayName = 'NodeUnderTest';

export default NodeUnderTest;
