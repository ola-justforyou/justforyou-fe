import React, { useState, useEffect } from 'react';
import { FileUploader } from 'react-drag-drop-files';

const FormAlamatAkad = (props) => {
  const {
    minDate,
    formState,
    setFormState,
    handleInputChange,
    register,
    setValue,
    selection,
    setSelection,
    handleProvinsiChange,
    handleKabupatenChange,
    handleKecamatanChange,
    handleKelurahanChange,
  } = props;
  return (
    <>
      <div class='flex flex-col md:flex-row '>
        <h1 className='m-auto text-center text-3xl font-bold my-2'>
          Alamat dan Tanggal Akad
        </h1>
      </div>
      <div class='flex flex-col md:flex-row'>
        <div class='w-full mx-auto px-2 flex-1 svelte-1l8159u'>
          <div className='grid grid-cols-2 md:grid-cols-12 lg:grid-cols-12 gap-x-4 gap-y-0 '>
            <div className='col-span-2 md:col-span-8 lg:col-span-5 '>
              <div class='font-bold h-6  text-gray-600 text-xs leading-8 '>
                {' '}
                Nama Jalan
              </div>
              <div class='bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u'>
                <input
                  type='text'
                  placeholder='Jl. '
                  class='p-1 px-2 appearance-none outline-none w-full text-gray-800'
                  name='nama_jalan_akad'
                  id='nama_jalan_akad'
                  {...register('nama_jalan_akad', {
                    required: true,
                  })}
                  onChange={(e) => {
                    handleInputChange(e);
                  }}
                  value={formState.nama_jalan_akad}
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
                  {...register('rt_akad', {
                    required: true,
                  })}
                  onChange={(e) => {
                    setValue(e.target.name, e.target.value.slice(0, 3));
                    setFormState({
                      ...formState,
                      [e.target.name]: e.target.value.slice(0, 3),
                    });
                  }}
                  value={formState.rt_akad}
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
                  {...register('rw_akad', {
                    required: true,
                  })}
                  onChange={(e) => {
                    setValue(e.target.name, e.target.value.slice(0, 3));
                    setFormState({
                      ...formState,
                      [e.target.name]: e.target.value.slice(0, 3),
                    });
                  }}
                  value={formState.rw_akad}
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
                  id='kode_provinsi_akad'
                  name='kode_provinsi_akad'
                  onChange={(e) => {
                    handleProvinsiChange(e);
                  }}
                  value={formState.kode_provinsi_akad}
                >
                  <option value=''> Provinsi </option>
                  {selection.provinsiSelectionAkad?.map((provinsi) => (
                    <option value={provinsi.id} key={provinsi.id}>
                      {provinsi.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class='flex flex-col md:flex-row'>
        <div class='w-full mx-auto px-2 flex-1 svelte-1l8159u'>
          <div className='grid grid-cols-1  lg:grid-cols-12 gap-x-4 gap-y-0 '>
            <div className='col-span-1  lg:col-span-4 '>
              <div class='font-bold h-6 text-gray-600 text-xs leading-8 '>
                {' '}
                Kabupaten/Kota
              </div>
              <div class='bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u'>
                <select
                  className='px-2 py-1.5 text-sm bg-white text-gray-900   w-full '
                  aria-label='Floating'
                  id='kode_kabupaten_akad'
                  name='kode_kabupaten_akad'
                  onChange={(e) => {
                    handleKabupatenChange(e);
                  }}
                  value={formState.kode_kabupaten_akad}
                >
                  <option value=''> Kabupaten </option>
                  {selection.kabupatenSelectionAkad?.map((kabupaten) => (
                    <option value={kabupaten?.id} key={kabupaten?.id}>
                      {kabupaten.name}
                    </option>
                  ))}
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
                  id='kode_kecamatan_akad'
                  name='kode_kecamatan_akad'
                  onChange={(e) => {
                    handleKecamatanChange(e);
                  }}
                  value={formState.kode_kecamatan_akad}
                >
                  <option value=''> kecamatan </option>
                  {selection.kecamatanSelectionAkad?.map((kecamatan) => (
                    <option value={kecamatan?.id} key={kecamatan?.id}>
                      {kecamatan.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className='col-span-1  lg:col-span-4 '>
              <div class='font-bold h-6  text-gray-600 text-xs leading-8 '>
                {' '}
                Kelurahan
              </div>
              <div class='bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u'>
                <select
                  className='px-2 py-1.5 text-sm bg-white text-gray-900   w-full '
                  aria-label='Floating'
                  id='kode_kelurahan_akad'
                  name='kode_kelurahan_akad'
                  onChange={(e) => {
                    handleKelurahanChange(e);
                  }}
                  value={formState.kode_kelurahan_akad}
                >
                  <option value=''> kelurahan </option>
                  {selection.kelurahanSelectionAkad?.map((kelurahan) => (
                    <option value={kelurahan?.id} key={kelurahan?.id}>
                      {kelurahan.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-1  lg:grid-cols-12 gap-x-4 gap-y-0 '>
            <div className='col-span-1  lg:col-span-4 '>
              <div class='font-bold h-6  text-gray-600 text-xs leading-8 '>
                {' '}
                Kode Pos
              </div>
              <div class='bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u'>
                <input
                  type='number'
                  class='p-1 px-2 appearance-none outline-none w-full text-gray-800'
                  name='kode_pos_akad'
                  id='kode_pos_akad'
                  {...register('kode_pos_akad', {
                    required: true,
                  })}
                  onChange={(e) => {
                    setValue(e.target.name, e.target.value.slice(0, 6));
                    setFormState({
                      ...formState,
                      [e.target.name]: e.target.value.slice(0, 6),
                    });
                  }}
                  value={formState.kode_pos_akad}
                />{' '}
              </div>
            </div>
            <div className='col-span-1  lg:col-span-4 '>
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
                  {...register('detail_alamat_akad', {
                    required: true,
                  })}
                  onChange={(e) => {
                    handleInputChange(e);
                  }}
                  value={formState.detail_alamat_akad}
                />{' '}
              </div>
            </div>
            <div className='col-span-1  lg:col-span-4 '>
              <div class='font-bold h-6  text-gray-600 text-xs leading-8 '>
                {' '}
                Tanggal Akad
              </div>
              <div class='bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u'>
                <input
                  type='datetime-local'
                  class='p-1 px-2 appearance-none outline-none w-full text-gray-800'
                  name='tanggal_akad'
                  id='tanggal_akad'
                  autoComplete='off'
                  min={minDate}
                  {...register('tanggal_akad', {
                    required: true,
                  })}
                  onChange={(e) => {
                    handleInputChange(e);
                  }}
                  value={formState.tanggal_akad}
                />{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const FormAlamatResepsi = (props) => {
  const {
    minDate,
    formState,
    setFormState,
    handleInputChange,
    register,
    setValue,
    selection,
    setSelection,
    handleProvinsiChange,
    handleKabupatenChange,
    handleKecamatanChange,
    handleKelurahanChange,
  } = props;
  return (
    <>
      <div class='flex flex-col md:flex-row mt-24 sm:mt-6'>
        <h1 className='m-auto text-center text-3xl font-bold my-2'>
          Alamat dan Tanggal Resepsi
        </h1>
      </div>
      <div class='flex flex-col md:flex-row'>
        <div class='w-full mx-auto px-2 flex-1 svelte-1l8159u'>
          <div className='grid grid-cols-2 md:grid-cols-12 lg:grid-cols-12 gap-x-4 gap-y-0'>
            <div className='col-span-2 md:col-span-8 lg:col-span-5 '>
              <div class='font-bold h-6  text-gray-600 text-xs leading-8 '>
                {' '}
                Nama Jalan
              </div>
              <div class='bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u'>
                <input
                  type='text'
                  placeholder='Jl. '
                  class='p-1 px-2 appearance-none outline-none w-full text-gray-800'
                  name='nama_jalan_resepsi'
                  id='nama_jalan_resepsi'
                  {...register('nama_jalan_resepsi', {
                    required: true,
                  })}
                  onChange={(e) => {
                    handleInputChange(e);
                  }}
                  value={formState.nama_jalan_resepsi}
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
                  {...register('rt_resepsi', {
                    required: true,
                  })}
                  onChange={(e) => {
                    setValue(e.target.name, e.target.value.slice(0, 3));
                    setFormState({
                      ...formState,
                      [e.target.name]: e.target.value.slice(0, 3),
                    });
                  }}
                  value={formState.rt_resepsi}
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
                  {...register('rw_resepsi', {
                    required: true,
                  })}
                  onChange={(e) => {
                    setValue(e.target.name, e.target.value.slice(0, 3));
                    setFormState({
                      ...formState,
                      [e.target.name]: e.target.value.slice(0, 3),
                    });
                  }}
                  value={formState.rw_resepsi}
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
                  id='kode_provinsi_resepsi'
                  name='kode_provinsi_resepsi'
                  onChange={(e) => {
                    handleProvinsiChange(e);
                  }}
                  value={formState.kode_provinsi_resepsi}
                >
                  <option value=''> Provinsi </option>
                  {selection.provinsiSelectionResepsi?.map((provinsi) => (
                    <option value={provinsi.id} key={provinsi.id}>
                      {provinsi.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class='flex flex-col md:flex-row'>
        <div class='w-full mx-auto px-2 flex-1 svelte-1l8159u'>
          <div className='grid grid-cols-1  lg:grid-cols-12 gap-x-4 gap-y-0 '>
            <div className='col-span-1  lg:col-span-4 '>
              <div class='font-bold h-6 text-gray-600 text-xs leading-8 '>
                {' '}
                Kabupaten/Kota
              </div>
              <div class='bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u'>
                <select
                  className='px-2 py-1.5 text-sm bg-white text-gray-900   w-full '
                  aria-label='Floating'
                  id='kode_kabupaten_resepsi'
                  name='kode_kabupaten_resepsi'
                  onChange={(e) => {
                    handleKabupatenChange(e);
                  }}
                  value={formState.kode_kabupaten_resepsi}
                >
                  <option value=''> Kabupaten </option>
                  {selection.kabupatenSelectionResepsi?.map((kabupaten) => (
                    <option value={kabupaten?.id} key={kabupaten?.id}>
                      {kabupaten.name}
                    </option>
                  ))}
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
                  id='kode_kecamatan_resepsi'
                  name='kode_kecamatan_resepsi'
                  onChange={(e) => {
                    handleKecamatanChange(e);
                  }}
                  value={formState.kode_kecamatan_resepsi}
                >
                  <option value=''> kecamatan </option>
                  {selection.kecamatanSelectionResepsi
                    .sort((a, b) => a.name.localeCompare(b.name))
                    ?.map((kecamatan) => (
                      <option value={kecamatan?.id} key={kecamatan?.id}>
                        {kecamatan.name}
                      </option>
                    ))}
                </select>
              </div>
            </div>
            <div className='col-span-1  lg:col-span-4 '>
              <div class='font-bold h-6  text-gray-600 text-xs leading-8 '>
                {' '}
                Kelurahan
              </div>
              <div class='bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u'>
                <select
                  className='px-2 py-1.5 text-sm bg-white text-gray-900   w-full '
                  aria-label='Floating'
                  id='kode_kelurahan_resepsi'
                  name='kode_kelurahan_resepsi'
                  onChange={(e) => {
                    handleKelurahanChange(e);
                  }}
                  value={formState.kode_kelurahan_resepsi}
                >
                  <option value=''> kelurahan </option>
                  {selection.kelurahanSelectionResepsi?.map((kelurahan) => (
                    <option value={kelurahan?.id} key={kelurahan?.id}>
                      {kelurahan.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-1  lg:grid-cols-12 gap-x-4 gap-y-0 '>
            <div className='col-span-1  lg:col-span-4 '>
              <div class='font-bold h-6  text-gray-600 text-xs leading-8 '>
                {' '}
                Kode Pos
              </div>
              <div class='bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u'>
                <input
                  type='number'
                  class='p-1 px-2 appearance-none outline-none w-full text-gray-800'
                  name='kode_pos_resepsi'
                  id='kode_pos_resepsi'
                  {...register('kode_pos_resepsi', {
                    required: true,
                  })}
                  onChange={(e) => {
                    setValue(e.target.name, e.target.value.slice(0, 6));
                    setFormState({
                      ...formState,
                      [e.target.name]: e.target.value.slice(0, 6),
                    });
                  }}
                  value={formState.kode_pos_resepsi}
                />{' '}
              </div>
            </div>
            <div className='col-span-1  lg:col-span-4 '>
              <div class='font-bold h-6  text-gray-600 text-xs leading-8 '>
                {' '}
                Detail Lainnya
              </div>
              <div class='bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u'>
                <input
                  type='text'
                  placeholder='kelurahan, Rumah warna hijau'
                  class='p-1 px-2 appearance-none outline-none w-full text-gray-800'
                  name='detail_alamat_resepsi'
                  id='detail_alamat_resepsi'
                  {...register('detail_alamat_resepsi', {
                    required: true,
                  })}
                  onChange={(e) => {
                    handleInputChange(e);
                  }}
                  value={formState.detail_alamat_resepsi}
                />{' '}
              </div>
            </div>
            <div className='col-span-1  lg:col-span-4 '>
              <div class='font-bold h-6  text-gray-600 text-xs leading-8 '>
                {' '}
                Tanggal resepsi
              </div>
              <div class='bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u'>
                <input
                  type='datetime-local'
                  class='p-1 px-2 appearance-none outline-none w-full text-gray-800'
                  name='tanggal_resepsi'
                  id='tanggal_resepsi'
                  min={minDate}
                  {...register('tanggal_resepsi', {
                    required: true,
                  })}
                  onChange={(e) => {
                    handleInputChange(e);
                  }}
                  value={formState.tanggal_resepsi}
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
  const {
    step,
    steps,
    formState,
    setFormState,
    handleInputChange,
    register,
    setValue,
    selection,
    setSelection,
    handleProvinsiChange,
    handleKabupatenChange,
    handleKecamatanChange,
    handleKelurahanChange,
  } = props;
  const [minDate, setMinDate] = useState('');

  useEffect(() => {
    const today = new Date();
    const lastMonth = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() + 1
    );
    const formattedDate = lastMonth.toISOString().slice(0, 16);
    setMinDate(formattedDate);
  }, []);

  return (
    <div
      className={` shadow-md border-gray-500 rounded p-4 ${
        step.position < steps.id
          ? 'transition-transform'
          : 'transition-transform-out'
      }  ${step.position === steps.id ? 'transform ' : ''}`}
    >
      <FormAlamatAkad
        formState={formState}
        minDate={minDate}
        setFormState={setFormState}
        handleInputChange={handleInputChange}
        register={register}
        setValue={setValue}
        selection={selection}
        setSelection={setSelection}
        handleProvinsiChange={handleProvinsiChange}
        handleKabupatenChange={handleKabupatenChange}
        handleKecamatanChange={handleKecamatanChange}
        handleKelurahanChange={handleKelurahanChange}
      />
      <div class='flex flex-col md:flex-row gap-x-5 mb-5'></div>
      <FormAlamatResepsi
        formState={formState}
        minDate={minDate}
        setFormState={setFormState}
        handleInputChange={handleInputChange}
        register={register}
        setValue={setValue}
        selection={selection}
        setSelection={setSelection}
        handleProvinsiChange={handleProvinsiChange}
        handleKabupatenChange={handleKabupatenChange}
        handleKecamatanChange={handleKecamatanChange}
        handleKelurahanChange={handleKelurahanChange}
      />
    </div>
  );
};

export default FormAlamat;
