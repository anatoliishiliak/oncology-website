import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HomeTeachersAPI } from '../../../api/HomeInfoAPI';

import './index.scss';

export default function HomeTeachers() {
  let navigate = useNavigate();
  return (
    <div className="teachers-wrapper" onClick={() => navigate('/teachers')}>
      <img
        className="home-img"
        src="https://cdn.pixabay.com/photo/2019/03/31/10/05/dna-4092762_1280.jpg"
        alt="doctor-picture"
      />
      <div className="teachers-box">
        <h1>{HomeTeachersAPI.header}</h1>
        <p>{HomeTeachersAPI.text}</p>
      </div>
    </div>
  );
}
