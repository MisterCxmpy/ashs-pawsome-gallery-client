import React, { useEffect, useState } from 'react';
import styles from './index.module.css';
import Loading from '../Loading';

export default function Media() {
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState([]);

  const url = "http://localhost:3000/getImages";

  const getImages = async () => {
    setLoading(true);

    const response = await fetch(url);
    const data = await response.json();
    setImages(data);
  };

  useEffect(() => {
    getImages();

    setTimeout(() => {
      setLoading(false)
    }, 5000);
  }, []);


  return (
    <>
      <div style={loading ? {display: "block"} : {display: "none"}}>
        <Loading />
      </div>
      <div style={loading ? {display: "none"} : {display: "block"}} className={styles['media-container']}>
        {images.map((item, index) => (
          <div className={styles['media-item']} key={index}>
            {item.format === 'jpg' || item.format === 'png' ? (
              <img
                src={`https://drive.google.com/uc?export=view&id=${item.id}`}
                alt="drive image"
              />
            ) : (
              <video
                controls
                muted
              >
                <source
                  src={`https://drive.google.com/uc?export=view&id=${item.id}`}
                  type={`video/${item.format}`}
                />
              </video>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
