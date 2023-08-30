import React, { useEffect, useState } from 'react';
import { storage } from '../firebaseConfig';
import { ref, getDownloadURL, listAll } from 'firebase/storage';
import { BsFolder2 } from 'react-icons/bs';
import FirestoreItemLink from './common/FirestoreItemLink';
import Loader from './common/Loader';

import '../Sass/CourseComponent.scss';

export default function CourseComponent({ value }) {
  const [loading, setLoading] = useState(true);

  const listRef =
    value === '5-course' ? ref(storage, 'VCourse/') : ref(storage, 'VICourse');
  const [firestoreItems, setFirestoreItems] = useState([]);
  useEffect(() => {
    listAll(listRef)
      .then((res) => {
        const { items } = res;
        Promise.all(
          items.map(async (item) => {
            return { name: item.name, url: await getDownloadURL(item) };
          })
        ).then((values) => {
          setFirestoreItems(values);
        });
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [value]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="course-wrapper">
          <h1 className="course-header">
            Dear Сolleague, on this page You can find all necessary materials
            for studying!
          </h1>
          {firestoreItems.map((item) => (
            <div className="course-box" key={item.url}>
              <BsFolder2 className="course-icon" />
              <FirestoreItemLink name={item.name} url={item.url} />
            </div>
          ))}
        </div>
      )}
    </>
  );
}
