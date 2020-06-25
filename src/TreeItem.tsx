import React from 'react';

import { AccessibilityTreeItem } from './buildTree';

interface RenderableTreeItem {
  role: string;
  label?: string;
  additionalInfo?: string;
  text?: string;
  hidden?: boolean;
}

const truncated = (str: string) =>
  str.length < 60 ? str : `${str.slice(0, 60)} [...]`;

const camelCaseToSentenceCase = (str: string) =>
  str
    .replace(/[A-Z]/g, (c) => ` ${c.toLowerCase()}`)
    .replace(/^\w/, (c) => c.toUpperCase());

interface TreeItemProps {
  data: AccessibilityTreeItem;
}

const TreeItem: React.FC<TreeItemProps> = ({ data }) => {
  const renderableItem: RenderableTreeItem = {
    ...data,
    role: data.role || 'unknown',
  };

  if (data.role === 'list') {
    renderableItem.additionalInfo = `${data.children?.length || 0} items`;
  }

  if (data.role === 'listItem') {
    renderableItem.additionalInfo = `${data.index + 1} of ${
      data.parent?.children?.length
    }`;
  }

  const { role, label, additionalInfo, text } = renderableItem;

  return (
    <div>
      {label && (
        <span>
          <strong>
            <em>{label}. </em>
          </strong>
        </span>
      )}
      <span>
        <strong>{camelCaseToSentenceCase(role)}. </strong>
      </span>
      {additionalInfo && <span>{additionalInfo}.</span>}
      {text && (
        <span>
          "<em>{truncated(text)}</em>"
        </span>
      )}
    </div>
  );
};

TreeItem.displayName = 'TreeItem';

export default TreeItem;
