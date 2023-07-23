import React from 'react';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import './style.css';

const Stepper = (props) => {
  return (
    <div class='flex items-center'>
      <div class='flex items-center text-teal-600 relative'>
        <div class='rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-teal-600 relative'>
          {/* <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='100%'
                        height='100%'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        stroke-width='2'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        class='feather feather-bookmark '
                      >
                        <path d='M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z'></path>
                      </svg> */}
          <LogoDevIcon
            style={{ position: 'absolute', top: '10', left: '10' }}
          />
        </div>
        <div class='description text-teal-600'>Mempelai Laki-laki</div>
      </div>
      <div class='progress-bar-done'></div>
      <div class='flex items-center text-white relative'>
        <div class='rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 bg-teal-600 border-teal-600 relative'>
          {/* <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='100%'
                        height='100%'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        stroke-width='2'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        class='feather feather-user-plus '
                      >
                        <path d='M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2'></path>
                        <circle cx='8.5' cy='7' r='4'></circle>
                        <line x1='20' y1='8' x2='20' y2='14'></line>
                        <line x1='23' y1='11' x2='17' y2='11'></line>
                      </svg> */}
          <LogoDevIcon
            style={{ position: 'absolute', top: '10', left: '10' }}
          />
        </div>
        <div class='description text-teal-600'>Mempelai Perempuan</div>
      </div>
      <div class='flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300'></div>
      <div class='flex items-center text-gray-500 relative'>
        <div class='rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-gray-300 relative'>
          {/* <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='100%'
                        height='100%'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        stroke-width='2'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        class='feather feather-mail '
                      >
                        <path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z'></path>
                        <polyline points='22,6 12,13 2,6'></polyline>
                      </svg> */}
          <LogoDevIcon
            style={{ position: 'absolute', top: '10', left: '10' }}
          />
        </div>
        <div class='description text-gray-500'>Alamat</div>
      </div>
      <div class='flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300'></div>
      <div class='flex items-center text-gray-500 relative'>
        <div class='rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-gray-300 relative'>
          {/* <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='100%'
                        height='100%'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        stroke-width='2'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        class='feather feather-database '
                      >
                        <ellipse cx='12' cy='5' rx='9' ry='3'></ellipse>
                        <path d='M21 12c0 1.66-4 3-9 3s-9-1.34-9-3'></path>
                        <path d='M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5'></path>
                      </svg> */}
          <LogoDevIcon
            style={{ position: 'absolute', top: '10', left: '10' }}
          />
        </div>
        <div class='description text-gray-500'>Galeri Foto</div>
      </div>
      <div class='flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300'></div>
      <div class='flex items-center text-gray-500 relative'>
        <div class='rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-gray-300 relative'>
          {/* <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='100%'
                        height='100%'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        stroke-width='2'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        class='feather feather-database '
                      >
                        <ellipse cx='12' cy='5' rx='9' ry='3'></ellipse>
                        <path d='M21 12c0 1.66-4 3-9 3s-9-1.34-9-3'></path>
                        <path d='M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5'></path>
                      </svg> */}
          <LogoDevIcon
            style={{ position: 'absolute', top: '10', left: '10' }}
          />
        </div>
        <div class='description text-gray-500'>Submit</div>
      </div>
    </div>
  );
};

export default Stepper;
