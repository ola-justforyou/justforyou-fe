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

          <section className='mx-auto mt-24  bg-white  grid grid-cols-2 md:grid-cols-12 lg:grid-cols-12 gap-x-6 gap-y-12'>
            {filledArray.map((item, key) => (
              <div className=' max-w-xs   m-auto bg-white border border-gray-200 rounded-lg shadow col-span-12 md:col-span-6 lg:col-span-4 2xl:col-span-3'>
                <a href='#'>
                  <img
                    className='p-8 rounded-t-lg'
                    src='https://flowbite.com/docs/images/products/apple-watch.png'
                    alt='product image'
                  />
                </a>
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
