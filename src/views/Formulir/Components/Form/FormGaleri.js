import { useState } from 'react';
import React from 'react';
import { FileUploader } from 'react-drag-drop-files';

const FormGaleri = (props) => {
  const { step, steps, formState, setFormState } = props;
  const [file, setFile] = useState(null);
  const fileTypes = ['JPEG', 'PNG', 'GIF'];

  const handleChange = (file) => {
    setFile(file);
  };
  return (
    <div
      className={` border border-gray-500 rounded p-4 ${
        step.position < steps.id
          ? 'transition-transform'
          : 'transition-transform-out'
      }  ${step.position === steps.id ? 'transform ' : ''}`}
    >
      <FileUploader
        multiple={true}
        handleChange={handleChange}
        name='file'
        types={fileTypes}
        dropMessageStyle={{ margin: '0  0.5rem' }}
        // style={}
      >
        <div class='flex items-center justify-center w-full px-2 my-4'>
          <label
            for='dropzone-file'
            class='flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 '
          >
            <div class='flex flex-col items-center justify-center pt-5 pb-6'>
              <svg
                class='w-8 h-8 mb-4 text-gray-500 '
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 20 16'
              >
                <path
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2'
                />
              </svg>
              <p class='mb-2 text-sm text-gray-500 '>
                <span class='font-semibold'>Click to upload</span> or drag and
                drop
              </p>
              <p class='text-xs text-gray-500 '>
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
          </label>
        </div>
      </FileUploader>
      <p>{file ? `File name: ${file[0].name}` : 'no files uploaded yet'}</p>
      <main class='p-4  h-auto pt-20'>
        <div class='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4'>
          <div class='border-2 border-dashed border-gray-300 rounded-lg h-32 md:h-64'></div>
          <div class='border-2 border-dashed rounded-lg border-gray-300 h-32 md:h-64'></div>
          <div class='border-2 border-dashed rounded-lg border-gray-300 h-32 md:h-64'></div>
          <div class='border-2 border-dashed rounded-lg border-gray-300 h-32 md:h-64'></div>
        </div>
        <div class='border-2 border-dashed rounded-lg border-gray-300 h-96 mb-4'></div>
      </main>
    </div>
  );
};

export default FormGaleri;
