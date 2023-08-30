import React from 'react';
import Teachers from '../Pages/Teachers';
import Topbar from '../components/common/Topbar';
import Footer from '../components/common/Footer';

export default function TeachersLayout() {
  return (
    <div>
      <Topbar />
      <Teachers />
      <Footer />
    </div>
  );
}
