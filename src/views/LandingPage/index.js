import React, { useEffect, useState } from 'react';
import ImageIcon from '@mui/icons-material/Image';
import MapIcon from '@mui/icons-material/Map';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import '../LandingPage/style.css';
import 'swiper/css/pagination';
import jumbotronImage from '../../assets/images/jumbotron.png';
import mockup1Image from '../../assets/images/mockup1.png';
import mockup2Image from '../../assets/images/mockup2.png';

const LandingPage = () => {
  const [deviceType, setDeviceType] = useState('');

  useEffect(() => {
    const handleResize = () => {
      const { innerWidth } = window;

      if (innerWidth < 768) {
        setDeviceType('mobile');
      } else if (innerWidth >= 768 && innerWidth < 1024) {
        setDeviceType('tablet');
      } else {
        setDeviceType('desktop');
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <section className='bg-white h-screen flex flex-col'>
        <div className='grid max-w-screen-xl px-4 py-8  mx-auto my-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12'>
          <div className='mr-auto place-self-center lg:col-span-7 text-gray-600 gap-y-3'>
            <h1 className='max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl '>
              Bagikan Kehagiaanmu{' '}
              <span className='text-blue-700  mt-24'>Bersama Kami</span>
            </h1>
            <p className='max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl '>
              Rayakan dan bagikan momen terindah dalam hidup dengan lebih
              praktis dan indah dengan justforyou
            </p>
            <a
              href='#'
              className='text-white bg-blue-800    hover:text-blue-800 hover:bg-white inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center  rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 '
            >
              Pesan Sekarang
              <svg
                className='w-5 h-5 ml-2 -mr-1'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                  clip-rule='evenodd'
                ></path>
              </svg>
            </a>
            {/* <a
              href='#'
              className='inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100  '
            >
              Coba Gratis
            </a> */}
          </div>
          <div className='hidden lg:mt-0 lg:col-span-5 lg:flex  '>
            <img
              src={jumbotronImage}
              alt='mockup'
              className='w-96  mx-auto'
            ></img>
          </div>
        </div>
      </section>
      <section class='bg-gray-100 w-screen  py-12 '>
        <div class='px-4 mx-auto max-w-screen-xl  lg:px-6 flex flex-col'>
          <div class='max-w-screen-md mb-8 lg:mb-16 mx-auto flex flex-col gap-y-4'>
            <h2 class=' text-4xl text-center tracking-tight font-extrabold text-gray-600 '>
              Digital Invitation
            </h2>
            <p class='text-center text-gray-500 sm:text-xl '>
              Kami hadir memudahkanmu mengundang sahabat yang jauh dikemas dalam
              tampilan dan tema yang cantik
            </p>
            <a
              href='#'
              className='mx-auto mt-4 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-800   hover:text-blue-800 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 hidden xl:block hidden'
            >
              Pelajari Selengkapnya
            </a>
          </div>
          <div class='w-100 flex  '>
            <div className='m-auto  '>
              <img src={mockup1Image} alt='mockup' className='sh '></img>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-white min-h-screen  flex  flex-col   '>
        <div className='grid max-w-screen-xl px-4 py-8 mx-auto my-auto gap-8 relative  lg:py-16 lg:grid-cols-12'>
          {/* <div class='mx-auto   text-center mb-10 flex absolute   z-30 centered  left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1 '>
            <h2 class='text-4xl tracking-tight font-extrabold text-gray-600 m-auto'>
              Olagiftbox
            </h2>
          </div> */}
          <div className='mt-6   py-10 lg:mt-0 lg:col-span-5 flex  order-2 md:order-1'>
            <img src={mockup2Image} alt='mockup' className='mx-auto '></img>
          </div>
          <div className='m-auto place-self-center lg:col-span-7 text-gray-600 w-full order-1 md:order-2'>
            <h2 className='mt-10 md:mt-5 max-w-2xl mb-2 text-4xl font-extrabold tracking-tight leading-none  '>
              E-Gift
            </h2>
            <p className='max-w-2xl mb-3 font-light text-gray-500 lg:mb-4 md:text-lg lg:text-xl '>
              Fitur yang memudahkan temanmu menyampaikan ucapan selamat dalam
              bentuk hadiah dengan praktis dan mudah
            </p>

            <a
              href='#'
              className='mt-0 text-white bg-blue-800   hover:text-blue-800 hover:bg-white inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center  rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 '
            >
              Pelajari Selengkapnya
              <svg
                className='w-5 h-5 ml-2 -mr-1'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                  clip-rule='evenodd'
                ></path>
              </svg>
            </a>
            <div className='w-full pt-8  flex flex-col sm:flex-row gap-4 h-full'>
              <div class='h-full max-w-xs py-5 px-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 '>
                <h5 class='mb-2 text-2xl font-bold tracking-tight text-gray-900 '>
                  Pilih Hadiahmu
                </h5>
                <p class='font-normal text-gray-700 '>
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </div>
              <div class=' max-w-xs py-5 px-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 '>
                <h5 class='mb-2 text-2xl font-bold tracking-tight text-gray-900 '>
                  Kami yang Kirim
                </h5>
                <p class='font-normal text-gray-700 '>
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class='bg-white   '>
        <div class='py-8 px-4  mx-auto max-w-screen-xl lg:py-16 lg:px-6'>
          <div class='mx-auto max-w-screen-sm text-center lg:mb-16 mb-8'>
            <h2 class='mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold  text-gray-600 '>
              Justforyou's Couples
            </h2>
            <p class='font-light text-gray-500 sm:text-xl  '>
              Pasangan yang berbahagia bersama kami
            </p>
          </div>
          <div class='grid gap-8 lg:grid-cols-3'>
            <div class='flex p-6 bg-gray-200 rounded-lg border border-gray-200 shadow-md    '>
              <ImageIcon
                sx={{
                  fontSize: '12em',
                  color: 'grey',
                  opacity: '0.5',
                  margin: 'auto',
                }}
              />
            </div>
            <div class='flex p-6 bg-gray-200 rounded-lg border border-gray-200 shadow-md    '>
              <ImageIcon
                sx={{
                  fontSize: '12em',
                  color: 'grey',
                  opacity: '0.5',
                  margin: 'auto',
                }}
              />
            </div>
            <div class='flex p-6 bg-gray-200 rounded-lg border border-gray-200 shadow-md    '>
              <ImageIcon
                sx={{
                  fontSize: '12em',
                  color: 'grey',
                  opacity: '0.5',
                  margin: 'auto',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {deviceType === 'mobile' || deviceType === 'tablet' ? (
        <>
          <section class='bg-white   '>
            <div class='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'>
              <div class='mx-auto max-w-screen-md text-center mb-0 lg:mb-12'>
                <h2 class='mb-1 text-4xl tracking-tight font-extrabold text-gray-600 '>
                  Temukan Paket Terbaikmu
                </h2>
              </div>
            </div>
          </section>
          <Swiper
            initialSlide={1}
            slidesPerView={'auto'}
            centeredSlides={true}
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            style={{
              maxWidth: '100vw',
              height: '100%',
              position: 'relative',
              justifyContent: 'space-between',
              marginBottom: '4rem',
            }}
            // className='mySwiper'
          >
            <SwiperSlide
              style={{
                width: '75%',
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white',
              }}
            >
              <div class='flex flex-col p-6 mb-10 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow -600 xl:p-8  '>
                <h3 class='mb-4 text-2xl font-semibold'>Bronze</h3>
                <p class='font-light text-gray-500 sm:text-lg '>
                  Best option for personal use & for your next project.
                </p>
                <div class='flex justify-center items-baseline my-8'>
                  <span class='mr-2 text-5xl font-extrabold'>IDR 49K</span>
                  <span class='text-gray-500 '>/month</span>
                </div>

                <ul role='list' class='mb-8 space-y-4 text-left'>
                  <li class='flex items-center space-x-3'>
                    <svg
                      class='flex-shrink-0 w-5 h-5 text-green-500 '
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                        clip-rule='evenodd'
                      ></path>
                    </svg>
                    <span>Individual configuration</span>
                  </li>
                  <li class='flex items-center space-x-3'>
                    <svg
                      class='flex-shrink-0 w-5 h-5 text-green-500 '
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                        clip-rule='evenodd'
                      ></path>
                    </svg>
                    <span>No setup, or hidden fees</span>
                  </li>
                  <li class='flex items-center space-x-3'>
                    <svg
                      class='flex-shrink-0 w-5 h-5 text-green-500 '
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                        clip-rule='evenodd'
                      ></path>
                    </svg>
                    <span>
                      Team size: <span class='font-semibold'>1 developer</span>
                    </span>
                  </li>
                  <li class='flex items-center space-x-3'>
                    <svg
                      class='flex-shrink-0 w-5 h-5 text-green-500 '
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                        clip-rule='evenodd'
                      ></path>
                    </svg>
                    <span>
                      Premium support:{' '}
                      <span class='font-semibold'>6 months</span>
                    </span>
                  </li>
                  <li class='flex items-center space-x-3'>
                    <svg
                      class='flex-shrink-0 w-5 h-5 text-green-500 '
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                        clip-rule='evenodd'
                      ></path>
                    </svg>
                    <span>
                      Free updates: <span class='font-semibold'>6 months</span>
                    </span>
                  </li>
                </ul>
                <a
                  href='#'
                  class='text-white bg-green-800 opacity-70 hover:text-green-800 hover:bg-white font-medium rounded-lg text-sm px-5 py-2.5 text-center'
                >
                  Pilih
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide
              style={{
                width: '75%',
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white',
              }}
              slot='container-start'
            >
              <div class='flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow -600 xl:p-8  '>
                <h3 class='mb-4 text-2xl font-semibold'>Bronze</h3>
                <p class='font-light text-gray-500 sm:text-lg '>
                  Best option for personal use & for your next project.
                </p>
                <div class='flex justify-center items-baseline my-8'>
                  <span class='mr-2 text-5xl font-extrabold'>IDR 49K</span>
                  <span class='text-gray-500 '>/month</span>
                </div>

                <ul role='list' class='mb-8 space-y-4 text-left'>
                  <li class='flex items-center space-x-3'>
                    <svg
                      class='flex-shrink-0 w-5 h-5 text-green-500 '
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                        clip-rule='evenodd'
                      ></path>
                    </svg>
                    <span>Individual configuration</span>
                  </li>
                  <li class='flex items-center space-x-3'>
                    <svg
                      class='flex-shrink-0 w-5 h-5 text-green-500 '
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                        clip-rule='evenodd'
                      ></path>
                    </svg>
                    <span>No setup, or hidden fees</span>
                  </li>
                  <li class='flex items-center space-x-3'>
                    <svg
                      class='flex-shrink-0 w-5 h-5 text-green-500 '
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                        clip-rule='evenodd'
                      ></path>
                    </svg>
                    <span>
                      Team size: <span class='font-semibold'>1 developer</span>
                    </span>
                  </li>
                  <li class='flex items-center space-x-3'>
                    <svg
                      class='flex-shrink-0 w-5 h-5 text-green-500 '
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                        clip-rule='evenodd'
                      ></path>
                    </svg>
                    <span>
                      Premium support:{' '}
                      <span class='font-semibold'>6 months</span>
                    </span>
                  </li>
                  <li class='flex items-center space-x-3'>
                    <svg
                      class='flex-shrink-0 w-5 h-5 text-green-500 '
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                        clip-rule='evenodd'
                      ></path>
                    </svg>
                    <span>
                      Free updates: <span class='font-semibold'>6 months</span>
                    </span>
                  </li>
                </ul>
                <a
                  href='#'
                  class='text-white bg-green-800 opacity-70 hover:text-green-800 hover:bg-white font-medium rounded-lg text-sm px-5 py-2.5 text-center'
                >
                  Pilih
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide
              style={{
                width: '75%',
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white',
              }}
            >
              <div class='flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow -600 xl:p-8  '>
                <h3 class='mb-4 text-2xl font-semibold'>Bronze</h3>
                <p class='font-light text-gray-500 sm:text-lg '>
                  Best option for personal use & for your next project.
                </p>
                <div class='flex justify-center items-baseline my-8'>
                  <span class='mr-2 text-5xl font-extrabold'>IDR 49K</span>
                  <span class='text-gray-500 '>/month</span>
                </div>

                <ul role='list' class='mb-8 space-y-4 text-left'>
                  <li class='flex items-center space-x-3'>
                    <svg
                      class='flex-shrink-0 w-5 h-5 text-green-500 '
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                        clip-rule='evenodd'
                      ></path>
                    </svg>
                    <span>Individual configuration</span>
                  </li>
                  <li class='flex items-center space-x-3'>
                    <svg
                      class='flex-shrink-0 w-5 h-5 text-green-500 '
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                        clip-rule='evenodd'
                      ></path>
                    </svg>
                    <span>No setup, or hidden fees</span>
                  </li>
                  <li class='flex items-center space-x-3'>
                    <svg
                      class='flex-shrink-0 w-5 h-5 text-green-500 '
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                        clip-rule='evenodd'
                      ></path>
                    </svg>
                    <span>
                      Team size: <span class='font-semibold'>1 developer</span>
                    </span>
                  </li>
                  <li class='flex items-center space-x-3'>
                    <svg
                      class='flex-shrink-0 w-5 h-5 text-green-500 '
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                        clip-rule='evenodd'
                      ></path>
                    </svg>
                    <span>
                      Premium support:{' '}
                      <span class='font-semibold'>6 months</span>
                    </span>
                  </li>
                  <li class='flex items-center space-x-3'>
                    <svg
                      class='flex-shrink-0 w-5 h-5 text-green-500 '
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                        clip-rule='evenodd'
                      ></path>
                    </svg>
                    <span>
                      Free updates: <span class='font-semibold'>6 months</span>
                    </span>
                  </li>
                </ul>
                <a
                  href='#'
                  class='text-white bg-green-800 opacity-70 hover:text-green-800 hover:bg-white font-medium rounded-lg text-sm px-5 py-2.5 text-center'
                >
                  Pilih
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
        </>
      ) : (
        <section class='bg-white  min-h-screen '>
          <div class='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6'>
            <div class='mx-auto max-w-screen-md text-center mb-8 lg:mb-12'>
              <h2 class='mb-4 text-4xl tracking-tight font-extrabold text-gray-600 '>
                Temukan Paket Terbaikmu
              </h2>
              {/* <p class='mb-5 font-light text-gray-500 sm:text-xl '>
              Here at Flowbite we focus on markets where technology, innovation,
              and capital can unlock long-term value and drive economic growth.
            </p> */}
            </div>
            <div class='space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0'>
              <div class='flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow -600 xl:p-8  '>
                <h3 class='mb-4 text-2xl font-semibold'>Bronze</h3>
                <p class='font-light text-gray-500 sm:text-lg '>
                  Best option for personal use & for your next project.
                </p>
                <div class='flex justify-center items-baseline my-8'>
                  <span class='mr-2 text-5xl font-extrabold'>IDR 49K</span>
                  <span class='text-gray-500 '>/month</span>
                </div>

                <ul role='list' class='mb-8 space-y-4 text-left'>
                  <li class='flex items-center space-x-3'>
                    <svg
                      class='flex-shrink-0 w-5 h-5 text-green-500 '
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                        clip-rule='evenodd'
                      ></path>
                    </svg>
                    <span>Individual configuration</span>
                  </li>
                  <li class='flex items-center space-x-3'>
                    <svg
                      class='flex-shrink-0 w-5 h-5 text-green-500 '
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                        clip-rule='evenodd'
                      ></path>
                    </svg>
                    <span>No setup, or hidden fees</span>
                  </li>
                  <li class='flex items-center space-x-3'>
                    <svg
                      class='flex-shrink-0 w-5 h-5 text-green-500 '
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                        clip-rule='evenodd'
                      ></path>
                    </svg>
                    <span>
                      Team size: <span class='font-semibold'>1 developer</span>
                    </span>
                  </li>
                  <li class='flex items-center space-x-3'>
                    <svg
                      class='flex-shrink-0 w-5 h-5 text-green-500 '
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                        clip-rule='evenodd'
                      ></path>
                    </svg>
                    <span>
                      Premium support:{' '}
                      <span class='font-semibold'>6 months</span>
                    </span>
                  </li>
                  <li class='flex items-center space-x-3'>
                    <svg
                      class='flex-shrink-0 w-5 h-5 text-green-500 '
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                        clip-rule='evenodd'
                      ></path>
                    </svg>
                    <span>
                      Free updates: <span class='font-semibold'>6 months</span>
                    </span>
                  </li>
                </ul>
                <a
                  href='#'
                  class='text-white bg-blue-800  hover:text-blue-800 hover:bg-white font-medium rounded-lg text-sm px-5 py-2.5 text-center'
                >
                  Pilih
                </a>
              </div>

              <div class='flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow -600 xl:p-8 relative '>
                <div class='absolute top-0 right-0 bg-red-500 text-white text-xs font-semibold py-1 px-2 rounded-bl-lg'>
                  Discount
                </div>

                <h3 class='mb-4 text-2xl font-semibold'>Silver</h3>
                <p class='font-light text-gray-500 sm:text-lg '>
                  Relevant for multiple users, extended & premium support.
                </p>

                <div class='flex justify-center items-baseline mt-4'>
                  <span class='mr-2 text-5xl font-extrabold'>49.000</span>
                  <span class='text-gray-500 '>/month</span>
                </div>
                <div class='flex justify-center items-baseline mt-1  mb-6 '>
                  <span class='text-gray-500 mr-2  font-extrabold inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-500 text-white'>
                    Discount
                  </span>
                  <span class='text-gray-500  mr-2  font-extrabold line-through'>
                    89.000
                  </span>
                </div>

                <ul role='list' class='mb-8 space-y-4 text-left'>
                  <li class='flex items-center space-x-3'>
                    <svg
                      class='flex-shrink-0 w-5 h-5 text-green-500 '
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                        clip-rule='evenodd'
                      ></path>
                    </svg>
                    <span>Individual configuration</span>
                  </li>
                  <li class='flex items-center space-x-3'>
                    <svg
                      class='flex-shrink-0 w-5 h-5 text-green-500 '
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                        clip-rule='evenodd'
                      ></path>
                    </svg>
                    <span>No setup, or hidden fees</span>
                  </li>
                  <li class='flex items-center space-x-3'>
                    <svg
                      class='flex-shrink-0 w-5 h-5 text-green-500 '
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                        clip-rule='evenodd'
                      ></path>
                    </svg>
                    <span>
                      Team size:{' '}
                      <span class='font-semibold'>10 developers</span>
                    </span>
                  </li>
                  <li class='flex items-center space-x-3'>
                    <svg
                      class='flex-shrink-0 w-5 h-5 text-green-500 '
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                        clip-rule='evenodd'
                      ></path>
                    </svg>
                    <span>
                      Premium support:{' '}
                      <span class='font-semibold'>24 months</span>
                    </span>
                  </li>
                  <li class='flex items-center space-x-3'>
                    <svg
                      class='flex-shrink-0 w-5 h-5 text-green-500 '
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                        clip-rule='evenodd'
                      ></path>
                    </svg>
                    <span>
                      Free updates: <span class='font-semibold'>24 months</span>
                    </span>
                  </li>
                </ul>
                <a
                  href='#'
                  class='text-white bg-blue-800  hover:text-blue-800 hover:bg-white font-medium rounded-lg text-sm px-5 py-2.5 text-center'
                >
                  Pilih
                </a>
              </div>

              <div class='flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow -600 xl:p-8  '>
                <h3 class='mb-4 text-2xl font-semibold'>Gold</h3>
                <p class='font-light text-gray-500 sm:text-lg '>
                  Best for large scale uses and extended redistribution rights.
                </p>
                <div class='flex justify-center items-baseline mt-4 text-gray-500'>
                  <span class='mr-2  font-extrabold line-through'>Rp. 49K</span>
                  <span class='mr-2  font-extrabold line-through'>Rp. 49K</span>
                </div>
                <div class='flex justify-center items-baseline mb-8'>
                  <span class='mr-2 text-5xl font-extrabold '>Rp. 49K</span>
                  <span class='text-gray-500 '>/month</span>
                </div>

                <ul role='list' class='mb-8 space-y-4 text-left'>
                  <li class='flex items-center space-x-3'>
                    <svg
                      class='flex-shrink-0 w-5 h-5 text-green-500 '
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                        clip-rule='evenodd'
                      ></path>
                    </svg>
                    <span>Individual configuration</span>
                  </li>
                  <li class='flex items-center space-x-3'>
                    <svg
                      class='flex-shrink-0 w-5 h-5 text-green-500 '
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                        clip-rule='evenodd'
                      ></path>
                    </svg>
                    <span>No setup, or hidden fees</span>
                  </li>
                  <li class='flex items-center space-x-3'>
                    <svg
                      class='flex-shrink-0 w-5 h-5 text-green-500 '
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                        clip-rule='evenodd'
                      ></path>
                    </svg>
                    <span>
                      Team size:{' '}
                      <span class='font-semibold'>100+ developers</span>
                    </span>
                  </li>
                  <li class='flex items-center space-x-3'>
                    <svg
                      class='flex-shrink-0 w-5 h-5 text-green-500 '
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                        clip-rule='evenodd'
                      ></path>
                    </svg>
                    <span>
                      Premium support:{' '}
                      <span class='font-semibold'>36 months</span>
                    </span>
                  </li>
                  <li class='flex items-center space-x-3'>
                    <svg
                      class='flex-shrink-0 w-5 h-5 text-green-500 '
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fill-rule='evenodd'
                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                        clip-rule='evenodd'
                      ></path>
                    </svg>
                    <span>
                      Free updates: <span class='font-semibold'>36 months</span>
                    </span>
                  </li>
                </ul>
                <a
                  href='#'
                  class='text-white bg-blue-800  hover:text-blue-800 hover:bg-white font-medium rounded-lg text-sm px-5 py-2.5 text-center '
                >
                  Pilih
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className='bg-white flex flex-col'>
        <div class='mx-auto max-w-screen-md text-center mb-0 flex'>
          <h2 class='text-4xl tracking-tight font-extrabold text-gray-600 m-auto'>
            Tentang Kami
          </h2>
        </div>
        <div className='grid max-w-screen-xl px-4 py-8  mx-auto my-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12'>
          <div className='  py-10 lg:col-span-5 flex  '>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15900.139300098195!2d105.20778015!3d-4.933825949999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sid!4v1703316475404!5m2!1sen!2sid'
              style={{
                width: '100%',
                height: '300px',
              }}
            ></iframe>
          </div>
          <div className='mt-6 flex flex-col gap-y-9 md:px-6 px-0 py-10 lg:mt-0 mr-auto place-self-center lg:col-span-7 text-gray-600'>
            <p className='max-w-2xlfont-light text-gray-500  md:text-lg lg:text-xl '>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <div class='flex gap-x-10 space-x-1 '>
              <a
                href='#'
                data-tooltip-target='tooltip-facebook'
                class='w-10 h-10 rounded-full ring-2 ring-gray-300 inline-flex justify-center  text-gray-500 rounded-lg cursor-pointer dark:text-gray-400 dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600'
              >
                <svg
                  class='w-6 h-6 m-auto'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    fill-rule='evenodd'
                    d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
                    clip-rule='evenodd'
                  />
                </svg>
                <span class='sr-only'>Facebook</span>
              </a>
              <div
                id='tooltip-facebook'
                role='tooltip'
                class='inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700'
              >
                Like us on Facebook
                <div class='tooltip-arrow' data-popper-arrow></div>
              </div>
              <a
                href='#'
                data-tooltip-target='tooltip-twitter'
                class='inline-flex justify-center w-10 h-10 rounded-full ring-2 ring-gray-300  text-gray-500 rounded-lg cursor-pointer dark:text-gray-400 dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600'
              >
                <svg
                  class='w-6 h-6 m-auto'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' />
                </svg>
                <span class='sr-only'>Twitter</span>
              </a>
              <div
                id='tooltip-twitter'
                role='tooltip'
                class='inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700'
              >
                Follow us on Twitter
                <div class='tooltip-arrow' data-popper-arrow></div>
              </div>
              <a
                href='#'
                data-tooltip-target='tooltip-github'
                class='inline-flex justify-center w-10 h-10 rounded-full ring-2 ring-gray-300  text-gray-500 rounded-lg cursor-pointer dark:text-gray-400 dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600'
              >
                <svg
                  class='w-6 h-6 m-auto'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    fill-rule='evenodd'
                    d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
                    clip-rule='evenodd'
                  />
                </svg>
                <span class='sr-only'>Github</span>
              </a>
              <div
                id='tooltip-github'
                role='tooltip'
                class='inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700'
              >
                Star us on GitHub
                <div class='tooltip-arrow' data-popper-arrow></div>
              </div>
              <a
                href='#'
                data-tooltip-target='tooltip-dribbble'
                class='inline-flex justify-center w-10 h-10 rounded-full ring-2 ring-gray-300  text-gray-500 rounded-lg cursor-pointer dark:text-gray-400 dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600'
              >
                <svg
                  class='w-6 h-6 m-auto'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    fill-rule='evenodd'
                    d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z'
                    clip-rule='evenodd'
                  />
                </svg>
                <span class='sr-only'>Dribbble</span>
              </a>
              <div
                id='tooltip-dribbble'
                role='tooltip'
                class='inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700'
              >
                Follow us on Dribbble
                <div class='tooltip-arrow' data-popper-arrow></div>
              </div>
            </div>
            {/* <a
              href='#'
              className='text-white bg-green-800 opacity-70 hover:text-green-800 hover:bg-white inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center  rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 '
            >
              Pelajari Selengkapnya
              <svg
                className='w-5 h-5 ml-2 -mr-1'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                  clip-rule='evenodd'
                ></path>
              </svg>
            </a> */}
            <div className='w-full flex flex-col gap-y-4'>
              <p className='max-w-2xlfont-light text-gray-500  md:text-lg lg:text-xl '>
                Phone: +628984153117
              </p>
              <p className='max-w-2xlfont-light text-gray-500  md:text-lg lg:text-xl '>
                Email : justforyou@mail.com
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer class='bg-white  sm:flex sm:items-center md:justify-between justify-center p-4 sm:p-6 xl:p-8  '>
        <p class='mb-4 text-sm text-center text-gray-500  sm:mb-0'>
          &copy; 2023-2026{' '}
          <a href='#' class='hover:underline' target='_blank' rel='noreferrer'>
            Justforyou.id1
          </a>
          . All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
