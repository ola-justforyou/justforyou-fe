import { useState } from 'react';
import React from 'react';
import { FileUploader } from 'react-drag-drop-files';

const FormAlamatAkad = (props) => {
  const { step, steps, formState, setFormState } = props;
  return (
    <>
      <div class='flex flex-col md:flex-row'>
        <div class='w-full mx-2 flex-1 svelte-1l8159u'>
          <div className='grid grid-cols-2 md:grid-cols-12 lg:grid-cols-12 gap-4 '>
            <div className='col-span-2 md:col-span-8 lg:col-span-5 '>
              <div class='font-bold h-6  text-gray-600 text-xs leading-8 '>
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
              <div class='font-bold h-6  text-gray-600 text-xs leading-8 '>
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
              <div class='font-bold h-6  text-gray-600 text-xs leading-8 '>
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
              <div class='font-bold h-6  text-gray-600 text-xs leading-8 '>
                {' '}
                Provinsi
              </div>
              <div class='bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u'>
                <select
                  className='px-2 py-1.5 text-sm bg-white text-gray-900   w-full '
                  aria-label='Floating'
                  id='provinsi_akad'
                  name='provinsi_akad'
                  onChange={(e) => {}}
                  value={''}
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
          <div className='grid grid-cols-1  lg:grid-cols-12 gap-4 '>
            <div className='col-span-1  lg:col-span-4 '>
              <div class='font-bold h-6 text-gray-600 text-xs leading-8 '>
                {' '}
                Kabupaten/Kota
              </div>
              <div class='bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u'>
                <select
                  className='px-2 py-1.5 text-sm bg-white text-gray-900   w-full '
                  aria-label='Floating'
                  id='kabupaten_akad'
                  name='kabupaten_akad'
                  onChange={(e) => {}}
                  value={''}
                >
                  <option value=''> Kabupaten </option>
                  <option value={'lampung'} key={1}>
                    lampung
                  </option>
                </select>
              </div>
            </div>
            <div className='col-span-1  lg:col-span-4 '>
              <div class='font-bold h-6 text-gray-600 text-xs leading-8 '>
                {' '}
                Kecamatan
              </div>
              <div class='bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u'>
                <select
                  className='px-2 py-1.5 text-sm bg-white text-gray-900   w-full '
                  aria-label='Floating'
                  id='kecamatan_akad'
                  name='kecamatan_akad'
                  onChange={(e) => {}}
                  value={''}
                >
                  <option value=''> kecamatan </option>
                  <option value={'lampung'} key={1}>
                    lampung
                  </option>
                </select>
              </div>
            </div>
            <div className='col-span-1  lg:col-span-4 '>
              <div class='font-bold h-6  text-gray-600 text-xs leading-8 '>
                {' '}
                Kode Pos
              </div>
              <div class='bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u'>
                <input
                  type='number'
                  placeholder='kelurahan, Rumah warna hijau'
                  class='p-1 px-2 appearance-none outline-none w-full text-gray-800'
                  name='kode_pos_akad'
                  id='kode_pos_akad'
                  onChange={() => console.log('testing')}
                  value={''}
                />{' '}
              </div>
            </div>
          </div>
          <div className='grid grid-cols-1  lg:grid-cols-12 gap-4 '>
            <div className='col-span-1  lg:col-span-5 '>
              <div class='font-bold h-6  text-gray-600 text-xs leading-8 '>
                {' '}
                Detail Lainnya
              </div>
              <div class='bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u'>
                <input
                  type='text'
                  placeholder='kelurahan, Rumah warna hijau'
                  class='p-1 px-2 appearance-none outline-none w-full text-gray-800'
                  name='detail_alamat_akad'
                  id='detail_alamat_akad'
                  onChange={() => console.log('testing')}
                  value={''}
                />{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const FormAlamatResepsi = () => {
  return (
    <>
      <div class='flex flex-col md:flex-row'>
        <div class='w-full mx-2 flex-1 svelte-1l8159u'>
          <div className='grid grid-cols-2 md:grid-cols-12 lg:grid-cols-12 gap-4 '>
            <div className='col-span-2 md:col-span-8 lg:col-span-5 '>
              <div class='font-bold h-6  text-gray-600 text-xs leading-8 '>
                {' '}
                Nama Jalan
              </div>
              <div class='bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u'>
                <input
                  type='text'
                  placeholder='nama_jalan_resepsi'
                  class='p-1 px-2 appearance-none outline-none w-full text-gray-800'
                  name='nama_jalan_resepsi'
                  id='nama_jalan_resepsi'
                  onChange={() => console.log('testing')}
                  value={''}
                />{' '}
              </div>
            </div>
            <div className='col-span-1 md:col-span-2 lg:col-span-1'>
              <div class='font-bold h-6  text-gray-600 text-xs leading-8 '>
                {' '}
                RT
              </div>
              <div class='bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u'>
                <input
                  type='number'
                  onWheel={(e) => e.target.blur()}
                  placeholder='001'
                  class='p-1 px-2 appearance-none outline-none w-full text-gray-800'
                  name='rt_resepsi'
                  id='rt_resepsi'
                  onChange={() => console.log('testing')}
                  value={''}
                />{' '}
              </div>
            </div>
            <div className='col-span-1 md:col-span-2 lg:col-span-1 '>
              <div class='font-bold h-6  text-gray-600 text-xs leading-8 '>
                {' '}
                RW
              </div>
              <div class='bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u'>
                <input
                  type='number'
                  onWheel={(e) => e.target.blur()}
                  placeholder='001'
                  class='p-1 px-2 appearance-none outline-none w-full text-gray-800'
                  name='rw_resepsi'
                  id='rw_resepsi'
                  onChange={() => console.log('testing')}
                  value={''}
                />{' '}
              </div>
            </div>
            <div className='col-span-2 md:col-span-12 lg:col-span-5 '>
              <div class='font-bold h-6  text-gray-600 text-xs leading-8 '>
                {' '}
                Provinsi
              </div>
              <div class='bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u'>
                <select
                  className='px-2 py-1.5 text-sm bg-white text-gray-900   w-full '
                  aria-label='Floating'
                  id='provinsi_resepsi'
                  name='provinsi_resepsi'
                  onChange={(e) => {}}
                  value={''}
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
          <div className='grid grid-cols-1  lg:grid-cols-12 gap-4 '>
            <div className='col-span-1  lg:col-span-4 '>
              <div class='font-bold h-6 text-gray-600 text-xs leading-8 '>
                {' '}
                Kabupaten/Kota
              </div>
              <div class='bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u'>
                <select
                  className='px-2 py-1.5 text-sm bg-white text-gray-900   w-full '
                  aria-label='Floating'
                  id='kabupaten_akad'
                  name='kabupaten_akad'
                  onChange={(e) => {}}
                  value={''}
                >
                  <option value=''> Kabupaten </option>
                  <option value={'lampung'} key={1}>
                    lampung
                  </option>
                </select>
              </div>
            </div>
            <div className='col-span-1  lg:col-span-4 '>
              <div class='font-bold h-6 text-gray-600 text-xs leading-8 '>
                {' '}
                Kecamatan
              </div>
              <div class='bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u'>
                <select
                  className='px-2 py-1.5 text-sm bg-white text-gray-900   w-full '
                  aria-label='Floating'
                  id='kecamatan_akad'
                  name='kecamatan_akad'
                  onChange={(e) => {}}
                  value={''}
                >
                  <option value=''> kecamatan </option>
                  <option value={'lampung'} key={1}>
                    lampung
                  </option>
                </select>
              </div>
            </div>
            <div className='col-span-1  lg:col-span-4 '>
              <div class='font-bold h-6  text-gray-600 text-xs leading-8 '>
                {' '}
                Kode Pos
              </div>
              <div class='bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u'>
                <input
                  type='number'
                  placeholder='kelurahan, Rumah warna hijau'
                  class='p-1 px-2 appearance-none outline-none w-full text-gray-800'
                  name='kode_pos_akad'
                  id='kode_pos_akad'
                  onChange={() => console.log('testing')}
                  value={''}
                />{' '}
              </div>
            </div>
          </div>
          <div className='grid grid-cols-1  lg:grid-cols-12 gap-4 '>
            <div className='col-span-1  lg:col-span-5 '>
              <div class='font-bold h-6  text-gray-600 text-xs leading-8 '>
                {' '}
                Detail Lainnya
              </div>
              <div class='bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u'>
                <input
                  type='text'
                  placeholder='kelurahan, Rumah warna hijau'
                  class='p-1 px-2 appearance-none outline-none w-full text-gray-800'
                  name='detail_alamat_akad'
                  id='detail_alamat_akad'
                  onChange={() => console.log('testing')}
                  value={''}
                />{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const FormAlamatPengirimanHadiah = () => {
  return (
    <>
      <div class='flex flex-col md:flex-row'>
        <h1 className='m-auto text-center text-4xl font-bold my-6'>
          Alamat Pengiriman Gift
        </h1>
      </div>
      <div class='flex flex-col md:flex-row'>
        <div class='w-full mx-2 flex-1 svelte-1l8159u'>
          <div className='grid grid-cols-2 md:grid-cols-12 lg:grid-cols-12 gap-4 '>
            <div className='col-span-2 md:col-span-8 lg:col-span-5 '>
              <div class='font-bold h-6  text-gray-600 text-xs leading-8 '>
                {' '}
                Nama Jalan
              </div>
              <div class='bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u'>
                <input
                  type='text'
                  placeholder='nama_jalan_hadiah'
                  class='p-1 px-2 appearance-none outline-none w-full text-gray-800'
                  name='nama_jalan_hadiah'
                  id='nama_jalan_hadiah'
                  onChange={() => console.log('testing')}
                  value={''}
                />{' '}
              </div>
            </div>
            <div className='col-span-1 md:col-span-2 lg:col-span-1'>
              <div class='font-bold h-6  text-gray-600 text-xs leading-8 '>
                {' '}
                RT
              </div>
              <div class='bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u'>
                <input
                  type='number'
                  onWheel={(e) => e.target.blur()}
                  placeholder='001'
                  class='p-1 px-2 appearance-none outline-none w-full text-gray-800'
                  name='rt_hadiah'
                  id='rt_hadiah'
                  onChange={() => console.log('testing')}
                  value={''}
                />{' '}
              </div>
            </div>
            <div className='col-span-1 md:col-span-2 lg:col-span-1 '>
              <div class='font-bold h-6  text-gray-600 text-xs leading-8 '>
                {' '}
                RW
              </div>
              <div class='bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u'>
                <input
                  type='number'
                  onWheel={(e) => e.target.blur()}
                  placeholder='001'
                  class='p-1 px-2 appearance-none outline-none w-full text-gray-800'
                  name='rw_hadiah'
                  id='rw_hadiah'
                  onChange={() => console.log('testing')}
                  value={''}
                />{' '}
              </div>
            </div>
            <div className='col-span-2 md:col-span-12 lg:col-span-5 '>
              <div class='font-bold h-6  text-gray-600 text-xs leading-8 '>
                {' '}
                Provinsi
              </div>
              <div class='bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u'>
                <select
                  className='px-2 py-1.5 text-sm bg-white text-gray-900   w-full '
                  aria-label='Floating'
                  id='provinsi_hadiah'
                  name='provinsi_hadiah'
                  onChange={(e) => {}}
                  value={''}
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
          <div className='grid grid-cols-1  lg:grid-cols-12 gap-4 '>
            <div className='col-span-1  lg:col-span-4 '>
              <div class='font-bold h-6 text-gray-600 text-xs leading-8 '>
                {' '}
                Kabupaten/Kota
              </div>
              <div class='bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u'>
                <select
                  className='px-2 py-1.5 text-sm bg-white text-gray-900   w-full '
                  aria-label='Floating'
                  id='kabupaten_akad'
                  name='kabupaten_akad'
                  onChange={(e) => {}}
                  value={''}
                >
                  <option value=''> Kabupaten </option>
                  <option value={'lampung'} key={1}>
                    lampung
                  </option>
                </select>
              </div>
            </div>
            <div className='col-span-1  lg:col-span-4 '>
              <div class='font-bold h-6 text-gray-600 text-xs leading-8 '>
                {' '}
                Kecamatan
              </div>
              <div class='bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u'>
                <select
                  className='px-2 py-1.5 text-sm bg-white text-gray-900   w-full '
                  aria-label='Floating'
                  id='kecamatan_akad'
                  name='kecamatan_akad'
                  onChange={(e) => {}}
                  value={''}
                >
                  <option value=''> kecamatan </option>
                  <option value={'lampung'} key={1}>
                    lampung
                  </option>
                </select>
              </div>
            </div>
            <div className='col-span-1  lg:col-span-4 '>
              <div class='font-bold h-6  text-gray-600 text-xs leading-8 '>
                {' '}
                Kode Pos
              </div>
              <div class='bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u'>
                <input
                  type='number'
                  placeholder='kelurahan, Rumah warna hijau'
                  class='p-1 px-2 appearance-none outline-none w-full text-gray-800'
                  name='kode_pos_akad'
                  id='kode_pos_akad'
                  onChange={() => console.log('testing')}
                  value={''}
                />{' '}
              </div>
            </div>
          </div>
          <div className='grid grid-cols-1  lg:grid-cols-12 gap-4 '>
            <div className='col-span-1  lg:col-span-5 '>
              <div class='font-bold h-6  text-gray-600 text-xs leading-8 '>
                {' '}
                Detail Lainnya
              </div>
              <div class='bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u'>
                <input
                  type='text'
                  placeholder='kelurahan, Rumah warna hijau'
                  class='p-1 px-2 appearance-none outline-none w-full text-gray-800'
                  name='detail_alamat_akad'
                  id='detail_alamat_akad'
                  onChange={() => console.log('testing')}
                  value={''}
                />{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const FormAlamat = (props) => {
  const { step, steps } = props;

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
      <div class='flex flex-col md:flex-row'>
        <h1 className='m-auto text-center text-4xl font-bold my-6'>
          Alamat Akad Pernikahan
        </h1>
      </div>
      <FormAlamatAkad />
      <div class='flex flex-col md:flex-row'>
        <h1 className='m-auto text-center text-4xl font-bold my-6'>
          Alamat Resepsi Pernikahan
        </h1>
      </div>
      <div class='flex flex-col md:flex-row gap-x-5 mb-5'>
        {/* <button class='h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-full focus:shadow-outline hover:bg-indigo-800'>
          Pill button
        </button>
        <button class='h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-full focus:shadow-outline hover:bg-indigo-800'>
          Pill button
        </button>
        <button class='h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-full focus:shadow-outline hover:bg-indigo-800'>
          Pill button
        </button> */}
      </div>
      <FormAlamatResepsi />

      {/* <FormAlamatPengirimanHadiah /> */}
    </div>
  );
};

export default FormAlamat;
