import * as Yup from 'yup';
import { FormikValues } from 'formik';

export const SignupSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, 'Too Short!')
    .required('Required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  name: Yup.string()
    .required('Required'),
  about: Yup.string()
    .required('Required'),
  desiredPosition: Yup.string().required('Required')
});


export const logOut = () => {
  localStorage.clear();
};

export const registerUser = (values: FormikValues) => {
  localStorage.setItem('user',
    JSON.stringify({
      name: values.name,
      about: values.about,
      desiredPosition: values.desiredPosition,
      email: values.email,
      password: values.password
    }));
};
