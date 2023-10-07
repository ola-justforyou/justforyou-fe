import { useState } from 'react';
import React from 'react';

const FormPrivew = (props) => {
  const {
    step,
    steps,
    formState,
    provinsiSelectionAkad,
    provinsiSelectionResepsi,
    kabupatenSelectionAkad,
    kabupatenSelectionResepsi,
    kecamatanSelectionAkad,
    kecamatanSelectionResepsi,
    kelurahanSelectionAkad,
    kelurahanSelectionResepsi,
  } = props;

  // console.log(errors.nama_lengkap_suami?.type, '--------');
  console.log(provinsiSelectionAkad, '-----');
  return (
    <div
      className={` border-gray-500 rounded p-3 ${
        step.position < steps.id
          ? 'transition-transform'
          : 'transition-transform-out'
      }  ${step.position === steps.id ? 'transform ' : ''}`}
    >
      <div class='flex flex-col md:flex-row sm:hidden'>
        <h1 className='m-auto text-center text-3xl font-bold mb-2'>Preview</h1>
      </div>
      <div class='flex flex-col md:flex-row shadow-md rounded py-2 my-4'>
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
                  <div class='  text-gray-500 text-sm  uppercase'>
                    {' '}
                    Nama Lengkap
                  </div>
                  <div class='font-bold  text-gray-700 text-sm  uppercase'>
                    {' '}
                    {formState?.nama_lengkap_suami}
                  </div>
                </div>
                <div className='border-l-2 border-gray-200 flex flex-col pl-2'>
                  <div class='  text-gray-500 text-sm  uppercase'> Ayah</div>
                  <div class='font-bold  text-gray-700 text-sm  uppercase'>
                    {' '}
                    {formState?.nama_ayah_suami}
                  </div>
                </div>
                <div className='border-l-2 border-gray-200 flex flex-col pl-2'>
                  <div class='  text-gray-500 text-sm  uppercase'> Ibu</div>
                  <div class='font-bold  text-gray-700 text-sm  uppercase'>
                    {' '}
                    {formState?.nama_ibu_suami}
                  </div>
                </div>
                <div className='border-l-2 border-gray-200 flex flex-col pl-2'>
                  <div class='  text-gray-500 text-sm  uppercase'>
                    {' '}
                    Anak ke-
                  </div>
                  <div class='font-bold  text-gray-700 text-sm  uppercase'>
                    {' '}
                    {formState?.anak_ke_suami}
                  </div>
                </div>
                <div className='border-l-2 border-gray-200 flex flex-col pl-2'>
                  <div class='  text-gray-500 text-sm  uppercase'> No Hp</div>
                  <div class='font-bold  text-gray-700 text-sm  uppercase'>
                    {' '}
                    {formState?.no_hp_suami}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class='flex flex-col md:flex-row shadow-md rounded py-2 my-4'>
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
                  <div class='  text-gray-500 text-sm  uppercase'>
                    {' '}
                    Nama Lengkap
                  </div>
                  <div class='font-bold  text-gray-700 text-sm  uppercase'>
                    {' '}
                    {formState?.nama_lengkap_istri}
                  </div>
                </div>
                <div className='border-l-2 border-gray-200 flex flex-col pl-2'>
                  <div class='  text-gray-500 text-sm  uppercase'> Ayah</div>
                  <div class='font-bold  text-gray-700 text-sm  uppercase'>
                    {' '}
                    {formState?.nama_ayah_istri}
                  </div>
                </div>
                <div className='border-l-2 border-gray-200 flex flex-col pl-2'>
                  <div class='  text-gray-500 text-sm  uppercase'> Ibu</div>
                  <div class='font-bold  text-gray-700 text-sm  uppercase'>
                    {' '}
                    {formState?.nama_ibu_istri}
                  </div>
                </div>
                <div className='border-l-2 border-gray-200 flex flex-col pl-2'>
                  <div class='  text-gray-500 text-sm  uppercase'>
                    {' '}
                    Anak ke-
                  </div>
                  <div class='font-bold  text-gray-700 text-sm  uppercase'>
                    {' '}
                    {formState?.anak_ke_istri}
                  </div>
                </div>
                <div className='border-l-2 border-gray-200 flex flex-col pl-2'>
                  <div class='  text-gray-500 text-sm  uppercase'> No Hp</div>
                  <div class='font-bold  text-gray-700 text-sm  uppercase'>
                    {' '}
                    {formState?.no_hp_istri}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class='flex flex-col shadow-md rounded py-2 my-4'>
        <div class='w-full mx-auto px-2 flex-1 svelte-1l8159u flex flex-col'>
          <div class='font-bold mx-auto my-3 text-gray-600 text-md  uppercase'>
            {' '}
            Alamat dan Tanggal Akad
          </div>
          <div className='w-full flex flex-col sm:flex-row  '>
            <div className='w-full '>
              <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-6 my-2 '>
                <div className='border-l-2 border-gray-200 flex flex-col pl-2'>
                  <div class='  text-gray-500 text-sm  uppercase'>
                    {' '}
                    Nama Jalan
                  </div>
                  <div class='font-bold  text-gray-700 text-sm  uppercase'>
                    {' '}
                    {formState?.nama_jalan_akad}
                  </div>
                </div>
                <div className='border-l-2 border-gray-200 flex flex-col pl-2'>
                  <div class='  text-gray-500 text-sm  uppercase'>RT</div>
                  <div class='font-bold  text-gray-700 text-sm  uppercase'>
                    {' '}
                    {formState?.rt_akad}
                  </div>
                </div>
                <div className='border-l-2 border-gray-200 flex flex-col pl-2'>
                  <div class='  text-gray-500 text-sm  uppercase'>RW</div>
                  <div class='font-bold  text-gray-700 text-sm  uppercase'>
                    {' '}
                    {formState?.rw_akad}
                  </div>
                </div>
                <div className='border-l-2 border-gray-200 flex flex-col pl-2'>
                  <div class='  text-gray-500 text-sm  uppercase'>
                    {' '}
                    Provinsi
                  </div>
                  <div class='font-bold  text-gray-700 text-sm  uppercase'>
                    {' '}
                    {
                      provinsiSelectionAkad.find(
                        (prov) => prov.id == formState?.kode_provinsi_akad
                      )?.name
                    }
                  </div>
                </div>
                <div className='border-l-2 border-gray-200 flex flex-col pl-2'>
                  <div class='  text-gray-500 text-sm  uppercase'>
                    Kabupaten/kota
                  </div>
                  <div class='font-bold  text-gray-700 text-sm  uppercase'>
                    {' '}
                    {
                      kabupatenSelectionAkad.find(
                        (kab) => kab.id == formState?.kode_kabupaten_akad
                      )?.name
                    }
                  </div>
                </div>
                <div className='border-l-2 border-gray-200 flex flex-col pl-2'>
                  <div class='  text-gray-500 text-sm  uppercase'>
                    Kabupaten/kota
                  </div>
                  <div class='font-bold  text-gray-700 text-sm  uppercase'>
                    {' '}
                    {
                      kecamatanSelectionAkad.find(
                        (kec) => kec.id == formState?.kode_kecamatan_akad
                      )?.name
                    }
                  </div>
                </div>
                <div className='border-l-2 border-gray-200 flex flex-col pl-2'>
                  <div class='  text-gray-500 text-sm  uppercase'>
                    Kabupaten/kota
                  </div>
                  <div class='font-bold  text-gray-700 text-sm  uppercase'>
                    {' '}
                    {
                      kelurahanSelectionAkad.find(
                        (kel) => kel.id == formState?.kode_kelurahan_akad
                      )?.name
                    }
                  </div>
                </div>
                <div className='border-l-2 border-gray-200 flex flex-col pl-2'>
                  <div class='  text-gray-500 text-sm  uppercase'>Kode Pos</div>
                  <div class='font-bold  text-gray-700 text-sm  uppercase'>
                    {' '}
                    {formState?.kode_pos_akad}
                  </div>
                </div>
                <div className='border-l-2 border-gray-200 flex flex-col pl-2'>
                  <div class='  text-gray-500 text-sm  uppercase'>
                    Detail Lainnya
                  </div>
                  <div class='font-bold  text-gray-700 text-sm  uppercase'>
                    {' '}
                    {formState?.detail_alamat_akad}
                  </div>
                </div>
                <div className='border-l-2 border-gray-200 flex flex-col pl-2'>
                  <div class='  text-gray-500 text-sm  uppercase'>
                    Tanggal Akad
                  </div>
                  <div class='font-bold  text-gray-700 text-sm  uppercase'>
                    {' '}
                    {formState?.tanggal_akad}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class='w-full mt-2  mx-auto px-2 flex-1 svelte-1l8159u flex flex-col'>
          <div class='font-bold mx-auto my-3 text-gray-600 text-md  uppercase'>
            {' '}
            Alamat dan Tanggal Resepsi
          </div>
          <div className='w-full flex flex-col sm:flex-row  '>
            <div className='w-full '>
              <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-6 my-2 '>
                <div className='border-l-2 border-gray-200 flex flex-col pl-2'>
                  <div class='  text-gray-500 text-sm  uppercase'>
                    {' '}
                    Nama Jalan
                  </div>
                  <div class='font-bold  text-gray-700 text-sm  uppercase'>
                    {' '}
                    {formState?.nama_jalan_resepsi}
                  </div>
                </div>
                <div className='border-l-2 border-gray-200 flex flex-col pl-2'>
                  <div class='  text-gray-500 text-sm  uppercase'>RT</div>
                  <div class='font-bold  text-gray-700 text-sm  uppercase'>
                    {' '}
                    {formState?.rt_resepsi}
                  </div>
                </div>
                <div className='border-l-2 border-gray-200 flex flex-col pl-2'>
                  <div class='  text-gray-500 text-sm  uppercase'>RW</div>
                  <div class='font-bold  text-gray-700 text-sm  uppercase'>
                    {' '}
                    {formState?.rw_resepsi}
                  </div>
                </div>
                <div className='border-l-2 border-gray-200 flex flex-col pl-2'>
                  <div class='  text-gray-500 text-sm  uppercase'>
                    {' '}
                    Provinsi
                  </div>
                  <div class='font-bold  text-gray-700 text-sm  uppercase'>
                    {' '}
                    {
                      provinsiSelectionResepsi.find(
                        (prov) => prov.id == formState?.kode_provinsi_resepsi
                      )?.name
                    }
                  </div>
                </div>
                <div className='border-l-2 border-gray-200 flex flex-col pl-2'>
                  <div class='  text-gray-500 text-sm  uppercase'>
                    Kabupaten/kota
                  </div>
                  <div class='font-bold  text-gray-700 text-sm  uppercase'>
                    {' '}
                    {
                      kabupatenSelectionResepsi.find(
                        (kab) => kab.id == formState?.kode_kabupaten_resepsi
                      )?.name
                    }
                  </div>
                </div>
                <div className='border-l-2 border-gray-200 flex flex-col pl-2'>
                  <div class='  text-gray-500 text-sm  uppercase'>
                    Kabupaten/kota
                  </div>
                  <div class='font-bold  text-gray-700 text-sm  uppercase'>
                    {' '}
                    {
                      kecamatanSelectionResepsi.find(
                        (kec) => kec.id == formState?.kode_kecamatan_resepsi
                      )?.name
                    }
                  </div>
                </div>
                <div className='border-l-2 border-gray-200 flex flex-col pl-2'>
                  <div class='  text-gray-500 text-sm  uppercase'>
                    Kabupaten/kota
                  </div>
                  <div class='font-bold  text-gray-700 text-sm  uppercase'>
                    {' '}
                    {
                      kelurahanSelectionResepsi.find(
                        (kel) => kel.id == formState?.kode_kelurahan_resepsi
                      )?.name
                    }
                  </div>
                </div>
                <div className='border-l-2 border-gray-200 flex flex-col pl-2'>
                  <div class='  text-gray-500 text-sm  uppercase'>Kode Pos</div>
                  <div class='font-bold  text-gray-700 text-sm  uppercase'>
                    {' '}
                    {formState?.kode_pos_resepsi}
                  </div>
                </div>
                <div className='border-l-2 border-gray-200 flex flex-col pl-2'>
                  <div class='  text-gray-500 text-sm  uppercase'>
                    Detail Lainnya
                  </div>
                  <div class='font-bold  text-gray-700 text-sm  uppercase'>
                    {' '}
                    {formState?.detail_alamat_resepsi}
                  </div>
                </div>
                <div className='border-l-2 border-gray-200 flex flex-col pl-2'>
                  <div class='  text-gray-500 text-sm  uppercase'>
                    Tanggal Akad
                  </div>
                  <div class='font-bold  text-gray-700 text-sm  uppercase'>
                    {' '}
                    {formState?.tanggal_resepsi}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormPrivew;
