import React, { useContext } from 'react';

import { useAsyncState } from './useAsyncState';
import { AccessibilityTreeItem, buildTree } from './buildTree';
import Tree from './Tree';
import { context } from './Context';
import Frame from './Frame';

const TreeViewer = () => {
  const { example } = useContext(context);

  const [tree, processing] = useAsyncState<AccessibilityTreeItem | undefined>(
    buildTree,
    [example]
  );

  return (
    <div style={{ flex: 1 }}>
      {processing || !tree ? <p>Processing...</p> : <Tree root={tree} />}
    </div>
  );
};

export default TreeViewer;
