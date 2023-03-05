import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

const initialValues = {
  name: '',
  email: '',
  channel: '',
};

const onSubmit = (values) => {
  console.log('Submit', values);
};

const validate = (values) => {
  let errors = {};
  if (!values.name) {
    errors.name = 'Required';
  }
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email';
  }
  if (!values.channel) {
    errors.channel = 'Required';
  }

  return errors;
};

function YoutubeForm() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name ? (
            <div style={{ color: 'red' }}> {formik.errors.name}</div>
          ) : (
            ''
          )}
        </div>
        <div className="form-control">
          <label>E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div style={{ color: 'red' }}> {formik.errors.email}</div>
          ) : (
            ''
          )}
        </div>
        <div className="form-control">
          <label>Channel</label>
          <input
            type="text"
            id="channel"
            name="channel"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.channel}
          />
          {formik.touched.channel && formik.errors.channel ? (
            <div style={{ color: 'red' }}> {formik.errors.channel}</div>
          ) : (
            ''
          )}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default YoutubeForm;
