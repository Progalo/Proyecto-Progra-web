/* eslint-disable no-unused-vars */
import React from 'react';
import Header from './components/headers';
import Footer from './components/Footer';
import AppRouter from './routes/routes'; 
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <AppRouter /> 
      <Footer />
    </>
  );
}

export default App;
