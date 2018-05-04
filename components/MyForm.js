// @flow
import React from 'react';
import { compose } from 'redux';
import { withFormik } from 'formik';
import Yup from 'yup';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  container: {
    backgroundColor: 'blue'
  }
});

type Props = {
  foo: string,
  values: Object,
  handleChange: Function,
  handleBlur: Function,
  isSubmitting: boolean,
  handleSubmit: Function
};

const MyForm = (props: Props) => {
  const {
    values,
    handleChange,
    handleBlur,
    isSubmitting,
    handleSubmit
  } = props;
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email" style={{ display: 'block' }}>
        Email
      </label>
      <input
        id="email"
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
  );
};

const enhance = compose(
  withStyles(styles),
  withFormik({
    mapPropsToValues: props => ({ foo: props.foo }),
    handleSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 1000);
    },
    validationSchema: props =>
      Yup.object().shape({
        foo: Yup.string()
      }),
    displayName: 'MyForm' // helps with React DevTools
  })
);

export default enhance(MyForm);
