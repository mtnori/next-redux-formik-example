// @flow
import * as React from 'react';

function injectProps<Props: {}>(
  Component: React.ComponentType<Props>
): React.ComponentType<$Diff<Props, { foo: number | void }>> {
  // implementation...
  return function WrapperComponent(props: Props) {
    return <Component {...props} foo={42} />;
  };
}

/*
class MyComponent extends React.Component<{
  a: number,
  b: number,
  foo: number
}> {
  render() {
    const { a, b, foo } = this.props;
    return (
      <div>
        <p>a:{a}</p>
        <p>b:{b}</p>
        <p>foo:{foo}</p>
      </div>
    );
  }
}
*/

const MyComponent = ({ a, b, foo }: { a: number, b: number, foo: number }) => (
  <div>
    <p>a:{a}</p>
    <p>b:{b}</p>
    <p>foo:{foo}</p>
  </div>
);

const MyEnhancedComponent2 = injectProps(MyComponent);

export default MyEnhancedComponent2;
