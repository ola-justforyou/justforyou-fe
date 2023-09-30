import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Navbar from '../../components/Navbar';
import Stepper from './Components/Stepper';
import BoyIcon from '@mui/icons-material/Boy';
import GirlIcon from '@mui/icons-material/Girl';
import { MapPin, GalleryThumbnails, Image } from 'lucide-react';
import { connect } from 'react-redux';
import {
  getListProvinsi,
  getListKabupaten,
  getListKecamatan,
  getListKelurahan,
} from '../../actions/wilayahAction';
import FormIstri from '../Formulir/Components/Form/FormIstri';
import FormSuami from '../Formulir/Components/Form/FormSuami';
import FormAlamat from '../Formulir/Components/Form/FormAlamat';
import FormGaleri from '../Formulir/Components/Form/FormGaleri';
import limitString from '../../utils/helpers/string';

const Formulir = (props) => {
  const {
    getListProvinsi,
    getListKabupaten,
    getListKecamatan,
    getListKelurahan,
    listProvinsi,
    listKabupaten,
    listKecamatan,
    listKelurahan,
  } = props;
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
    setValue,
  } = useForm();
  const [step, setStep] = useState({
    start: true,
    finish: false,
    position: 1,
  });
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
    nama_jalan_akad: '',
    detail_alamat_akad: '',
    rt_akad: '',
    rw_akad: '',
    kode_provinsi_akad: '',
    kode_kabupaten_akad: '',
    kode_kecamatan_akad: '',
    kode_kelurahan_akad: '',
    kode_pos_akad: '',
    tanggal_akad: '',
    nama_jalan_resepsi: '',
    detail_alamat_resepsi: '',
    rt_resepsi: '',
    rw_resepsi: '',
    kode_provinsi_resepsi: '',
    kode_kabupaten_resepsi: '',
    kode_kecamatan_resepsi: '',
    kode_kelurahan_resepsi: '',
    kode_pos_resepsi: '',
    tanggal_resepsi: '',
    foto_landscape: '',
    foto_galeri_1: '',
    foto_galeri_2: '',
    foto_galeri_3: '',
    foto_galeri_4: '',
    foto_galeri_5: '',
    foto_potrait: '',
    nama_file_foto_landscape: '',
    nama_file_foto_galeri_1: '',
    nama_file_foto_galeri_2: '',
    nama_file_foto_galeri_3: '',
    nama_file_foto_galeri_4: '',
    nama_file_foto_galeri_5: '',
    nama_file_foto_potrait: '',
  });

  const [provinsiSelected, setProvinsiSelected] = useState('');
  const [kabupatenSelected, setKabupatenSelected] = useState('');
  const [kecamatanSelected, setKecamatanSelected] = useState('');
  const [isSameWithAkad, setSameWithAkad] = useState(false);
  const [selection, setSelection] = useState({
    provinsiSelectionAkad: [],
    provinsiSelectionResepsi: [],
    kabupatenSelectionAkad: [],
    kabupatenSelectionResepsi: [],
    kecamatanSelectionAkad: [],
    kecamatanSelectionResepsi: [],
    kelurahanSelectionAkad: [],
    kelurahanSelectionResepsi: [],
  });
  const onSubmit = async (data, state) => {
    console.log('enak guys');
    console.log('dsvdsenak guys');
    const allFormValues = getValues();
    console.log('Semua nilai input:', allFormValues);
    // await dispatch(postSuratKeteranganLahir(state));
  };
  const onSubmitHandler = (event) => {
    handleSubmit((data) => onSubmit(data, formState))(event);
  };

  const handleChangeImage = (file, properti, name) => {
    console.log(file, '-----', properti, '----', name);
    if (file.length !== 0) {
      setFormState({
        ...formState,
        [properti]: URL.createObjectURL(file),
        [name]: limitString(file?.name, 35),
      });
    }
  };

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
  const handleGetListProvinsi = async () => {
    await getListProvinsi();
  };
  const handleGetListKabupaten = async (id) => {
    await getListKabupaten(id);
  };
  const handleGetListKecamatan = async (id) => {
    await getListKecamatan(id);
  };
  const handleGetListKelurahan = async (id) => {
    await getListKelurahan(id);
  };
  const handleProvinsiChange = async (e) => {
    setProvinsiSelected(e.target.name);
    handleInputChange(e);
    handleGetListKabupaten(e.target.value);
  };
  const handleKabupatenChange = async (e) => {
    setKabupatenSelected(e.target.name);
    handleInputChange(e);
    handleGetListKecamatan(e.target.value);
  };
  const handleKecamatanChange = async (e) => {
    setKecamatanSelected(e.target.name);
    handleInputChange(e);
    handleGetListKelurahan(e.target.value);
  };
  const handleKelurahanChange = async (e) => {
    handleInputChange(e);
  };
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
  const formulirs = [
    {
      id: 1,
      label: 'Formulir Suami',
      form: (
        <FormSuami
          errors={errors}
          step={step}
          steps={steps}
          formState={formState}
          setFormState={setFormState}
          handleInputChange={handleInputChange}
          register={register}
          setValue={setValue}
          handleChangeImage={handleChangeImage}
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
          handleChangeImage={handleChangeImage}
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
          selection={selection}
          handleProvinsiChange={handleProvinsiChange}
          handleKabupatenChange={handleKabupatenChange}
          handleKecamatanChange={handleKecamatanChange}
          handleKelurahanChange={handleKelurahanChange}
          isSameWithAkad={isSameWithAkad}
          setSameWithAkad={setSameWithAkad}
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
          handleChangeImage={handleChangeImage}
        />
      ),
    },
  ];
  useEffect(() => {
    handleGetListProvinsi();
  }, []);
  useEffect(() => {
    setSelection((prevState) => ({
      ...prevState,
      provinsiSelectionAkad: listProvinsi,
      provinsiSelectionResepsi: listProvinsi,
    }));
  }, [listProvinsi]);
  useEffect(() => {
    if (
      listKabupaten !== null &&
      listKabupaten !== '' &&
      listKabupaten !== undefined &&
      listKabupaten.length
    ) {
      if (provinsiSelected === 'kode_provinsi_akad') {
        setSelection((prevState) => ({
          ...prevState,
          kabupatenSelectionAkad: listKabupaten?.sort((a, b) =>
            a.name.localeCompare(b.name)
          ),
        }));
      } else if (provinsiSelected === 'kode_provinsi_resepsi') {
        setSelection((prevState) => ({
          ...prevState,
          kabupatenSelectionResepsi: listKabupaten?.sort((a, b) =>
            a.name.localeCompare(b.name)
          ),
        }));
      }
    }
  }, [listKabupaten, provinsiSelected]);
  useEffect(() => {
    if (
      listKecamatan !== null &&
      listKecamatan !== '' &&
      listKecamatan !== undefined &&
      listKecamatan.length
    ) {
      if (kabupatenSelected === 'kode_kabupaten_akad') {
        setSelection((prevState) => ({
          ...prevState,
          kecamatanSelectionAkad: listKecamatan?.sort((a, b) =>
            a.name.localeCompare(b.name)
          ),
        }));
      } else if (kabupatenSelected === 'kode_kabupaten_resepsi') {
        setSelection((prevState) => ({
          ...prevState,
          kecamatanSelectionResepsi: listKecamatan?.sort((a, b) =>
            a.name.localeCompare(b.name)
          ),
        }));
      }
    }
  }, [listKecamatan, kabupatenSelected]);
  useEffect(() => {
    if (
      listKelurahan !== null &&
      listKelurahan !== '' &&
      listKelurahan !== undefined &&
      listKelurahan.length
    ) {
      if (kecamatanSelected === 'kode_kecamatan_akad') {
        setSelection((prevState) => ({
          ...prevState,
          kelurahanSelectionAkad: listKelurahan?.sort((a, b) =>
            a.name.localeCompare(b.name)
          ),
        }));
      } else if (kecamatanSelected === 'kode_kecamatan_resepsi') {
        setSelection((prevState) => ({
          ...prevState,
          kelurahanSelectionResepsi: listKelurahan?.sort((a, b) =>
            a.name.localeCompare(b.name)
          ),
        }));
      }
    }
  }, [listKelurahan, kecamatanSelected]);

  console.log(formState, 'formState');
  console.log(step?.position, 'posisi');
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
                            position:
                              step.position === 6 ? 6 : step.position + 1,
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
                            position:
                              step.position === 6 ? 6 : step.position + 1,
                          }));
                        }}
                      >
                        Selanjutnya
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

const mapStateToProps = (state) => ({
  listProvinsi: state.wilayah.data.provinsi,
  listKabupaten: state.wilayah.data.kabupaten,
  listKecamatan: state.wilayah.data.kecamatan,
  listKelurahan: state.wilayah.data.kelurahan,
  wilayahLoading: state.wilayah.data.loading,
  wilayahError: state.wilayah.data.error,
});
export default connect(mapStateToProps, {
  getListProvinsi,
  getListKabupaten,
  getListKecamatan,
  getListKelurahan,
})(Formulir);
