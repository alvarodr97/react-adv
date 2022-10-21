import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { MyCheckbox, MySelect, MyTextInput } from '../components';

import '../styles/styles.css';

export const FormikAbstraction = () => {

  return (
    <div>
      <h1>Formik Abstraction</h1>

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
              <MyTextInput label="First Name" name="firstName" placeholder='Escribe tu nombre' />
              <MyTextInput label="Last Name" name="lastName" />
              <MyTextInput label="Email" name="email" type="email" />
              
              <MySelect name="jobType" label="Job Type">
                <option value="">Escoge una opcion</option>
                <option value="Front">Front End Developer</option>
                <option value="Back">Back End Developer</option>
                <option value="Full">Full Developer</option>
                <option value="it-jr">IT Jr.</option>
              </MySelect>

              <MyCheckbox label="Terms and Conditions" name="terms" />

              <button type='submit'>Submit</button>

            </Form>
          )
        }
        
      </Formik>

      
    </div>
  )
}
