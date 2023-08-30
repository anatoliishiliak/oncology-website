import React from 'react';
import { useNavigate } from 'react-router-dom';
import { onLogout } from '../../../api/AuthAPI';
import './index.scss';

export default function ProfilePopup() {
  let navigate = useNavigate();
  return (
    <div className="popup-card" onClick={onLogout}>
      <p>Logout</p>
    </div>
  );
}
