import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import FormIstri from './FormIstri';
import FormSuami from './FormSuami';
import FormAlamat from './FormAlamat';
import FormGaleri from './FormGaleri';

const Form = (props) => {
  const { step, steps, setStep } = props;
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    setValue,
  } = useForm();

  const [formState, setFormState] = useState({
    nama_lengkap_suami: '',
    nama_panggilan_suami: '',
    nama_ayah_suami: '',
    nama_ibu_suami: '',
    no_hp_suami: '',
    anak_ke_suami: '',
    pas_foto_suami: '',
    nama_file_pas_foto_suami: '',
    nama_lengkap_istri: '',
    nama_panggilan_istri: '',
    nama_ayah_istri: '',
    nama_ibu_istri: '',
    no_hp_istri: '',
    anak_ke_istri: '',
    pas_foto_istri: '',
    nama_file_pas_foto_istri: '',
    jalan_akad: '',
    rt_akad: '',
    rw_akad: '',
    kode_provinsi_akad: '',
    kode_kabupaten_akad: '',
    kode_kecamatan_akad: '',
    kode_kelurahan_akad: '',
    kode_pos_akad: '',
    jalan_resepsi: '',
    rt_resepsi: '',
    rw_resepsi: '',
    kode_provinsi_resepsi: '',
    kode_kabupaten_resepsi: '',
    kode_kecamatan_resepsi: '',
    kode_kelurahan_resepsi: '',
    kode_pos_resepsi: '',
  });
  function handleInputChange(event) {
    if (
      event.type === 'keydown' &&
      (event.key === 'ArrowUp' || event.key === 'ArrowDown')
    ) {
      event.preventDefault();
    }
    const { name, value } = event.target;
    setValue(name, value);
    setFormState({
      ...formState,
      // [name]: titleCase(value),
      [name]: value.slice(0, 50),
    });
  }
  const onSubmit = async (data, state) => {
    console.log('enak guys');
    // await dispatch(postSuratKeteranganLahir(state));
  };
  const onSubmitHandler = (event) => {
    console.log('enak guys');
    handleSubmit((data) => onSubmit(data, formState))(event);
  };
  const formulirs = [
    {
      id: 1,
      label: 'Formulir Suami',
      form: (
        <FormSuami
          step={step}
          steps={steps}
          formState={formState}
          setFormState={setFormState}
          handleInputChange={handleInputChange}
          register={register}
          setValue={setValue}
        />
      ),
    },
    {
      id: 2,
      label: 'Formulir Istri',
      form: (
        <FormIstri
          step={step}
          steps={steps}
          formState={formState}
          setFormState={setFormState}
          handleInputChange={handleInputChange}
          register={register}
          setValue={setValue}
        />
      ),
    },
    {
      id: 3,
      label: 'Formulir Alamat',
      form: (
        <FormAlamat
          step={step}
          steps={steps}
          formState={formState}
          setFormState={setFormState}
          handleInputChange={handleInputChange}
          register={register}
          setValue={setValue}
        />
      ),
    },
    {
      id: 4,
      label: 'Formulir Galeri',
      form: (
        <FormGaleri
          step={step}
          steps={steps}
          formState={formState}
          setFormState={setFormState}
          handleInputChange={handleInputChange}
          register={register}
          setValue={setValue}
        />
      ),
    },
  ];

  console.log(formState, 'formState');
  return (
    <>
      <form key={1} onSubmit={onSubmitHandler}>
        {formulirs.map((item) => (
          <>{step.position === item.id ? item.form : ''}</>
        ))}
      </form>
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
              // type='submit'
              onClick={() => {
                setStep((prevState) => ({
                  ...prevState,
                  start: false,
                  finish: step.position >= 5 ? true : false,
                  position: step.position === 6 ? 6 : step.position + 1,
                }));
                onSubmitHandler();
              }}
            >
              Simpan
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
                  position: step.position === 6 ? 6 : step.position + 1,
                }));
              }}
            >
              Selanjutnya
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Form;
