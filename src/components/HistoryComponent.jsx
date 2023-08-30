import React from 'react';
import ScrollToTop from '../helpers/scrollToTop';
import HistoryAPI from '../api/HistoryAPI.json';

import '../Sass/HistoryComponent.scss';

export default function HistoryComponent() {
  return (
    <div className="history-component-wrapper">
      <div className="history-component-box">
        <h1>{HistoryAPI.header}</h1>
        <p>{HistoryAPI.text1}</p>
        <p>{HistoryAPI.text2}</p>
        <img
          src="https://www.ifnmu.edu.ua/images/zagalna_informacia/kafedri/onkologii/11.jpg"
          alt="history-oncology-pic"
        />
        <p>{HistoryAPI.text3}</p>
        <img
          src="https://www.ifnmu.edu.ua/images/zagalna_informacia/kafedri/onkologii/22.jpg"
          alt="history-oncology-pic"
        />
        <p>{HistoryAPI.text4}</p>
        <img
          src="https://www.ifnmu.edu.ua/images/zagalna_informacia/kafedri/onkologii/33.jpg"
          alt="history-oncology-pic"
        />
        <p>{HistoryAPI.text5}</p>
        <p>{HistoryAPI.text6}</p>
        <h2>{HistoryAPI.subHeader}</h2>
        <p>{HistoryAPI.person1}</p>
        <p>{HistoryAPI.person2}</p>
        <p>{HistoryAPI.person3}</p>
        <p>{HistoryAPI.person4}</p>
        <p>{HistoryAPI.person5}</p>
        <p>{HistoryAPI.person6}</p>
        <p>{HistoryAPI.person7}</p>
        <p>{HistoryAPI.person8}</p>
        <p>{HistoryAPI.person9}</p>
        <p>{HistoryAPI.person10}</p>
        <p>{HistoryAPI.person11}</p>
      </div>
      <ScrollToTop />
    </div>
  );
}
