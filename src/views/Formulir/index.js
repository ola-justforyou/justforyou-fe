import React, { useState } from 'react';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import Navbar from '../../components/Navbar';
import Stepper from './Components/Stepper';
import Form from './Components/Form';

const Formulir = () => {
  const filledArray = Array(6).fill(5);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className='relative max-w-screen min-h-screen flex flex-col mb-24'>
      <Navbar />
      <div className='mx-auto mt-24'>
        <div className='w-screen container'>
          <section
            className='relative  
            m-auto text-gray-600 flex'
          >
            <div class='w-screen'>
              <div class='mx-4 p-4'>
                {/* stepper */}

                <Stepper />
              </div>
              <div class='mt-8 p-4'>
                <Form />
                <div class='flex p-2 mt-4'>
                  <button
                    class='text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
        hover:bg-gray-200  
        bg-gray-100 
        text-gray-700 
        border duration-200 ease-in-out 
        border-gray-600 transition'
                  >
                    Previous
                  </button>
                  <div class='flex-auto flex flex-row-reverse'>
                    <button
                      class='text-base  ml-2  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
        hover:bg-teal-600  
        bg-teal-600 
        text-teal-100 
        border duration-200 ease-in-out 
        border-teal-600 transition'
                    >
                      Next
                    </button>
                    <button
                      class='text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
        hover:bg-teal-200  
        bg-teal-100 
        text-teal-700 
        border duration-200 ease-in-out 
        border-teal-600 transition'
                    >
                      Skip
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Formulir;
