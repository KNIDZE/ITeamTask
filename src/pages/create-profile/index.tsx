import AppHeader from "@/components/header";
import React, {useEffect, useState} from "react";
import {Form, Formik, FormikValues } from "formik";
import {SignupSchema} from "@/modules/profile";
import PersonalRegInputs from "@/components/personalRegInputs";
import FunctionalRegInputs from "@/components/functionalRegInputs";
import {useRouter} from "next/router";
const Register = () => {
  const router = useRouter();
  const [storage, setStorage] = useState<Storage>();
  useEffect(()=>{
    setStorage(localStorage)
  },[])

  const submitRegistration = (values: FormikValues) => {
    if (storage){
      storage.setItem('user',
        JSON.stringify({name: values.name,
        about: values.about,
        desiredPosition: values.desiredPosition,
        email: values.email,
        password: values.password}));
    }
    router.push('/jobs')
  }

  return (
    <div className="flex flex-col h-screen items-center text-center">
      <AppHeader/>
      <h3>Create new account</h3>
      <Formik initialValues={{
        email: '',
        password: '',
        confirmPassword: '',
        name: '',
        desiredPosition: '',
        about: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={submitRegistration}>
        {({ errors, touched }) => (
        <Form className="bg-blue-500 p-5 flex flex-col
         justify-center items-center rounded-2xl absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2  ">
          <div className="flex">
            <PersonalRegInputs errors={errors} touched={touched}/>
            <FunctionalRegInputs errors={errors} touched={touched}/>
          </div>
            <button type="submit" className="bg-white text-blue-600 py-2 px-4 rounded">
              Register
            </button>
        </Form>)}
      </Formik>
    </div>)
}
export default Register;
