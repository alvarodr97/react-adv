import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';

export const FormikComponents = () => {

  return (
    <div>
      <h1>Formik Components</h1>

      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          terms: false,
          jobType: ''
        }}
        onSubmit={(values) => {
          console.log(values)
        }}
        validationSchema={
          Yup.object({
            firstName: Yup.string().max(15, '15 caracteres o menos').required('Requerido'),
            lastName: Yup.string().max(15, '15 caracteres o menos').required('Requerido'),
            email: Yup.string().email('Email incorrecto').required('Requerido'),
            terms: Yup.boolean().oneOf([true], 'Debe aceptar las condiciones'),
            jobType: Yup.string().notOneOf(['it-jr'], 'Opcion no permitida').required('Requerido')
          })
        }
      >

        {
          (formik) => (
            <Form>
              <label htmlFor='firstName'>First Name</label>
              <Field name="firstName" type="text" />
              <ErrorMessage name="firstName" component="span" />

              <label htmlFor='lastName'>Last Name</label>
              <Field name="lastName" type="text" />
              <ErrorMessage name="lastName" component="span" />

              <label htmlFor='email'>Email</label>
              <Field name="email" type="text" />
              <ErrorMessage name="email" component="span" />

              <label htmlFor='jobType'>Job Type</label>
              <Field name="jobType" as="select">
                <option value="">Escoge una opcion</option>
                <option value="Front">Front End Developer</option>
                <option value="Back">Back End Developer</option>
                <option value="Full">Full Developer</option>
                <option value="it-jr">IT Jr.</option>
              </Field>

              <label>
              <Field name="terms" type="checkbox" />
                Terms and Conditions
              </label>
              <ErrorMessage name="terms" component="span" />

              <button type='submit'>Submit</button>

            </Form>
          )
        }
        
      </Formik>

      
    </div>
  )
}
