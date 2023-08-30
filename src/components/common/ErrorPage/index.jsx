import React from 'react';
import './index.scss';

export default function ErrorPage() {
  return (
    <div className="errorPage-wrapper">
      <img
        src="https://images.pexels.com/photos/4041275/pexels-photo-4041275.jpeg"
        alt="404"
      />
      <div className="errorText-wrapper">
        <h1>Page not found...</h1>
        <h2>404</h2>
      </div>
    </div>
  );
}
