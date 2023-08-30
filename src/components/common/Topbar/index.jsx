import React, { useState } from 'react';
import oncologyLogo from '../../../assets/oncologyLogo.png';
import { BsPencilSquare } from 'react-icons/bs';
import { FiUser } from 'react-icons/fi';
import { AiOutlineTeam } from 'react-icons/ai';
import { LuScroll } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';
import ProfilePopup from '../ProfilePopup';
import { slide as Menu } from 'react-burger-menu';

import './index.scss';

export default function Topbar() {
  const navigate = useNavigate();
  const [popupVisible, setPopupVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const displayPopup = () => {
    setPopupVisible(!popupVisible);
  };
  window.addEventListener('resize', function () {
    let win = this;
    setWindowWidth(win.innerWidth);
  });
  return (
    <div className="topbar-wrapper">
      <div className="topbar-main">
        <img
          onClick={() => {
            navigate('/home');
          }}
          className="oncology-logo"
          src={oncologyLogo}
          alt="oncologyLogo"
        />

        {windowWidth < 830 ? (
          <Menu right width={'50%'}>
            <div
              className="menu-item"
              id="topbar-text-element"
              onClick={() => {
                navigate('/course?value=5-course');
              }}
            >
              <p className="roman-number">V</p>
              <p>Course</p>
            </div>
            <div
              className="menu-item"
              id="topbar-text-element"
              onClick={() => {
                navigate('/course?value=6-course');
              }}
            >
              <p className="roman-number">VI</p>
              <p>Course</p>
            </div>
            <div
              className="menu-item"
              id="topbar-icon-text-element"
              onClick={() => {
                navigate('/history');
              }}
            >
              <LuScroll size={25} />
              <p>History</p>
            </div>
            <div
              className="menu-item"
              id="topbar-icon-text-element"
              onClick={() => {
                navigate('/teachers');
              }}
            >
              <AiOutlineTeam size={25} />
              <p>Our Team</p>
            </div>
            <a
              className="menu-item"
              id="topbar-icon-text-element"
              href="https://forms.gle/VNG5ztgTks21ZFE48"
              target="_blank"
            >
              <BsPencilSquare size={25} />
              <p>Rework</p>
            </a>
            <div
              className="menu-item"
              id="topbar-icon-text-element"
              onClick={displayPopup}
            >
              <FiUser size={25} />
              <div className="popup-anchor">
                <p>Profile</p>
                {popupVisible ? <ProfilePopup /> : <></>}
              </div>
            </div>
          </Menu>
        ) : (
          <>
            <div
              className="menu-item"
              id="topbar-text-element"
              onClick={() => {
                navigate('/course?value=5-course');
              }}
            >
              <p className="roman-number">V</p>
              <p>Course</p>
            </div>
            <div
              className="menu-item"
              id="topbar-text-element"
              onClick={() => {
                navigate('/course?value=6-course');
              }}
            >
              <p className="roman-number">VI</p>
              <p>Course</p>
            </div>
            <div
              className="menu-item"
              id="topbar-icon-text-element"
              onClick={() => {
                navigate('/history');
              }}
            >
              <LuScroll size={25} />
              <p>History</p>
            </div>
            <div
              className="menu-item"
              id="topbar-icon-text-element"
              onClick={() => {
                navigate('/teachers');
              }}
            >
              <AiOutlineTeam size={25} />
              <p>Our Team</p>
            </div>
            <a
              className="menu-item"
              id="topbar-icon-text-element"
              href="https://forms.gle/VNG5ztgTks21ZFE48"
              target="_blank"
            >
              <BsPencilSquare size={25} />
              <p>Rework</p>
            </a>
            <div
              className="menu-item"
              id="topbar-icon-text-element"
              onClick={displayPopup}
            >
              <FiUser size={25} />
              <div>
                <p className="popup-anchor">Profile</p>
                {popupVisible ? (
                  <div className="popup-position">
                    <ProfilePopup />
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
