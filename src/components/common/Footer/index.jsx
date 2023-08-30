import React from 'react';
import './index.scss';
import { FiTwitter } from 'react-icons/fi';
import {
  AiOutlineFacebook,
  AiOutlineLinkedin,
  AiOutlineInstagram,
} from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="footer-wrapper">
      <div className="footer-box">
        <ul className="social-icon">
          <li className="social-icon__item">
            <a
              className="social-icon__link"
              href="https://facebook.com"
              target="_blank"
            >
              <AiOutlineFacebook name="logo-facebook" />
            </a>
          </li>
          <li className="social-icon__item">
            <a
              className="social-icon__link"
              href="https://twitter.com"
              target="_blank"
            >
              <FiTwitter name="logo-twitter" />
            </a>
          </li>
          <li className="social-icon__item">
            <a
              className="social-icon__link"
              href="https://linkedin.com"
              target="_blank"
            >
              <AiOutlineLinkedin name="logo-linkedin" />
            </a>
          </li>
          <li className="social-icon__item">
            <a
              className="social-icon__link"
              href="https://instagram.com"
              target="_blank"
            >
              <AiOutlineInstagram name="logo-instagram" />
            </a>
          </li>
        </ul>
        <ul className="menu">
          <li className="menu__item">
            <a
              className="menu__link"
              href="#"
              onClick={() => {
                navigate('/home');
              }}
            >
              Home
            </a>
          </li>
          <li className="menu__item">
            <a
              className="menu__link"
              href="#"
              onClick={() => navigate('/history')}
            >
              About
            </a>
          </li>

          <li className="menu__item">
            <a
              className="menu__link"
              href="#"
              onClick={() => navigate('/teachers')}
            >
              Team
            </a>
          </li>
          <li className="menu__item">
            <a
              className="menu__link"
              href="https://forms.gle/VNG5ztgTks21ZFE48"
              target="_blank"
            >
              Contact
            </a>
          </li>
        </ul>
        <p>&copy;2023 Anatolii Shiliak | All Rights Reserved</p>
      </div>
    </footer>
  );
}
