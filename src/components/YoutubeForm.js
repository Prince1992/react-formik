import { useFormik } from 'formik';
import React from 'react';

function YoutubeForm() {
  const formik = useFormik({
    initialValues: {
      name: 'Amar',
      email: '',
      channel: '',
    },
    onSubmit: (values) => {
      console.log('Form Data', values);
    },
  });

  //console.log('Form Values', formik.values);
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />

        <label>E-mail</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />

        <label>Channel</label>
        <input
          type="text"
          id="channel"
          name="channel"
          onChange={formik.handleChange}
          value={formik.values.channel}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default YoutubeForm;
