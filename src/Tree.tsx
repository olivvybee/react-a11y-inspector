import React from 'react';

import { AccessibilityTreeItem } from './buildTree';
import TreeItem from './TreeItem';

interface TreeProps {
  root: AccessibilityTreeItem;
}

const Tree: React.FC<TreeProps> = ({ root }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      opacity: root.hidden ? 0.3 : 1
    }}>
    <TreeItem data={root} />
    {!!root.children?.length && <div style={{ height: 6 }} />}
    {root.children?.map((child, index) => (
      <div key={index} style={{ marginLeft: '16px' }}>
        <Tree root={child} />
      </div>
    ))}
    <div style={{ height: 8 }} />
  </div>
);

Tree.displayName = 'Tree';

export default Tree;
