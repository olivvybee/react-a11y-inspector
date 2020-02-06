import { notUndefined } from './notUndefined';

export interface AccessibilityTreeItem {
  role?: string;
  label?: string;
  text?: string;
  children?: AccessibilityTreeItem[];
  parent?: AccessibilityTreeItem;
  hidden?: boolean;
  index: number;
}

const getSiblings = (item: any) => {
  let currentNode = item;
  let siblings = [];

  while (currentNode) {
    siblings.push(currentNode);
    currentNode = currentNode.nextSibling;
  }

  return siblings;
};

const buildSubTree = (
  root: any,
  parent?: AccessibilityTreeItem,
  childIndex?: number
) => {
  const { role, name, firstChild } = root;

  const treeItem: AccessibilityTreeItem = {
    role,
    label: name || undefined,
    children: [],
    parent,
    index: childIndex || 0
  };

  if (role === 'genericContainer') {
    treeItem.role = 'group';

    if (!firstChild && !treeItem.label) {
      return [];
    }
  }

  if (role === 'staticText') {
    treeItem.text = name;
    treeItem.label = undefined;
    treeItem.role = 'text';
    return [treeItem];
  }

  if (role === 'listMarker') {
    treeItem.text = name;
    treeItem.label = undefined;
    return [treeItem];
  }

  if (firstChild) {
    const items = getSiblings(firstChild);
    const children: AccessibilityTreeItem[] = items
      .map((item, index) => buildSubTree(item, treeItem, index))
      .filter(notUndefined)
      .flat();

    if (parent && treeItem.role === 'group' && !treeItem.label) {
      parent.children = (parent.children || []).concat(children);
      return children;
    } else {
      treeItem.children = children;
    }
  }

  return [treeItem];
};

export const buildTree = async () => {
  const topLevelNode = document.getElementById('node-under-test')?.children[0];
  let topLevelAccessibilityNode;

  try {
    topLevelAccessibilityNode = await (window as any).getComputedAccessibleNode(
      topLevelNode
    );
  } catch (error) {}

  if (!topLevelNode || !topLevelAccessibilityNode) {
    return undefined;
  }

  return buildSubTree(topLevelAccessibilityNode)[0];
};
