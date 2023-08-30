import React from 'react';
import Home from '../Pages/Home';
import Topbar from '../components/common/Topbar';
import Footer from '../components/common/Footer';

export default function HomeLayout() {
  return (
    <div>
      <Topbar />
      <Home />
      <Footer />
    </div>
  );
}
