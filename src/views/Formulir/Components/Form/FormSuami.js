import { useState } from 'react';
import React from 'react';
import { FileUploader } from 'react-drag-drop-files';

const FormSuami = (props) => {
  const {
    step,
    steps,
    formState,
    setFormState,
    handleInputChange,
    register,
    setValue,
  } = props;
  const [file, setFile] = useState(null);
  const [fileContent, setFileContent] = useState(null);
  const fileTypes = ['JPEG', 'PNG', 'GIF', 'JPG'];

  const handleChange = (file) => {
    if (file.length !== 0) {
      setFormState({
        ...formState,
        pas_foto_suami: URL.createObjectURL(file),
      });
      setFile(URL.createObjectURL(file));
    }
  };
  return (
    <div
      className={` border border-gray-500 rounded p-4 ${
        step.position < steps.id
          ? 'transition-transform'
          : 'transition-transform-out'
      }  ${step.position === steps.id ? 'transform ' : ''}`}
    >
      <div class='flex flex-col md:flex-row'>
        <div class='w-full mx-2 flex-1 svelte-1l8159u'>
          <div class='font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase'>
            {' '}
            Nama Lengkap
          </div>
          <div class='bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u'>
            <input
              type='text'
              placeholder='nama lengkap'
              autoComplete='off'
              class='p-1 px-2 appearance-none outline-none w-full text-gray-800'
              name='nama_lengkap_suami'
              id='nama_lengkap_suami'
              {...register('nama_lengkap_suami', {
                required: true,
              })}
              onChange={(e) => {
                handleInputChange(e);
              }}
              value={formState.nama_lengkap_suami}
            />{' '}
          </div>
        </div>
        <div class='w-full mx-2 flex-1 svelte-1l8159u'>
          <div class='font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase'>
            {' '}
            Nama Panggilan
          </div>
          <div class='bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u'>
            <input
              type='text'
              placeholder='nama panggilan'
              autoComplete='off'
              class='p-1 px-2 appearance-none outline-none w-full text-gray-800'
              name='nama_panggilan_suami'
              id='nama_panggilan_suami'
              {...register('nama_panggilan_suami', {
                required: true,
              })}
              onChange={(e) => {
                handleInputChange(e);
              }}
              value={formState.nama_panggilan_suami}
            />{' '}
          </div>
        </div>
      </div>
      <div class='flex flex-col md:flex-row'>
        <div class='w-full mx-2 flex-1 svelte-1l8159u'>
          <div class='font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase'>
            {' '}
            Nama Ayah
          </div>
          <div class='bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u'>
            <input
              type='text'
              placeholder='nama ayah'
              autoComplete='off'
              class='p-1 px-2 appearance-none outline-none w-full text-gray-800'
              name='nama_ayah_suami'
              id='nama_ayah_suami'
              {...register('nama_ayah_suami', {
                required: true,
              })}
              onChange={(e) => {
                handleInputChange(e);
              }}
              value={formState.nama_ayah_suami}
            />{' '}
          </div>
        </div>
        <div class='w-full mx-2 flex-1 svelte-1l8159u'>
          <div class='font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase'>
            {' '}
            Nama Ibu
          </div>
          <div class='bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u'>
            <input
              type='text'
              placeholder='nama ibu'
              autoComplete='off'
              class='p-1 px-2 appearance-none outline-none w-full text-gray-800'
              name='nama_ibu_suami'
              id='nama_ibu_suami'
              {...register('nama_ibu_suami', {
                required: true,
              })}
              onChange={(e) => {
                handleInputChange(e);
              }}
              value={formState.nama_ibu_suami}
            />{' '}
          </div>
        </div>
      </div>
      <div class='flex flex-col md:flex-row'>
        <div class='w-full mx-2 flex-1 svelte-1l8159u'>
          <div class='font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase'>
            {' '}
            No HP
          </div>
          <div class='bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u'>
            <input
              type='number'
              placeholder='no hp'
              autoComplete='off'
              class='p-1 px-2 appearance-none outline-none w-full text-gray-800'
              name='no_hp_suami'
              id='no_hp_suami'
              {...register('no_hp_suami', {
                required: true,
              })}
              onChange={(e) => {
                setValue(e.target.name, e.target.value.slice(0, 14));
                setFormState({
                  ...formState,
                  [e.target.name]: e.target.value.slice(0, 14),
                });
              }}
              value={formState.no_hp_suami}
            />{' '}
          </div>
        </div>
        <div class='w-full mx-2 flex-1 svelte-1l8159u'>
          <div class='font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase'>
            {' '}
            Anak Ke
          </div>
          <div class='bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u'>
            <select
              placeholder='Anak ke'
              autoComplete='off'
              aria-label='Floating'
              class='p-1 px-2 appearance-none outline-none w-full text-gray-800'
              name='anak_ke_suami'
              id='anak_ke_suami'
              {...register('anak_ke_suami', {
                required: true,
              })}
              onChange={(e) => {
                handleInputChange(e);
              }}
              value={formState.anak_ke_suami}
            >
              {Array.from({ length: 10 }).map((_, index) => (
                <option value={index + 1} key={index + 1}>
                  Anak ke-{index + 1}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div class='flex flex-col md:flex-row'>
        <div class='w-full mx-2 flex-1 svelte-1l8159u'>
          <div class='font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase'>
            {' '}
            Pas Foto
          </div>
        </div>
      </div>
      <FileUploader
        multiple={false}
        handleChange={(file) => handleChange(file)}
        name='file'
        types={fileTypes}
        dropMessageStyle={{ margin: '0  0.5rem' }}
        style={{ position: 'relative' }}
      >
        <div class='flex items-center justify-center w-full px-2 my-4'>
          <label
            for='dropzone-file'
            class='flex flex-col items-center justify-center w-full h-96 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 '
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
                <span class='font-semibold'>Click Untuk upload</span> atau drag
                and drop
              </p>
              <p class='text-xs text-gray-500 '>
                SVG, PNG, JPG atau GIF (MAX. 3 Mb)
              </p>
            </div>
          </label>
        </div>
        {file ? (
          <div className='flex items-center justify-center w-full  h-96 absolute rounded-xl bottom-0 z-0 transition-opacity duration-300  border-black hover:opacity-50 object-contain'>
            <img
              src={formState?.pas_foto_suami}
              className='rounded-xl h-full object-contain px-2 w-full'
              alt='image'
            />
          </div>
        ) : (
          ''
        )}{' '}
      </FileUploader>
      <p>{file ? `Nama File: ${file?.name}` : ''}</p>
    </div>
  );
};

export default FormSuami;
