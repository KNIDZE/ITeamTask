import AppHeader from '@/components/appHeader';
import React, { useEffect } from 'react';
import { Form, Formik, FormikValues } from 'formik';
import { registerUser, SignupSchema } from '@/modules/profile';
import PersonalRegInputs from '@/components/personalRegInputs';
import FunctionalRegInputs from '@/components/functionalRegInputs';
import { useRouter } from 'next/router';

const CreateProfile = () => {
  const router = useRouter();
  useEffect(() => {
    // if user already registered - navigate to profile page
    if (localStorage.getItem('user')){
      router.push('/profile')
    }
  }, []);

  const submitRegistration = (values: FormikValues) => {
    registerUser(values);
    router.push('/jobs');
  };

  return (
    <div className="flex flex-col h-screen items-center text-center">
      <AppHeader />
      <h3 className="text-3xl  mb-5">Create new account</h3>
      <Formik initialValues={{
        email: '',
        password: '',
        confirmPassword: '',
        name: '',
        desiredPosition: '',
        about: ''
      }}
              validationSchema={SignupSchema}
              onSubmit={submitRegistration}>
        {({ errors, touched }) => (
          <Form className="bg-blue-500 p-5 flex flex-col
         justify-center items-center rounded-2xl ">
            <div className="flex">
              <PersonalRegInputs errors={errors} touched={touched} />
              <FunctionalRegInputs errors={errors} touched={touched} />
            </div>
            <button type="submit" className="bg-white text-blue-600 py-2 px-4 rounded">
              Register
            </button>
          </Form>)}
      </Formik>
    </div>);
};
export default CreateProfile;
