import FormInput from '@/components/formInput';
import React from 'react';
import { FormikErrors, FormikTouched } from 'formik';
import IRegistrationValues from '@/interfaces/IRegistrationErrors';

const PersonalRegInputs = (props: {
  errors: FormikErrors<IRegistrationValues>;
  touched: FormikTouched<IRegistrationValues>
}) => {
  const { errors, touched } = props;

  return (
    <div className="m-5 ">
      <FormInput name="name"
                 placeholder="Enter your name"
                 type="text"
                 labelText="Your name"
                 error={errors.name}
                 touched={touched.name}
      />
      <FormInput name="desiredPosition"
                 placeholder="Enter your position"
                 type="text"
                 labelText="Your desired position:"
                 error={errors.desiredPosition}
                 touched={touched.desiredPosition}
      />
      <FormInput name="about"
                 placeholder="About you"
                 type="text"
                 labelText="About you:"
                 textArea
                 error={errors.about}
                 touched={touched.about}
      />
    </div>
  );
};
export default PersonalRegInputs;
