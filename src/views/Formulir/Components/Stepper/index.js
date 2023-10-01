import React from 'react';
import DoneIcon from '@mui/icons-material/Done';

import './style.css';

const Stepper = (props) => {
  const { step, setStep, steps } = props;
  return (
    <div class='flex items-center'>
      {steps.map((item, key) => (
        <>
          <div
            class={`${
              step.position === key ? ' text-white' : ' text-teal-600'
            } 'flex items-center relative`}
            id={key}
            onClick={() => {
              if (key !== 0) {
                setStep((prevState) => ({
                  ...prevState,
                  start: false,
                  finish: key === steps.length - 1 ? true : false,
                  position: key,
                }));
              } else if (key === 0) {
                setStep((prevState) => ({
                  ...prevState,
                  start: true,
                  finish: false,
                  position: key,
                }));
              }
            }}
          >
            <div
              class={`${
                step.position === key
                  ? 'progress-bullet-active'
                  : step.position > key
                  ? 'progress-bullet-done'
                  : 'progress-bullet'
              } `}
              // triger click untuk ke posisi formulir
              // onClick={() => {
              //   setStep((prevState) => ({
              //     ...prevState,
              //     position: key,
              //   }));
              // }}
            >
              {step.position > key ? (
                <DoneIcon
                  style={{ position: 'absolute', top: '10', left: '9' }}
                />
              ) : (
                item.icon
              )}
            </div>
            <div class='description text-teal-600 hidden sm:block'>
              {item.label}
            </div>
          </div>
          <div
            class={`${
              key < step.position
                ? 'progress-bar-done'
                : key < steps.length - 1
                ? 'progress-bar'
                : 'hidden'
            } `}
          ></div>
        </>
      ))}
    </div>
  );
};

export default Stepper;
