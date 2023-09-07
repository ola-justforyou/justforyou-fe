import React from 'react';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import DoneIcon from '@mui/icons-material/Done';

import './style.css';

const Stepper = (props) => {
  const { step, setStep, steps } = props;

  console.log(steps.id);
  return (
    <div class='flex items-center'>
      {steps.map((item, key) => (
        <>
          <div
            class={`${
              step.position === item.id ? ' text-white' : ' text-teal-600'
            } 'flex items-center relative`}
            id={key}
          >
            <div
              class={`${
                step.position === item.id
                  ? 'progress-bullet-active'
                  : step.position > item.id
                  ? 'progress-bullet-done'
                  : 'progress-bullet'
              } `}
              // triger click untuk ke posisi formulir
              // onClick={() => {
              //   setStep((prevState) => ({
              //     ...prevState,
              //     position: item.id,
              //   }));
              // }}
            >
              {step.position > item.id ? (
                <DoneIcon
                  style={{ position: 'absolute', top: '10', left: '9' }}
                />
              ) : (
                item.icon
              )}
            </div>
            <div class='description text-teal-600'>{item.label}</div>
          </div>
          <div
            class={`${
              item.id === 5
                ? 'hidden'
                : step.position > item.id
                ? 'progress-bar-done'
                : 'progress-bar'
            } `}
          ></div>
        </>
      ))}
    </div>
  );
};

export default Stepper;
