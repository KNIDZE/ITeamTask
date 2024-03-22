import React, { DetailedHTMLProps, TextareaHTMLAttributes } from 'react';

const FormArea = (props: DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>) =>
  <textarea {...props} />
export default FormArea;
