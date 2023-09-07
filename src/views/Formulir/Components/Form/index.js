import React from 'react';
import FormIstri from './FormIstri';
import FormSuami from './FormSuami';
import FormAlamat from './FormAlamat';

const Form = (props) => {
  const { step, steps } = props;
  const formulirs = [
    {
      id: 1,
      label: 'Formulir Suami',
      form: <FormSuami step={step} steps={steps} />,
    },
    {
      id: 2,
      label: 'Formulir Istri',
      form: <FormIstri step={step} steps={steps} />,
    },
    {
      id: 3,
      label: 'Formulir Alamat',
      form: <FormAlamat step={step} steps={steps} />,
    },
  ];
  return (
    <>
      <form action=''>
        {formulirs.map((item) => (
          <>{step.position === item.id ? item.form : ''}</>
        ))}
      </form>
    </>
  );
};

export default Form;
