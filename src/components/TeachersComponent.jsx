import React from 'react';
import teachersArr from '../api/TeachersAPI.json';
import ScrollToTop from '../helpers/scrollToTop';
import '../Sass/TeachersComponent.scss';

export default function TeachersComponent() {
  return (
    <div className="teachers-component-wrapper">
      <div className="teachers-component-box">
        <h1>Our Team:</h1>
        {teachersArr.map((teacher) => {
          return (
            <div className="teacher-box" key={teacher.name}>
              <img src={teacher.image} alt="teacher-image" />
              <div className="teacher-info">
                <h2>{teacher.name}</h2>
                <p>{teacher.position}</p>
                {teacher.scientificTitle ? (
                  <p>{teacher.scientificTitle}</p>
                ) : (
                  <></>
                )}
                {teacher.medicalTitle ? <p>{teacher.medicalTitle}</p> : <></>}
              </div>
            </div>
          );
        })}
      </div>
      <ScrollToTop />
    </div>
  );
}
