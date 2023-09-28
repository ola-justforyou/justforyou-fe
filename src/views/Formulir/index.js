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
      label: 'Alamat dan Tanggal',
      icon: <MapPin style={{ position: 'absolute', top: '10', left: '10' }} />,
    },
    {
      id: 4,
      label: 'Galeri Foto',
      icon: <Image style={{ position: 'absolute', top: '10', left: '10' }} />,
    },
    {
      id: 5,
      label: 'Priview',
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
              <div class='mx-4 px-4 py-1 sm:py-4'>
                {/* stepper */}

                <Stepper step={step} setStep={setStep} steps={steps} />
              </div>
              <div class='mt-0 sm:mt-5 p-4'>
                <Form step={step} steps={steps} setStep={setStep} />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Formulir;
