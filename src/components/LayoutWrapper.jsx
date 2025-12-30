import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const LayoutWrapper = ({ children }) => {
  const location = useLocation();

  // Define logic to hide Header/Footer
  // .startsWith('/admin') handles /admin/login and any future admin pages
  const isAdminPath = location.pathname.startsWith('/admin');

  return (
    <>
      {!isAdminPath && <Header />}
      <main>{children}</main>
      {!isAdminPath && <Footer />}
    </>
  );
};

export default LayoutWrapper;