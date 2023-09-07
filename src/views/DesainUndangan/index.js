import React, { useState } from 'react';

import Navbar from '../../components/Navbar';

const DesainUndangan = () => {
  const filledArray = Array(6).fill(5);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className='relative max-w-screen min-h-screen flex flex-col mb-24'>
      <Navbar />
      <div className='m-auto'>
        <div className='w-screen container'>
          <section className='relative  h-80 min-w-screen m-auto text-gray-600 flex'>
            <h1 className='max-w-2xl m-auto  text-center text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl pt-32'>
              Pilih Desain Undangan yang Cocok Untuk Anda
            </h1>
            1
          </section>
          <section className='relative'>
            <p>Tema</p>
            <button
              id='dropdownDefaultButton'
              data-dropdown-toggle='dropdown'
              class=' text-blue-700 border border-black-400 bg-white hover:bg-blue-200 focus:ring-4 focus:outline-none ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center '
              type='button'
              aria-expanded={isMenuOpen}
              onClick={handleMenuToggle}
            >
              Filter{' '}
              <svg
                class='w-4 h-4 ml-2'
                aria-hidden='true'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M19 9l-7 7-7-7'
                ></path>
              </svg>
            </button>
            <div
              id='dropdown'
              class={` z-10  ${
                isMenuOpen ? 'absolute top-20' : 'hidden'
              } bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 `}
            >
              <ul
                class='py-2 text-sm text-gray-700 dark:text-gray-200'
                aria-labelledby='dropdownDefaultButton'
              >
                <li>
                  <a
                    href='#'
                    class='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    class='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                  >
                    Settings
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    class='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                  >
                    Earnings
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    class='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </section>

          <section className='mx-auto mt-24  bg-white  grid grid-cols-2 md:grid-cols-12 lg:grid-cols-12 gap-x-6 gap-y-12'>
            {filledArray.map((item, key) => (
              <div class=' max-w-xs   m-auto bg-white border border-gray-200 rounded-lg shadow col-span-12 md:col-span-6 lg:col-span-4 2xl:col-span-3'>
                <a href='#'>
                  <img
                    class='p-8 rounded-t-lg'
                    src='https://flowbite.com/docs/images/products/apple-watch.png'
                    alt='product image'
                  />
                </a>
                <div class='px-5 pb-5 '>
                  <a href='#'>
                    <h5 class='text-xl font-semibold tracking-tight text-gray-900  mb-1  '>
                      Tema Desain Undangan {key}
                    </h5>

                    <span
                      class={`mr-2 ${
                        key == 1
                          ? 'bronze-badge'
                          : key % 2 == 0
                          ? 'gold-badge'
                          : 'silver-badge'
                      }`}
                    >
                      {`   ${
                        key == 1 ? 'Bronze' : key % 2 == 0 ? 'Gold' : 'Silver'
                      }`}
                    </span>

                    <span class='islamic-badge'>Islamic Theme</span>
                  </a>

                  <div class='flex items-center justify-between mt-4'>
                    {/* <span class='text-3xl font-bold text-gray-900    '>
                      49.000
                    </span> */}
                    <a
                      href='#'
                      class='text-white mx-auto  w-full bg-green-800 opacity-70 hover:text-green-800 hover:bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
                    >
                      Preview
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default DesainUndangan;
