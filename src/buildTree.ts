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
  const { role, roleDescription, name, firstChild } = root;

  const treeItem: AccessibilityTreeItem = {
    role,
    label: name || undefined,
    children: [],
    parent,
    index: childIndex || 0,
  };

  if (roleDescription && roleDescription.includes('aria-hidden')) {
    treeItem.hidden = true;
  }

  if (role === 'presentation') {
    treeItem.hidden = true;
  }

  if (role === 'svgRoot') {
    treeItem.role = 'image';
  }

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

const replaceAriaHiddenForSubTree = (root: Element) => {
  if (
    root.getAttribute('aria-hidden') === 'true' ||
    root.getAttribute('role') === 'presentation'
  ) {
    const existingRoleDescription =
      root.getAttribute('aria-roledescription') || '';
    root.setAttribute(
      'aria-roledescription',
      `${existingRoleDescription}_aria-hidden`
    );
  }

  for (let i = 0; i < root.children.length; i++) {
    replaceAriaHiddenForSubTree(root.children[i]);
  }
};

const resetAriaHiddenForSubTree = (root: Element) => {
  const roleDescription = root.getAttribute('aria-roledescription');
  if (roleDescription && roleDescription.includes('_aria-hidden')) {
    const fixedDescription = roleDescription.replace('_aria-hidden', '');
    if (fixedDescription.length > 0) {
      root.setAttribute('aria-roledescription', fixedDescription);
    } else {
      root.removeAttribute('aria-roledescription');
    }
  }

  for (let i = 0; i < root.children.length; i++) {
    resetAriaHiddenForSubTree(root.children[i]);
  }
};

export const buildTree = async () => {
  const topLevelNode = document.getElementById('node-under-test')?.children[0];
  let topLevelAccessibilityNode;

  if (!topLevelNode) {
    return undefined;
  }

  replaceAriaHiddenForSubTree(topLevelNode);

  try {
    topLevelAccessibilityNode = await (window as any).getComputedAccessibleNode(
      topLevelNode
    );
  } catch (error) {}

  if (!topLevelAccessibilityNode) {
    return undefined;
  }

  const tree = buildSubTree(topLevelAccessibilityNode)[0];

  resetAriaHiddenForSubTree(topLevelNode);

  return tree;
};
