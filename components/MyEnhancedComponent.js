// @flow
import * as React from 'react';

/*
function mapProps<PropsInput: { foo: number }, PropsOutput: { bar: number }>(
  mapperFn: PropsInput => PropsOutput
): (React.ComponentType<PropsOutput>) => React.ComponentType<PropsInput> {
  return Component =>
    class extends React.Component<PropsInput> {
      render() {
        const newProps = mapperFn(this.props);
        return <Component {...newProps} />;
      }
    };
}
*/

type PropsA = {
  foo: number
};

type PropsB = {
  bar: number
};

function mapProps<PropsInput: PropsA, PropsOutput: PropsB>(
  mapperFn: PropsInput => PropsOutput
): (React.ComponentType<PropsOutput>) => React.ComponentType<PropsInput> {
  return Component => (props: PropsInput) => {
    const newProps: PropsOutput = mapperFn(props);
    return <Component {...newProps} />;
  };
}

function MyComponent({ bar }: { bar: number }) {
  return <div>{bar}</div>;
}

const MyEnhancedComponent = mapProps(({ foo }: PropsA): PropsB => ({
  bar: foo + 1
}))(MyComponent);

export default MyEnhancedComponent;
