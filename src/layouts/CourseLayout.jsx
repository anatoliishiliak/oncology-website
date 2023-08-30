import React from 'react';
import Course from '../Pages/Course';
import Topbar from '../components/common/Topbar';
import { useLocation } from 'react-router-dom';
import Footer from '../components/common/Footer';

export default function CourseLayout() {
  const search = useLocation().search;
  const value = new URLSearchParams(search).get('value');
  return (
    <div>
      <Topbar />
      <Course value={value} />
      <Footer />
    </div>
  );
}
