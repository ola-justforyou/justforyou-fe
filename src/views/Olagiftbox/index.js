import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import SwiperEffect from '../../components/SwiperEffect/SwiperEffect';

const Olagiftbox = () => {
  return (
    <div className='relative w-screen min-h-screen flex flex-col mb-24'>
      <Navbar />
      <div className='mx-auto mt-24 container'>
        <h1 className=' m-auto text-gray-500 text-center text-3xl font-semibold  my-6'>
          Temanmu Pilih Hadiah, Kami Yang Kirim
        </h1>
        <SwiperEffect />
      </div>
    </div>
  );
};

export default Olagiftbox;
