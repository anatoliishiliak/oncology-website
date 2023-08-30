import React from 'react';
import './index.scss';
import { useNavigate } from 'react-router-dom';
import { HomeHistoryAPI } from '../../../api/HomeInfoAPI';

export default function HomeHistory() {
  let navigate = useNavigate();
  return (
    <div className="history-wrapper" onClick={() => navigate('/history')}>
      <div className="history-box">
        <h1>{HomeHistoryAPI.header}</h1>
        <p>
          {HomeHistoryAPI.text}
          <span> {HomeHistoryAPI.text2}</span>
        </p>
      </div>
      <img
        className="home-img"
        src="https://cdn.pixabay.com/photo/2019/02/08/18/53/ambulance-3983749_1280.jpg"
        alt="doctor-picture"
      />
    </div>
  );
}
//[{header:"Here You can learn history of our Department"}]
