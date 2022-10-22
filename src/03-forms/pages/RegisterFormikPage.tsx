import { Form, Formik } from 'formik'

import '../styles/styles.css'
import * as Yup from 'yup';
import { MyTextInput } from '../components';

export const RegisterFormikPage = () => {

    
  

  


  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password1: '',
          password2: ''
        }}
        onSubmit={(values) => {
          console.log(values)
        }}
        validationSchema={
          Yup.object({
            name: Yup.string().min(3, "Minimo 3 caracteres").max(15, "Maximo 15 caracteres").required("Requerido"),
            email: Yup.string().email("Revisa el formato").required("Requerido"),
            password1: Yup.string().min(6, "Minimo 6 caracteres").required("Requerido"),
            password2: Yup.string().oneOf([Yup.ref("password1")], "Las contraseñas no coinciden").required("Requerido")
          })
        }
      >
        {
          ({handleReset}) => (
            <Form>
              <MyTextInput label="Nombre" name="name" placeholder='Escribe tu nombre' />
              <MyTextInput label="Email" name="email" type='email' placeholder='Escribe tu email' />
              <MyTextInput label="Password" name="password1" type='password' />
              <MyTextInput label="Confirm Password" name="password2" type='password' />

              <button type='submit'>Create</button>
              <button type='button' onClick={handleReset}>Reset</button>
            </Form>
          )
        }
        

      </Formik>
      
    </div>
  )
}
