import React from 'react';
import HomeInfo from './common/HomeInfo';
import HomeHistory from './common/HomeHistory';
import HomeTeachers from './common/HomeTeachers';
import HomeTodo from './common/HomeTodo';
import '../Sass/HomeComponent.scss';

export default function HomeComponent() {
  return (
    <div className="home-component">
      <div className="home-box-info">
        <HomeInfo />
        <HomeHistory />
        <HomeTeachers />
      </div>
      <div className="home-box-todo">
        <HomeTodo />
      </div>
    </div>
  );
}
