import { useState } from 'react';
import React from 'react';
import { FileUploader } from 'react-drag-drop-files';

const FormGaleri = (props) => {
  const { step, steps, formState, setFormState, handleChangeImage } = props;
  const [file, setFile] = useState(null);
  const fileTypes = ['JPEG', 'PNG', 'GIF', 'JPG'];

  return (
    <div
      className={` shadow-md border-gray-500 rounded p-4 ${
        step.position < steps.id
          ? 'transition-transform'
          : 'transition-transform-out'
      }  ${step.position === steps.id ? 'transform ' : ''}`}
    >
      <div class='flex flex-col md:flex-row sm:hidden'>
        <h1 className='m-auto text-center text-3xl font-bold mb-3'>
          Galeri Foto
        </h1>
      </div>
      <div class='font-bold h-6 ml-3 mt-0 text-gray-600 text-xs leading-8 uppercase'>
        {' '}
        Foto Cover
      </div>
      <FileUploader
        multiple={false}
        handleChange={(file) =>
          handleChangeImage(file, 'foto_landscape', 'nama_file_foto_landscape')
        }
        name='file'
        types={fileTypes}
        dropMessageStyle={{ margin: '0  0.5rem' }}
        style={{ position: 'relative' }}
      >
        <div class='flex items-center justify-center w-full px-2 my-2'>
          <label
            for='dropzone-file'
            class={`flex flex-col items-center justify-center w-full h-[28rem] border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 ${
              formState?.foto_landscape ? 'border-green-300' : 'border-gray-300'
            }`}
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
        {formState?.foto_landscape ? (
          <div className='flex items-center justify-center w-full  h-[28rem] absolute rounded-xl bottom-0 z-0 transition-opacity duration-300  border-black hover:opacity-50 object-contain p-2'>
            <img
              src={formState?.foto_landscape}
              className='rounded-xl h-full object-cover px-2 w-full '
              alt='image'
            />
          </div>
        ) : (
          ''
        )}{' '}
      </FileUploader>
      <p className='px-2 mx-auto'>
        {formState?.foto_landscape
          ? `File: ${formState?.nama_file_foto_landscape}`
          : ''}
      </p>
      <main class='p-2  h-auto my-5 '>
        <div class='font-bold ml-1 h-6 mt-0 text-gray-600 text-xs leading-8 uppercase'>
          {' '}
          Foto Galeri
        </div>
        <div class='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-6 my-2'>
          <FileUploader
            multiple={false}
            handleChange={(file) =>
              handleChangeImage(
                file,
                'foto_galeri_1',
                'nama_file_foto_galeri_1'
              )
            }
            name='file'
            types={fileTypes}
            dropMessageStyle={{ margin: '0  0.5rem' }}
            style={{ position: 'relative' }}
          >
            <div
              for='dropzone-file'
              class={`border-2 border-dashed rounded-lg border-gray-300 h-52 md:h-64 cursor-pointer bg-gray-50 flex ${
                formState?.foto_galeri_1
                  ? 'border-green-300'
                  : 'border-gray-300'
              }`}
            >
              <div class='flex flex-col items-center justify-center pt-5 pb-6 m-auto'>
                <svg
                  class='w-6 h-6 mb-4 text-gray-500 '
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
                <p class='mb-2 text-xs text-gray-500 '>
                  <span class='font-semibold'>Click Untuk upload</span> atau
                  drag and drop
                </p>
                <p class='text-[10px] text-gray-500 '>
                  SVG, PNG, JPG atau GIF (MAX. 3 Mb)
                </p>
              </div>
            </div>
            {formState?.foto_galeri_1 ? (
              <div className='flex items-center justify-center w-full  h-52 md:h-64 absolute rounded-xl bottom-0 z-0 transition-opacity duration-300   hover:opacity-50 object-contain p-2'>
                <img
                  src={formState?.foto_galeri_1}
                  className='rounded-md h-full object-cover px-0 w-full '
                  alt='image'
                />
              </div>
            ) : (
              ''
            )}{' '}
            {/* <p className='px-2 mx-auto'>
            {formState?.foto_galeri_1
              ? `File: ${formState?.nama_file_foto_galeri_1}`
              : ''}
          </p> */}
          </FileUploader>
          <FileUploader
            multiple={false}
            handleChange={(file) =>
              handleChangeImage(
                file,
                'foto_galeri_2',
                'nama_file_foto_galeri_2'
              )
            }
            name='file'
            types={fileTypes}
            dropMessageStyle={{ margin: '0  0.5rem' }}
            style={{ position: 'relative' }}
          >
            <div
              for='dropzone-file'
              class={`border-2 border-dashed rounded-lg border-gray-300 h-52 md:h-64 cursor-pointer bg-gray-50 flex ${
                formState?.foto_galeri_2
                  ? 'border-green-300'
                  : 'border-gray-300'
              }`}
            >
              <div class='flex flex-col items-center justify-center pt-5 pb-6 m-auto'>
                <svg
                  class='w-6 h-6 mb-4 text-gray-500 '
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
                <p class='mb-2 text-xs text-gray-500 '>
                  <span class='font-semibold'>Click Untuk upload</span> atau
                  drag and drop
                </p>
                <p class='text-[10px] text-gray-500 '>
                  SVG, PNG, JPG atau GIF (MAX. 3 Mb)
                </p>
              </div>
            </div>
            {formState?.foto_galeri_2 ? (
              <div className='flex items-center justify-center w-full  h-52 md:h-64 absolute rounded-xl bottom-0 z-0 transition-opacity duration-300   hover:opacity-50 object-contain p-2'>
                <img
                  src={formState?.foto_galeri_2}
                  className='rounded-md h-full object-cover px-0 w-full '
                  alt='image'
                />
              </div>
            ) : (
              ''
            )}{' '}
            {/* <p className='px-2 mx-auto'>
            {formState?.foto_galeri_1
              ? `File: ${formState?.nama_file_foto_galeri_1}`
              : ''}
          </p> */}
          </FileUploader>
          <FileUploader
            multiple={false}
            handleChange={(file) =>
              handleChangeImage(
                file,
                'foto_galeri_3',
                'nama_file_foto_galeri_3'
              )
            }
            name='file'
            types={fileTypes}
            dropMessageStyle={{ margin: '0  0.5rem' }}
            style={{ position: 'relative' }}
          >
            <div
              for='dropzone-file'
              class={`border-2 border-dashed rounded-lg border-gray-300 h-52 md:h-64 cursor-pointer bg-gray-50 flex ${
                formState?.foto_galeri_3
                  ? 'border-green-300'
                  : 'border-gray-300'
              }`}
            >
              <div class='flex flex-col items-center justify-center pt-5 pb-6 m-auto'>
                <svg
                  class='w-6 h-6 mb-4 text-gray-500 '
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
                <p class='mb-2 text-xs text-gray-500 '>
                  <span class='font-semibold'>Click Untuk upload</span> atau
                  drag and drop
                </p>
                <p class='text-[10px] text-gray-500 '>
                  SVG, PNG, JPG atau GIF (MAX. 3 Mb)
                </p>
              </div>
            </div>
            {formState?.foto_galeri_3 ? (
              <div className='flex items-center justify-center w-full  h-52 md:h-64 absolute rounded-xl bottom-0 z-0 transition-opacity duration-300   hover:opacity-50 object-contain p-2'>
                <img
                  src={formState?.foto_galeri_3}
                  className='rounded-md h-full object-cover px-0 w-full '
                  alt='image'
                />
              </div>
            ) : (
              ''
            )}{' '}
            {/* <p className='px-2 mx-auto'>
            {formState?.foto_galeri_1
              ? `File: ${formState?.nama_file_foto_galeri_1}`
              : ''}
          </p> */}
          </FileUploader>
          <FileUploader
            multiple={false}
            handleChange={(file) =>
              handleChangeImage(
                file,
                'foto_galeri_4',
                'nama_file_foto_galeri_4'
              )
            }
            name='file'
            types={fileTypes}
            dropMessageStyle={{ margin: '0  0.5rem' }}
            style={{ position: 'relative' }}
          >
            <div
              for='dropzone-file'
              class={`border-2 border-dashed rounded-lg border-gray-300 h-52 md:h-64 cursor-pointer bg-gray-50 flex ${
                formState?.foto_galeri_4
                  ? 'border-green-300'
                  : 'border-gray-300'
              }`}
            >
              <div class='flex flex-col items-center justify-center pt-5 pb-6 m-auto'>
                <svg
                  class='w-6 h-6 mb-4 text-gray-500 '
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
                <p class='mb-2 text-xs text-gray-500 '>
                  <span class='font-semibold'>Click Untuk upload</span> atau
                  drag and drop
                </p>
                <p class='text-[10px] text-gray-500 '>
                  SVG, PNG, JPG atau GIF (MAX. 3 Mb)
                </p>
              </div>
            </div>
            {formState?.foto_galeri_4 ? (
              <div className='flex items-center justify-center w-full  h-52 md:h-64 absolute rounded-xl bottom-0 z-0 transition-opacity duration-300   hover:opacity-50 object-contain p-2'>
                <img
                  src={formState?.foto_galeri_4}
                  className='rounded-md h-full object-cover px-0 w-full '
                  alt='image'
                />
              </div>
            ) : (
              ''
            )}{' '}
            {/* <p className='px-2 mx-auto'>
            {formState?.foto_galeri_1
              ? `File: ${formState?.nama_file_foto_galeri_1}`
              : ''}
          </p> */}
          </FileUploader>
          <FileUploader
            multiple={false}
            handleChange={(file) =>
              handleChangeImage(
                file,
                'foto_galeri_5',
                'nama_file_foto_galeri_5'
              )
            }
            name='file'
            types={fileTypes}
            dropMessageStyle={{ margin: '0  0.5rem' }}
            style={{ position: 'relative' }}
          >
            <div
              for='dropzone-file'
              class={`border-2 border-dashed rounded-lg border-gray-300 h-52 md:h-64 cursor-pointer bg-gray-50 flex ${
                formState?.foto_galeri_5
                  ? 'border-green-300'
                  : 'border-gray-300'
              }`}
            >
              <div class='flex flex-col items-center justify-center pt-5 pb-6 m-auto'>
                <svg
                  class='w-6 h-6 mb-4 text-gray-500 '
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
                <p class='mb-2 text-xs text-gray-500 '>
                  <span class='font-semibold'>Click Untuk upload</span> atau
                  drag and drop
                </p>
                <p class='text-[10px] text-gray-500 '>
                  SVG, PNG, JPG atau GIF (MAX. 3 Mb)
                </p>
              </div>
            </div>
            {formState?.foto_galeri_5 ? (
              <div className='flex items-center justify-center w-full  h-52 md:h-64 absolute rounded-xl bottom-0 z-0 transition-opacity duration-300   hover:opacity-50 object-contain p-2'>
                <img
                  src={formState?.foto_galeri_5}
                  className='rounded-md h-full object-cover px-0 w-full '
                  alt='image'
                />
              </div>
            ) : (
              ''
            )}{' '}
            {/* <p className='px-2 mx-auto'>
            {formState?.foto_galeri_1
              ? `File: ${formState?.nama_file_foto_galeri_1}`
              : ''}
          </p> */}
          </FileUploader>
        </div>
      </main>
      <div class='font-bold h-6 ml-3 mt-0 text-gray-600 text-xs leading-8 uppercase'>
        {' '}
        Foto Potrait
      </div>
      <FileUploader
        multiple={false}
        handleChange={(file) =>
          handleChangeImage(file, 'foto_potrait', 'nama_file_foto_potrait')
        }
        name='file'
        types={fileTypes}
        dropMessageStyle={{ margin: '0  0.5rem' }}
        style={{ position: 'relative' }}
      >
        <div class='flex items-center justify-center w-full px-2 my-2'>
          <label
            for='dropzone-file'
            class={`flex flex-col items-center justify-center w-full h-[30rem] border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 ${
              formState?.foto_potrait ? 'border-green-300' : 'border-gray-300'
            }`}
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
        {formState?.foto_potrait ? (
          <div className='flex items-center justify-center w-full  h-[30rem] absolute rounded-xl bottom-0 z-0 transition-opacity duration-300  border-black hover:opacity-50 object-contain p-2'>
            <img
              src={formState?.foto_potrait}
              className='rounded-xl h-full object-cover px-2 w-full '
              alt='image'
            />
          </div>
        ) : (
          ''
        )}{' '}
      </FileUploader>
      <p className='px-2 mx-auto'>
        {formState?.foto_potrait
          ? `File: ${formState?.nama_file_foto_potrait}`
          : ''}
      </p>
    </div>
  );
};

export default FormGaleri;
