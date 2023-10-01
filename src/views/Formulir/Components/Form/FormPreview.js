import { useState } from 'react';
import React from 'react';

const FormPrivew = (props) => {
  const { step, steps, formState } = props;

  // console.log(errors.nama_lengkap_suami?.type, '--------');
  return (
    <div
      className={` shadow-md border-gray-500 rounded p-3 ${
        step.position < steps.id
          ? 'transition-transform'
          : 'transition-transform-out'
      }  ${step.position === steps.id ? 'transform ' : ''}`}
    >
      <div class='flex flex-col md:flex-row sm:hidden'>
        <h1 className='m-auto text-center text-3xl font-bold mb-2'>Preview</h1>
      </div>
      <div class='flex flex-col md:flex-row'>
        <h1>Hello World !!</h1>
      </div>
    </div>
  );
};

export default FormPrivew;
