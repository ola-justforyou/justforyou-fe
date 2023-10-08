import { useState } from 'react';
import React from 'react';
import convertISODateToText from '../../../../utils/helpers/date';
const FormPrivew = (props) => {
  const {
    step,
    steps,
    formState,
    isSameWithAkad,
    provinsiSelectionAkad,
    provinsiSelectionResepsi,
    kabupatenSelectionAkad,
    kabupatenSelectionResepsi,
    kecamatanSelectionAkad,
    kecamatanSelectionResepsi,
    kelurahanSelectionAkad,
    kelurahanSelectionResepsi,
  } = props;

  return (
    <div
      className={`  border-gray-500 rounded p-3 ${
        step.position < steps.id
          ? 'transition-transform'
          : 'transition-transform-out'
      }  ${step.position === steps.id ? 'transform ' : ''}`}
    >
      <div class='flex flex-col md:flex-row sm:hidden'>
        <h1 className='m-auto text-center text-3xl font-bold mb-2'>Preview</h1>
      </div>
      <div class='flex flex-col md:flex-row shadow-md rounded py-5 my-4'>
        <div class='w-full mx-auto px-2 flex-1 svelte-1l8159u flex flex-col'>
          <div class='font-bold mx-auto my-3 text-gray-600 text-md  uppercase'>
            {' '}
            Mempelai Laki laki
          </div>
          <div className='w-full flex flex-col sm:flex-row  '>
            <div className='w-full sm:w-3/12  flex'>
              <img
                class='w-24 h-24 object-cover rounded-full shadow-lg my-5 mx-auto sm:m-auto '
                src={formState?.pas_foto_suami}
                alt=''
              />
            </div>
            <div className='w-full sm:w-9/12 '>
              <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6 my-2 '>
                <div className='border-l-2 border-gray-200 flex flex-col pl-2'>
                  <div class='  text-gray-500 text-xs  uppercase'>
                    {' '}
                    Nama Lengkap
                  </div>
                  <div class='font-bold  text-gray-700 text-md capitalize'>
                    {' '}
                    {formState?.nama_lengkap_suami}
                  </div>
                </div>
                <div className='border-l-2 border-gray-200 flex flex-col pl-2'>
                  <div class='  text-gray-500 text-xs  uppercase'> Ayah</div>
                  <div class='font-bold  text-gray-700 text-md capitalize'>
                    {' '}
                    {formState?.nama_ayah_suami}
                  </div>
                </div>
                <div className='border-l-2 border-gray-200 flex flex-col pl-2'>
                  <div class='  text-gray-500 text-xs  uppercase'> Ibu</div>
                  <div class='font-bold  text-gray-700 text-md capitalize'>
                    {' '}
                    {formState?.nama_ibu_suami}
                  </div>
                </div>
                <div className='border-l-2 border-gray-200 flex flex-col pl-2'>
                  <div class='  text-gray-500 text-xs  uppercase'>
                    {' '}
                    Anak ke-
                  </div>
                  <div class='font-bold  text-gray-700 text-md capitalize'>
                    {' '}
                    {formState?.anak_ke_suami}
                  </div>
                </div>
                <div className='border-l-2 border-gray-200 flex flex-col pl-2'>
                  <div class='  text-gray-500 text-xs  uppercase'> No Hp</div>
                  <div class='font-bold  text-gray-700 text-md capitalize'>
                    {' '}
                    {formState?.no_hp_suami}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class='flex flex-col md:flex-row shadow-md rounded py-5 my-4'>
        <div class='w-full mx-auto px-2 flex-1 svelte-1l8159u flex flex-col'>
          <div class='font-bold mx-auto my-3 text-gray-600 text-md  uppercase'>
            {' '}
            Mempelai Perempuan
          </div>
          <div className='w-full flex flex-col sm:flex-row  '>
            <div className='w-full sm:w-3/12  flex'>
              <img
                class='w-24 h-24 object-cover rounded-full shadow-lg my-5 mx-auto sm:m-auto '
                src={formState?.pas_foto_istri}
                alt=''
              />
            </div>
            <div className='w-full sm:w-9/12 '>
              <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6 my-2 '>
                <div className='border-l-2 border-gray-200 flex flex-col pl-2'>
                  <div class='  text-gray-500 text-xs  uppercase'>
                    {' '}
                    Nama Lengkap
                  </div>
                  <div class='font-bold  text-gray-700 text-md capitalize'>
                    {' '}
                    {formState?.nama_lengkap_istri}
                  </div>
                </div>
                <div className='border-l-2 border-gray-200 flex flex-col pl-2'>
                  <div class='  text-gray-500 text-xs  uppercase'> Ayah</div>
                  <div class='font-bold  text-gray-700 text-md capitalize'>
                    {' '}
                    {formState?.nama_ayah_istri}
                  </div>
                </div>
                <div className='border-l-2 border-gray-200 flex flex-col pl-2'>
                  <div class='  text-gray-500 text-xs  uppercase'> Ibu</div>
                  <div class='font-bold  text-gray-700 text-md capitalize'>
                    {' '}
                    {formState?.nama_ibu_istri}
                  </div>
                </div>
                <div className='border-l-2 border-gray-200 flex flex-col pl-2'>
                  <div class='  text-gray-500 text-xs  uppercase'>
                    {' '}
                    Anak ke-
                  </div>
                  <div class='font-bold  text-gray-700 text-md capitalize'>
                    {' '}
                    {formState?.anak_ke_istri}
                  </div>
                </div>
                <div className='border-l-2 border-gray-200 flex flex-col pl-2'>
                  <div class='  text-gray-500 text-xs  uppercase'> No Hp</div>
                  <div class='font-bold  text-gray-700 text-md capitalize'>
                    {' '}
                    {formState?.no_hp_istri}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class='flex flex-col shadow-md rounded py-5 my-4'>
        <div class='w-full mx-auto px-2 flex-1 svelte-1l8159u flex flex-col'>
          <div class='font-bold mx-auto my-3 text-gray-600 text-md  uppercase'>
            {' '}
            Alamat dan Tanggal Akad
          </div>
          <div className='w-full flex flex-col sm:flex-row  '>
            <div className='w-full '>
              <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-6 my-2 '>
                <div className='border-l-2 border-gray-200 flex flex-col pl-2'>
                  <div class='  text-gray-500 text-xs  uppercase'>
                    {' '}
                    Nama Jalan
                  </div>
                  <div class='font-bold  text-gray-700 text-md capitalize'>
                    {' '}
                    {formState?.nama_jalan_akad}
                  </div>
                </div>
                <div className='border-l-2 border-gray-200 flex flex-col pl-2'>
                  <div class='  text-gray-500 text-xs  uppercase'>RT</div>
                  <div class='font-bold  text-gray-700 text-md capitalize'>
                    {' '}
                    {formState?.rt_akad}
                  </div>
                </div>
                <div className='border-l-2 border-gray-200 flex flex-col pl-2'>
                  <div class='  text-gray-500 text-xs  uppercase'>RW</div>
                  <div class='font-bold  text-gray-700 text-md capitalize'>
                    {' '}
                    {formState?.rw_akad}
                  </div>
                </div>
                <div className='border-l-2 border-gray-200 flex flex-col pl-2'>
                  <div class='  text-gray-500 text-xs  uppercase'>
                    {' '}
                    Provinsi
                  </div>
                  <div class='font-bold  text-gray-700 text-md capitalize'>
                    {' '}
                    {
                      provinsiSelectionAkad.find(
                        (prov) => prov.id == formState?.kode_provinsi_akad
                      )?.name
                    }
                  </div>
                </div>
                <div className='border-l-2 border-gray-200 flex flex-col pl-2'>
                  <div class='  text-gray-500 text-xs  uppercase'>
                    Kabupaten/kota
                  </div>
                  <div class='font-bold  text-gray-700 text-md capitalize'>
                    {' '}
                    {
                      kabupatenSelectionAkad.find(
                        (kab) => kab.id == formState?.kode_kabupaten_akad
                      )?.name
                    }
                  </div>
                </div>
                <div className='border-l-2 border-gray-200 flex flex-col pl-2'>
                  <div class='  text-gray-500 text-xs  uppercase'>
                    Kabupaten/kota
                  </div>
                  <div class='font-bold  text-gray-700 text-md capitalize'>
                    {' '}
                    {
                      kecamatanSelectionAkad.find(
                        (kec) => kec.id == formState?.kode_kecamatan_akad
                      )?.name
                    }
                  </div>
                </div>
                <div className='border-l-2 border-gray-200 flex flex-col pl-2'>
                  <div class='  text-gray-500 text-xs  uppercase'>
                    Kabupaten/kota
                  </div>
                  <div class='font-bold  text-gray-700 text-md capitalize'>
                    {' '}
                    {
                      kelurahanSelectionAkad.find(
                        (kel) => kel.id == formState?.kode_kelurahan_akad
                      )?.name
                    }
                  </div>
                </div>
                <div className='border-l-2 border-gray-200 flex flex-col pl-2'>
                  <div class='  text-gray-500 text-xs  uppercase'>Kode Pos</div>
                  <div class='font-bold  text-gray-700 text-md capitalize'>
                    {' '}
                    {formState?.kode_pos_akad}
                  </div>
                </div>
                <div className='border-l-2 border-gray-200 flex flex-col pl-2'>
                  <div class='  text-gray-500 text-xs  uppercase'>
                    Detail Lainnya
                  </div>
                  <div class='font-bold  text-gray-700 text-md capitalize'>
                    {' '}
                    {formState?.detail_alamat_akad}
                  </div>
                </div>
                <div className='border-l-2 border-gray-200 flex flex-col pl-2'>
                  <div class='  text-gray-500 text-xs  uppercase'>
                    Tanggal Akad
                  </div>
                  <div class='font-bold  text-gray-700 text-md capitalize'>
                    {' '}
                    {convertISODateToText(formState?.tanggal_akad)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {!isSameWithAkad ? (
          <div class='w-full mt-2  mx-auto px-2 flex-1 svelte-1l8159u flex flex-col'>
            <div class='font-bold mx-auto my-3 text-gray-600 text-md  uppercase'>
              {' '}
              Alamat dan Tanggal Resepsi
            </div>
            <div className='w-full flex flex-col sm:flex-row  '>
              <div className='w-full '>
                <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-6 my-2 '>
                  <div className='border-l-2 border-gray-200 flex flex-col pl-2'>
                    <div class='  text-gray-500 text-xs  uppercase'>
                      {' '}
                      Nama Jalan
                    </div>
                    <div class='font-bold  text-gray-700 text-md capitalize'>
                      {' '}
                      {formState?.nama_jalan_resepsi}
                    </div>
                  </div>
                  <div className='border-l-2 border-gray-200 flex flex-col pl-2'>
                    <div class='  text-gray-500 text-xs  uppercase'>RT</div>
                    <div class='font-bold  text-gray-700 text-md capitalize'>
                      {' '}
                      {formState?.rt_resepsi}
                    </div>
                  </div>
                  <div className='border-l-2 border-gray-200 flex flex-col pl-2'>
                    <div class='  text-gray-500 text-xs  uppercase'>RW</div>
                    <div class='font-bold  text-gray-700 text-md capitalize'>
                      {' '}
                      {formState?.rw_resepsi}
                    </div>
                  </div>
                  <div className='border-l-2 border-gray-200 flex flex-col pl-2'>
                    <div class='  text-gray-500 text-xs  uppercase'>
                      {' '}
                      Provinsi
                    </div>
                    <div class='font-bold  text-gray-700 text-md capitalize'>
                      {' '}
                      {
                        provinsiSelectionResepsi.find(
                          (prov) => prov.id == formState?.kode_provinsi_resepsi
                        )?.name
                      }
                    </div>
                  </div>
                  <div className='border-l-2 border-gray-200 flex flex-col pl-2'>
                    <div class='  text-gray-500 text-xs  uppercase'>
                      Kabupaten/kota
                    </div>
                    <div class='font-bold  text-gray-700 text-md capitalize'>
                      {' '}
                      {
                        kabupatenSelectionResepsi.find(
                          (kab) => kab.id == formState?.kode_kabupaten_resepsi
                        )?.name
                      }
                    </div>
                  </div>
                  <div className='border-l-2 border-gray-200 flex flex-col pl-2'>
                    <div class='  text-gray-500 text-xs  uppercase'>
                      Kabupaten/kota
                    </div>
                    <div class='font-bold  text-gray-700 text-md capitalize'>
                      {' '}
                      {
                        kecamatanSelectionResepsi.find(
                          (kec) => kec.id == formState?.kode_kecamatan_resepsi
                        )?.name
                      }
                    </div>
                  </div>
                  <div className='border-l-2 border-gray-200 flex flex-col pl-2'>
                    <div class='  text-gray-500 text-xs  uppercase'>
                      Kabupaten/kota
                    </div>
                    <div class='font-bold  text-gray-700 text-md capitalize'>
                      {' '}
                      {
                        kelurahanSelectionResepsi.find(
                          (kel) => kel.id == formState?.kode_kelurahan_resepsi
                        )?.name
                      }
                    </div>
                  </div>
                  <div className='border-l-2 border-gray-200 flex flex-col pl-2'>
                    <div class='  text-gray-500 text-xs  uppercase'>
                      Kode Pos
                    </div>
                    <div class='font-bold  text-gray-700 text-md capitalize'>
                      {' '}
                      {formState?.kode_pos_resepsi}
                    </div>
                  </div>
                  <div className='border-l-2 border-gray-200 flex flex-col pl-2'>
                    <div class='  text-gray-500 text-xs  uppercase'>
                      Detail Lainnya
                    </div>
                    <div class='font-bold  text-gray-700 text-md capitalize'>
                      {' '}
                      {formState?.detail_alamat_resepsi}
                    </div>
                  </div>
                  <div className='border-l-2 border-gray-200 flex flex-col pl-2'>
                    <div class='  text-gray-500 text-xs  uppercase'>
                      Tanggal Akad
                    </div>
                    <div class='font-bold  text-gray-700 text-md capitalize'>
                      {' '}
                      {convertISODateToText(formState?.tanggal_resepsi)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
      <div class='flex flex-col md:flex-row shadow-md rounded py-5 my-4'>
        <div class='w-full mx-auto px-2 flex-1 svelte-1l8159u flex flex-col'>
          <div class='font-bold mx-auto my-3 text-gray-600 text-md  uppercase'>
            {' '}
            Galeri Foto
          </div>
          <div className='w-full flex flex-col sm:flex-row  '>
            <div className='w-full gap-y-4 flex flex-col'>
              <div className='grid grid-cols-1 gap-x-4 gap-y-6 my-2 '>
                {!formState?.foto_landscape ? (
                  <div
                    for='dropzone-file'
                    class='flex flex-col items-center justify-center w-full h-32 sm:h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 '
                  >
                    <div class='flex flex-col items-center justify-center pt-5 pb-6'>
                      Foto Cover
                    </div>
                  </div>
                ) : (
                  <div className='flex flex-col items-center justify-center w-full h-32 sm:h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 p-1'>
                    <img
                      src={formState?.foto_landscape}
                      className='rounded-md h-full object-cover px-0 w-full '
                      alt='image'
                    />
                  </div>
                )}{' '}
              </div>
              <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6 my-2 '>
                {!formState?.foto_galeri_1 ? (
                  <div
                    for='dropzone-file'
                    class='flex flex-col items-center justify-center w-full h-32 sm:h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 '
                  >
                    <div class='flex flex-col items-center justify-center pt-5 pb-6'>
                      Foto 1
                    </div>
                  </div>
                ) : (
                  <div className='flex flex-col items-center justify-center w-full h-32 sm:h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 p-1'>
                    <img
                      src={formState?.foto_galeri_1}
                      className='rounded-md h-full object-cover px-0 w-full '
                      alt='image'
                    />
                  </div>
                )}{' '}
                {!formState?.foto_galeri_2 ? (
                  <div
                    for='dropzone-file'
                    class='flex flex-col items-center justify-center w-full h-32 sm:h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 '
                  >
                    <div class='flex flex-col items-center justify-center pt-5 pb-6'>
                      Foto 2
                    </div>
                  </div>
                ) : (
                  <div className='flex flex-col items-center justify-center w-full h-32 sm:h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 p-1'>
                    <img
                      src={formState?.foto_galeri_2}
                      className='rounded-md h-full object-cover px-0 w-full '
                      alt='image'
                    />
                  </div>
                )}{' '}
                {!formState?.foto_galeri_3 ? (
                  <div
                    for='dropzone-file'
                    class='flex flex-col items-center justify-center w-full h-32 sm:h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 '
                  >
                    <div class='flex flex-col items-center justify-center pt-5 pb-6'>
                      Foto 3
                    </div>
                  </div>
                ) : (
                  <div className='flex flex-col items-center justify-center w-full h-32 sm:h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 p-1'>
                    <img
                      src={formState?.foto_galeri_3}
                      className='rounded-md h-full object-cover px-0 w-full '
                      alt='image'
                    />
                  </div>
                )}{' '}
                {!formState?.foto_galeri_4 ? (
                  <div
                    for='dropzone-file'
                    class='flex flex-col items-center justify-center w-full h-32 sm:h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 '
                  >
                    <div class='flex flex-col items-center justify-center pt-5 pb-6'>
                      Foto 4
                    </div>
                  </div>
                ) : (
                  <div className='flex flex-col items-center justify-center w-full h-32 sm:h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 p-1'>
                    <img
                      src={formState?.foto_galeri_4}
                      className='rounded-md h-full object-cover px-0 w-full '
                      alt='image'
                    />
                  </div>
                )}{' '}
                {!formState?.foto_galeri_5 ? (
                  <div
                    for='dropzone-file'
                    class='flex flex-col items-center justify-center w-full h-32 sm:h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 '
                  >
                    <div class='flex flex-col items-center justify-center pt-5 pb-6'>
                      Foto 5
                    </div>
                  </div>
                ) : (
                  <div className='flex flex-col items-center justify-center w-full h-32 sm:h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 p-1'>
                    <img
                      src={formState?.foto_galeri_5}
                      className='rounded-md h-full object-cover px-0 w-full '
                      alt='image'
                    />
                  </div>
                )}{' '}
              </div>
              <div className='grid grid-cols-1 gap-x-4 gap-y-6 my-2 '>
                {!formState?.foto_potrait ? (
                  <div
                    for='dropzone-file'
                    class='flex flex-col items-center justify-center w-full h-64 sm:h-96 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 '
                  >
                    <div class='flex flex-col items-center justify-center pt-5 pb-6'>
                      Foto Potrait
                    </div>
                  </div>
                ) : (
                  <div className='flex flex-col items-center justify-center w-full h-64 sm:h-96 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 p-1'>
                    <img
                      src={formState?.foto_potrait}
                      className='rounded-md h-full object-contain px-0 w-full '
                      alt='image'
                    />
                  </div>
                )}{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormPrivew;
