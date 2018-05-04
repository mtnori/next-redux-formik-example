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
  values: Object,
  handleChange: Function,
  handleBlur: Function,
  isSubmitting: boolean,
  handleSubmit: Function
};

const MyFormWithValid = (props: Props) => {
  const {
    values,
    errors,
    handleChange,
    handleBlur,
    isSubmitting,
    handleSubmit
  } = props;
  return (
    <form onSubmit={handleSubmit}>
      <input
        id="foo"
        type="text"
        value={values.foo}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {errors.foo && <div>{errors.foo}</div>}
      <input
        id="bar"
        type="text"
        value={values.bar}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <input
        id="baz"
        type="text"
        value={values.baz}
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
    mapPropsToValues: () => ({
      foo: 'foo',
      bar: 'bar',
      baz: 'baz'
    }),
    handleSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 1000);
    },
    validationSchema: props =>
      Yup.lazy(values =>
        Yup.object().shape({
          foo: values.bar
            ? Yup.string().required('foo is required')
            : Yup.string()
        })
      ),
    displayName: 'MyFormWithValid' // helps with React DevTools
  })
);

export default enhance(MyFormWithValid);
