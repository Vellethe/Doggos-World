import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import '../../CSS/Styles.css';
const MasterLayout = ({ children}) => {
  return (
    <>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
}

export default MasterLayout