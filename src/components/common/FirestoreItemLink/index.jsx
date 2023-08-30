import React from 'react';
import './index.scss';

export default function FirestoreItemLink({ name, url }) {
  return (
    <div>
      <a href={url} target="_blank">
        {name}
      </a>
    </div>
  );
}
