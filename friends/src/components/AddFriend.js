import React from 'react';
import { Form, Field, withFormik } from 'formik'
import * as Yup from 'yup';

import { axiosWithAuth } from '../utils/axiosWithAuth';

const AddFriend = ({ values, isSubmitting }) => {
  return (
    <div>
      <h2>Add a Friend</h2>
      <Form>
          <Field type="text" name="name" placeholder="Name" />
          <Field type="number" name="age" placeholder="Age" />
          <Field type="text" name="email" placeholder="Email" />
          <button disabled={isSubmitting}>Add Friend</button>
      </Form>
    </div>
  )
}

const FormikAddForm = withFormik({
  mapPropsToValues({ name, age, email }) {
    return {
      name: name || '',
      age: age || '',
      email: email || ''
    }
  },

  validationSchema: Yup.object().shape({
    name: Yup.string()
      .required(),
    age: Yup.number()
      .required(),
    email: Yup.string()
      .email()
      .required()
  }),

  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    console.log(values)
    axiosWithAuth()
      .post('http://localhost:5000/api/friends', values)
      .then(res => {
        console.log(res);
        resetForm();
        setSubmitting(false)
      })
  }
})(AddFriend)

export default FormikAddForm;