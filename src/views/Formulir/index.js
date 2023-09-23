import React, { useState } from 'react';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import Navbar from '../../components/Navbar';
import Stepper from './Components/Stepper';
import Form from './Components/Form';
import BoyIcon from '@mui/icons-material/Boy';
import GirlIcon from '@mui/icons-material/Girl';
import MapIcon from '@mui/icons-material/Map';
import CollectionsIcon from '@mui/icons-material/Collections';
import { MapPin, GalleryThumbnails, Image } from 'lucide-react';

const Formulir = () => {
  const filledArray = Array(6).fill(5);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [step, setStep] = useState({
    start: true,
    finish: false,
    position: 1,
  });
  const steps = [
    {
      id: 1,
      label: 'Mempelai Laik-laki',
      icon: <BoyIcon style={{ position: 'absolute', top: '10', left: '10' }} />,
    },
    {
      id: 2,
      label: 'Mempelai Perempuan',
      icon: (
        <GirlIcon style={{ position: 'absolute', top: '10', left: '10' }} />
      ),
    },
    {
      id: 3,
      label: 'Alamat',
      icon: <MapPin style={{ position: 'absolute', top: '10', left: '10' }} />,
    },
    {
      id: 4,
      label: 'Galeri Foto',
      icon: <Image style={{ position: 'absolute', top: '10', left: '10' }} />,
    },
    {
      id: 5,
      label: 'Submit',
      icon: (
        <GalleryThumbnails
          style={{ position: 'absolute', top: '10', left: '10' }}
        />
      ),
    },
  ];

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className='relative w-screen min-h-screen flex flex-col mb-24'>
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

                <Stepper step={step} setStep={setStep} steps={steps} />
              </div>
              <div class='mt-8 p-4'>
                <Form step={step} steps={steps} />
                <div class='flex p-2 mt-4'>
                  {step.position <= 1 && step.start ? (
                    ''
                  ) : (
                    <button
                      class='text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
        hover:bg-gray-200  
        bg-gray-100 
        text-gray-700 
        border duration-200 ease-in-out 
        border-gray-600 transition'
                      onClick={() => {
                        setStep((prevState) => ({
                          ...prevState,
                          start: step.position <= 2 ? true : false,
                          finish: false,
                          position: step.position === 0 ? 0 : step.position - 1,
                        }));
                      }}
                    >
                      Previous
                    </button>
                  )}
                  <div class='flex-auto flex flex-row-reverse'>
                    {step.position >= 5 ? (
                      <button
                        class='text-base  ml-2  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
        hover:bg-teal-600  
        bg-teal-600 
        text-teal-100 
        border duration-200 ease-in-out 
        border-teal-600 transition'
                        onClick={() => {
                          alert('data terkirim');
                        }}
                      >
                        Finish
                      </button>
                    ) : (
                      <button
                        class='text-base  ml-2  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
        hover:bg-teal-600  
        bg-teal-600 
        text-teal-100 
        border duration-200 ease-in-out 
        border-teal-600 transition'
                        onClick={() => {
                          setStep((prevState) => ({
                            ...prevState,
                            start: false,
                            finish: step.position >= 5 ? true : false,
                            position:
                              step.position === 6 ? 6 : step.position + 1,
                          }));
                        }}
                      >
                        Next
                      </button>
                    )}
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
