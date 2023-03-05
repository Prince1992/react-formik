import { Formik, Form, Field, ErrorMessage } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import TextError from './TextError';

const initialValues = {
  name: '',
  email: '',
  channel: '',
  comments: '',
  address: '',
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
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" component={TextError} />
        </div>
        <div className="form-control">
          <label>E-mail</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email">
            {(errorMsg) => <div className="error">{errorMsg}</div>}
          </ErrorMessage>
        </div>
        <div className="form-control">
          <label>Channel</label>
          <Field type="text" id="channel" name="channel" />
          <ErrorMessage name="channel" component={TextError} />
        </div>
        <div className="form-control">
          <label>Comments</label>
          <Field as="textarea" id="comments" name="comments" />
          <ErrorMessage name="comments" component={TextError} />
        </div>
        <div className="form-control">
          <label>Address</label>
          <Field as="textarea" id="address" name="address">
            {(props) => {
              const { field, form, meta } = props;
              console.log(props);
              return (
                <div>
                  <input type="text" id="address" {...field} />
                  {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                </div>
              );
            }}
          </Field>
          <ErrorMessage name="address" component={TextError} />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default YoutubeForm;
