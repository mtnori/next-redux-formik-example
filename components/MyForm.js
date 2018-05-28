// @flow
import * as React from 'react';
import { compose } from 'recompose';
import { withFormik } from 'formik';
import Yup from 'yup';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  container: {
    backgroundColor: 'blue'
  }
});

type PropsOutput = {
  values: Object,
  handleChange: Function,
  handleBlur: Function,
  isSubmitting: boolean,
  handleSubmit: Function,
  classes: Object
};

type PropsInput = {
  foo: string
};

const MyForm = ({
  values,
  handleChange,
  handleBlur,
  isSubmitting,
  handleSubmit,
  classes
}: PropsOutput) => (
  <div className={classes.container}>
    <form onSubmit={handleSubmit}>
      <label htmlFor="foo" style={{ display: 'block' }}>
        Foo
      </label>
      <input
        id="foo"
        placeholder="Enter your email"
        type="text"
        value={values.foo}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </form>
  </div>
);

const enhance: (
  React.ComponentType<PropsOutput>
) => React.ComponentType<PropsInput> = compose(
  withStyles(styles),
  withFormik({
    mapPropsToValues: props => ({ foo: props.foo }),
    handleSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        console.log(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 1000);
    },
    validationSchema: () =>
      Yup.object().shape({
        foo: Yup.string()
      }),
    displayName: 'MyForm' // helps with React DevTools
  })
);

export default enhance(MyForm);
