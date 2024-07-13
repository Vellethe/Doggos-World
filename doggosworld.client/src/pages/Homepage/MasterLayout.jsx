import React from 'react';
import Navbar from '../../components/Navbar';
import MainContent from './MainContent';
import Footer from '../../components/Footer';
import '../../CSS/Styles.css';

const MasterLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <MainContent />
      </main>
      <Footer />
    </>
  );
}

export default MasterLayout