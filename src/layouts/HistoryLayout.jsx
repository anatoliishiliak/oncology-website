import React from 'react';
import History from '../Pages/History';
import Topbar from '../components/common/Topbar';
import Footer from '../components/common/Footer';

export default function HistoryLayout() {
  return (
    <div>
      <Topbar />
      <History />
      <Footer />
    </div>
  );
}
