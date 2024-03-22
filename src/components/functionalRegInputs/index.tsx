import FormInput from "@/components/formInput";
import React from "react";
import {FormikErrors, FormikTouched} from "formik";
import IRegistrationValues from "@/interfaces/IRegistrationErrors";

const FunctionalRegInputs = (props:
 {errors: FormikErrors<IRegistrationValues>,
  touched: FormikTouched<IRegistrationValues>}) => {
  const {errors, touched} = props;


  return (
    <div className="m-5 ">
      <FormInput name="email"
                 placeholder="Enter your email"
                 type = "email"
                 labelText ="Your email"
                 error={errors.email}
                 touched={touched.email}
      />
      <FormInput name="password"
                 placeholder="Enter your password"
                 type = "password"
                 labelText ="Your password:"
                 error={errors.password}
                 touched={touched.password}
      />
      <FormInput name="confirmPassword"
                 placeholder="Enter password"
                 type = "pasword"
                 labelText ="Confirm password:"
                 error={errors.confirmPassword}
                 touched={touched.confirmPassword}
      />
    </div>
  )
}
export default FunctionalRegInputs;
