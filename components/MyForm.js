import React from 'react';
import { withFormik } from 'formik';

const formikEnhancer = withFormik({
  mapPropsToValues: props => ({ foo: props.foo }),
  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },
  enableReinitialize: true,
  displayName: 'MyForm', // helps with React DevTools
});

const MyForm = props => {
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

export default formikEnhancer(MyForm);