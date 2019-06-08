export interface ReactTestRendererJSON {
  type: string;
  props: { [propName: string]: any };
  children: null | ReactTestRendererNode[];
}

type ReactTestRendererNode = ReactTestRendererJSON | string;

export function checkInvariants(tree: ReactTestRendererJSON | null) {
  if (!tree || typeof tree !== 'object') return;
  if (tree.children) {
    for (const children of tree.children) {
      if (tree.type === 'Text' && typeof children !== 'string' && children.type === 'View') {
        throw new Error('Nesting of <View> within <Text> is not currently supported.');
      } else if (tree.type !== 'Text' && typeof children === 'string') {
        throw new Error('Text strings must be rendered within a <Text> component');
      } else if (typeof children === 'object') {
        checkInvariants(children);
      }
    }
  }
}
