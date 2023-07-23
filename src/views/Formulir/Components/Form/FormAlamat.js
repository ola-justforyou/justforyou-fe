import { useState } from 'react';
import React from 'react';
import { FileUploader } from 'react-drag-drop-files';

const FormAlamat = () => {
  const [file, setFile] = useState(null);
  const fileTypes = ['JPEG', 'PNG', 'GIF'];

  const handleChange = (file) => {
    setFile(file);
  };
  return (
    <>
      <div class='flex flex-col md:flex-row'>
        <div class='w-full mx-2 flex-1 svelte-1l8159u'>
          <div className='grid grid-cols-2 md:grid-cols-12 lg:grid-cols-12 gap-4 mt-3'>
            <div className='col-span-2 md:col-span-8 lg:col-span-5 '>
              <div class='font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase'>
                {' '}
                Nama Jalan
              </div>
              <div class='bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u'>
                <input
                  type='text'
                  placeholder='nama_jalan_akad'
                  class='p-1 px-2 appearance-none outline-none w-full text-gray-800'
                  name='nama_jalan_akad'
                  id='nama_jalan_akad'
                  onChange={() => console.log('testing')}
                  value={''}
                />{' '}
              </div>
            </div>
            <div className='col-span-1 md:col-span-2 lg:col-span-1'>
              <div class='font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase'>
                {' '}
                RT
              </div>
              <div class='bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u'>
                <input
                  type='number'
                  onWheel={(e) => e.target.blur()}
                  placeholder='001'
                  class='p-1 px-2 appearance-none outline-none w-full text-gray-800'
                  name='rt_akad'
                  id='rt_akad'
                  onChange={() => console.log('testing')}
                  value={''}
                />{' '}
              </div>
            </div>
            <div className='col-span-1 md:col-span-2 lg:col-span-1 '>
              <div class='font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase'>
                {' '}
                RW
              </div>
              <div class='bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u'>
                <input
                  type='number'
                  onWheel={(e) => e.target.blur()}
                  placeholder='001'
                  class='p-1 px-2 appearance-none outline-none w-full text-gray-800'
                  name='rw_akad'
                  id='rw_akad'
                  onChange={() => console.log('testing')}
                  value={''}
                />{' '}
              </div>
            </div>
            <div className='col-span-2 md:col-span-12 lg:col-span-5 '>
              <div class='font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase'>
                {' '}
                RW
              </div>
              <div class='bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u'>
                <select
                  className='p-1 px-2 appearance-none outline-none w-full text-gray-800 form-select'
                  aria-label='Floating'
                  id='kode_provinsi_istri'
                  name='kode_provinsi_istri'
                  onChange={(e) => {}}
                  // value={formState.kode_provinsi_istri}
                >
                  <option value=''> Provinsi </option>
                  <option value={'lampung'} key={1}>
                    lampung
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class='flex flex-col md:flex-row'>
        <div class='w-full mx-2 flex-1 svelte-1l8159u'>
          <div className='grid grid-cols-1  lg:grid-cols-12 gap-4 mt-3'>
            <div className='col-span-1  lg:col-span-4 bg-blue-200 p-4'>
              Kolom 1
            </div>
            <div className='col-span-1 lg:col-span-4 bg-green-200 p-4'>
              Kolom 2
            </div>
            <div className='col-span-1  lg:col-span-4 bg-yellow-200 p-4'>
              Kolom 3
            </div>
            <div className='col-span-1  lg:col-span-5 bg-yellow-700 p-4'>
              Kolom 4
            </div>
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
              class='p-1 px-2 appearance-none outline-none w-full text-gray-800'
              name='nama_ayah_suami'
              id='nama_ayah_suami'
              onChange={() => console.log('testing')}
              value={''}
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
              class='p-1 px-2 appearance-none outline-none w-full text-gray-800'
              name='nama_ibu_suami'
              id='nama_ibu_suami'
              onChange={() => console.log('testing')}
              value={''}
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
              class='p-1 px-2 appearance-none outline-none w-full text-gray-800'
              name='no_hp_suami'
              id='no_hp_suami'
              onChange={() => console.log('testing')}
              value={''}
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
              class='p-1 px-2 appearance-none outline-none w-full text-gray-800'
              name='nama_ibu_suami'
              id='nama_ibu_suami'
              onChange={() => console.log('testing')}
              value={''}
            />{' '}
          </div>
        </div>
      </div>
    </>
  );
};

export default FormAlamat;
