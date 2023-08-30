import React from 'react';
import './index.scss';
import { HomeInfoAPI } from '../../../api/HomeInfoAPI';

export default function HomeInfo() {
  return (
    <div className="info-wrapper">
      <img
        className="home-img"
        src="https://cdn.pixabay.com/photo/2019/05/07/22/12/doctor-4187242_1280.jpg"
        alt="doctor-picture"
      />
      <div className="info-box">
        <h1>{HomeInfoAPI.header}</h1>
        <p>{HomeInfoAPI.text}</p>
      </div>
    </div>
  );
}
