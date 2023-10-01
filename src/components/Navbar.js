import React, { useState } from 'react';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className='container m-auto fixed left-1/2 transform -translate-x-1/2 z-50'>
      <nav class='bg-white border-gray-200 container '>
        <div class=' text-gray-500 flex flex-wrap items-center justify-between mx-auto p-4'>
          <Link to='/' class='flex items-center'>
            {/* <img
              src='https://flowbite.com/docs/images/logo.svg'
              class='h-8 mr-3'
              alt='Flowbite Logo'
            /> */}
            <LogoDevIcon />
            <span class='self-center text-2xl font-semibold whitespace-nowrap '>
              Justforyou
            </span>
          </Link>
          <div class='flex md:order-2'>
            <Link
              to='/desainundangan'
              type='button'
              class='text-blue-700 bg-white hover:text-white hover:bg-blue-800 focus:ring-4 border border-blue-800 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 hidden sm:block'
            >
              Pesan Sekarang
            </Link>
            <button
              data-collapse-toggle='navbar-cta'
              type='button'
              class='inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 '
              aria-controls='navbar-cta'
              aria-expanded={isMenuOpen}
              onClick={handleMenuToggle}
            >
              <span class='sr-only'>Open main menu</span>
              <svg
                class='w-6 h-6'
                aria-hidden='true'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                  clip-rule='evenodd'
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
              isMenuOpen ? '' : 'hidden'
            }`}
            id='navbar-cta'
          >
            <ul class='flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white '>
              <li>
                <Link
                  to='/'
                  className='block py-2 pl-3 pr-4 text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0'
                  // className='block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 '
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to='/desainundangan'
                  className='block py-2 pl-3 pr-4 text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0'
                >
                  Desain Undangan
                </Link>
              </li>
              <li>
                <Link
                  to='/portofolio'
                  className='block py-2 pl-3 pr-4 text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0'
                >
                  Portofolio
                </Link>
              </li>
              <li>
                <Link
                  to='/olagiftbox'
                  className='block py-2 pl-3 pr-4 text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0'
                >
                  E-gift
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
