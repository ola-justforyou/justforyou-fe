import React, { useState } from 'react';
import FormIstri from './FormIstri';
import FormSuami from './FormSuami';
import FormAlamat from './FormAlamat';
import FormGaleri from './FormGaleri';

const Form = (props) => {
  const { step, steps } = props;
  const [formState, setFormState] = useState({
    nama_lengkap_suami: '',
    nama_panggilan_suami: '',
    nama_ayah_suami: '',
    nama_ibu_suami: '',
    no_hp_suami: '',
    anak_ke_suami: '',
    nama_lengkap_istri: '',
    nama_panggilan_istri: '',
    nama_ayah_istri: '',
    nama_ibu_istri: '',
    no_hp_istri: '',
    anak_ke_istri: '',
  });
  function handleInputChange(event) {
    if (
      event.type === 'keydown' &&
      (event.key === 'ArrowUp' || event.key === 'ArrowDown')
    ) {
      event.preventDefault();
    }
    const { name, value } = event.target;

    setFormState({
      ...formState,
      // [name]: titleCase(value),
      [name]: value.slice(0, 50),
    });
  }
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
        />
      ),
    },
  ];

  console.log(formState, 'formState');
  return (
    <>
      <form action=''>
        {formulirs.map((item) => (
          <>{step.position === item.id ? item.form : ''}</>
        ))}
      </form>
    </>
  );
};

export default Form;
