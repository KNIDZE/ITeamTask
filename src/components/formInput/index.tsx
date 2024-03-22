import { Field } from 'formik';
import React from 'react';
import IFormProps from '@/interfaces/IFormProps';
import FormArea from '@/components/formArea';


export default function FormInput(props: IFormProps) {
  const {
    labelText,
    name, type,
    placeholder,
    className,
    touched,
    error,
    textArea
  } = props;
  return (
    <div className="mb-8 items-start flex flex-col relative">
      <label htmlFor="name" className="block">{labelText}</label>
      {textArea ?
        <Field
          id={name}
          name={name}
          as={FormArea}
          placeholder={placeholder}
          className={`w-64 text-xl resize-none p-1 outline-0 ${className ? className : ''}`}
        /> :
        <Field
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          className={`w-64 text-xl outline-0 p-1 ${className ? className : ''}`}
          autoComplete="on" />
      }
      {touched && error && <div className="absolute -bottom-6 text-white">{error}</div>}
    </div>
  );
}
