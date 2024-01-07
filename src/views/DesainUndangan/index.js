import React, { useState } from 'react';

import Navbar from '../../components/Navbar/Navbar';
import { TypeAnimation } from 'react-type-animation';
const DesainUndangan = () => {
  const filledArray = Array(6).fill(5);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [short, setShort] = useState(1);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const sortByPriceAscending = (products) =>
    products?.sort((a, b) => a?.price - b?.price);

  const sortByPriceDescending = (products) =>
    products?.sort((a, b) => b?.price - a?.price);
  const sortBySale = (products) => products?.sort((a, b) => b?.sale - a?.sale);
  const sortByNewProduct = (products) =>
    products?.sort((a, b) => b?.create_at - a?.create_at);
  const shortBy = [
    {
      id: '1',
      name: 'Semua',
      function: () => {},
    },
    {
      id: '2',
      name: 'Islamic',
      function: (products) => sortByNewProduct(products),
    },
    {
      id: '3',
      name: 'Traditional',
      function: (products) => sortByPriceDescending(products),
    },
    {
      id: '4',
      name: 'Minimalis',
      function: (products) => sortByPriceAscending(products),
    },
    {
      id: '5',
      name: 'Modern',
      function: (products) => sortBySale(products),
    },
    {
      id: '6',
      name: 'illustration',
      function: (products) => sortBySale(products),
    },
  ];
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
              Desain Undangan
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  ' yang Indah ',
                  2000, // wait 1s before replacing "Mice" with "Hamsters"
                  ' yang Cantik ',
                  2000,
                  ' yang Menarik ',
                  2000,
                  ' yang Cocok ',
                  2000,
                ]}
                wrapper='span'
                speed={30}
                style={{ opacity: 10 }}
                repeat={0}
                cursor={false}
              />
              Untuk Anda
            </h1>
            1
          </section>
          <div className='w-full flex justify-between mt-24 xl:p-0 xl:pl-4 pr-4 pl-8'>
            <h2
              className={`text-lg font-medium  ${
                short != 1
                  ? 'px-2 bg-blue-100  text-blue-900 rounded-lg mb-4 mt-1'
                  : 'text-black mb-2'
              }`}
            >
              {shortBy.find((item) => item.id == short)?.name}
            </h2>
            <div className='flex justify-between items-center relative mr-3 mb-2 '>
              <button
                id='dropdownDefaultButton'
                onClick={toggleDropdown}
                className={`text-sm font-medium text-gray-500  text-center inline-flex items-center `}
                type='button'
              >
                Tema
                <svg
                  className='w-2.5 m-2.5 ml-1.5'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 10 6'
                >
                  <path
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='m1 1 4 4 4-4'
                  />
                </svg>
              </button>
              {isOpen && (
                <div
                  id='lastDaysdropdown'
                  className=' absolute top-7 right-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-lg w-44 '
                >
                  <ul
                    className='py-2 text-sm text-gray-700 border border-gray-100 rounded-md'
                    aria-labelledby='dropdownDefaultButton'
                  >
                    {shortBy.map((by, index) => (
                      <li
                        key={index}
                        onClick={() => {
                          setShort(by.id);
                          setIsOpen(!isOpen);
                          // by.function(products);
                        }}
                      >
                        <a
                          href='#'
                          className='block px-4 py-2 hover:bg-gray-100 '
                        >
                          {by.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
          <section className='mx-auto mt-4 bg-white  grid grid-cols-2 md:grid-cols-12 lg:grid-cols-12 gap-x-6 gap-y-12'>
            {filledArray.map((item, key) => (
              <div className=' max-w-xl   m-auto bg-white border border-gray-200 rounded-lg shadow col-span-12 md:col-span-6 lg:col-span-4 2xl:col-span-3'>
                <div className='xl:w-96 w-[22rem] h-64'>
                  <img
                    className='p-0 rounded-t-lg pb-4 w-full object-cover h-full'
                    src={`${
                      key % 3 == 0
                        ? 'https://media.viding.co/dmlkaW5nIGNvIGltYWdlIHByb3h5IGJ5IGZseS5pbw/rs:auto:0:0:1/g:no/aHR0cHM6Ly92aWRpbmcuY28vaW1hZ2VzLzIwMjMxMTE0MTkzOTIwLmpwZWc.webp'
                        : key % 2 == 0
                        ? 'https://media.viding.co/dmlkaW5nIGNvIGltYWdlIHByb3h5IGJ5IGZseS5pbw/rs:auto:0:0:1/g:no/aHR0cHM6Ly92aWRpbmcuY28vaW1hZ2VzLzIwMjMxMTEwMTgwNjU4LmpwZWc.webp'
                        : 'https://media.viding.co/dmlkaW5nIGNvIGltYWdlIHByb3h5IGJ5IGZseS5pbw/rs:auto:0:0:1/g:no/aHR0cHM6Ly92aWRpbmcuY28vaW1hZ2VzLzIwMjMxMTEwMTgwNjQ3LmpwZWc.webp'
                    }`}
                    alt='product image'
                  />
                </div>
                <div className='px-5 pb-5 '>
                  <a href='#'>
                    <h5 className='text-xl font-semibold tracking-tight text-gray-900  mb-1  '>
                      Tema Desain Undangan {key}
                    </h5>

                    <span
                      className={`mr-2 ${
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

                    <span className='islamic-badge'>Islamic Theme</span>
                  </a>

                  <div className='flex items-center justify-between mt-4'>
                    {/* <span className='text-3xl font-bold text-gray-900    '>
                      49.000
                    </span> */}
                    <a
                      href='#'
                      className='text-white mx-auto  w-full bg-green-800 opacity-70 hover:text-green-800 hover:bg-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
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
