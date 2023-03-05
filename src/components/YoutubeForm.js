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

const validationSchema = Yup.object({
  name: Yup.string().required('Required !'),
  email: Yup.string().email('Invalid email format !').required('Required !'),
  channel: Yup.string().required('Required !'),
});

function YoutubeForm() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
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
            {...formik.getFieldProps('name')}
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
            {...formik.getFieldProps('email')}
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
            {...formik.getFieldProps('channel')}
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
