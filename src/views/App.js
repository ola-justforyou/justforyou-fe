import '../App.css';
// import { useEffect } from 'react';
import { React, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getWaybill } from '../actions';
import LandingPage from './LandingPage';
import Navbar from '../components/Navbar';
function App(props) {
  const { state, getWaybill } = props;
  const getDataWaybill = async () => {
    await getWaybill();
  };
  useEffect(() => {
    getDataWaybill();
  }, []);
  console.log(state, 'state');
  const rajaongkirApiKey = process.env.REACT_APP_RAJAONKIR_API_KEY;
  console.log(rajaongkirApiKey);
  return (
    <div className='relative max-w-screen min-h-screen flex flex-col '>
      <Navbar />
      <div className='m-auto'>
        <LandingPage />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  state: state.waybill.data,
});
export default connect(mapStateToProps, {
  getWaybill,
})(App);
