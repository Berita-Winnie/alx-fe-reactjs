import {Formik, Form, Field, ErrorMessage } from 'formik';
import *as Yup from 'yup';

const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('email is required'),
    password: Yup.string().password('password must conatin at least 8 characters').required('Password is required')
});

const FormikForm = () => (
    <Formik
    initialValues = {{name: '', email: '', password: ''}}
    validationSchema = {validationSchema}
    onSubmit = {(values) => {
      console.log(values);
    }} 
  >
     {() => (
            <Form>
                <Field type = "text" name="name" />
                <ErrorMessage name = "name"component="div" />
                <Field type = "email" name="email" />
                <ErrorMessage name="email" component="div" />
                <Field type = "password" name="password" />
                <ErrorMessage name="password" component="div" />
                <button type="submit">Submit</button>
            </Form>
        )}
    </Formik>
)