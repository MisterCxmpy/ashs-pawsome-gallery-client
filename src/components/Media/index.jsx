import React, { useEffect, useState } from 'react';
import styles from './index.module.css';
import Loading from '../Loading';

export default function Media() {
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState([]);

  const [active, setActive] = useState("");

  const url = "https://ashs-pawsome-gallery-server.vercel.app/images";

  const getImages = async () => {
    setLoading(true);

    const response = await fetch(url);
    const data = await response.json();
    setImages(data);
  };

  useEffect(() => {
    getImages()
  }, [])

  useEffect(() => {
    const checkImagesLoaded = async () => {
      if (!images.length) {
        console.log("API is still warming up!");
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setLoading(false);
        }, 5000);
      }
    };
  
    const interval = setInterval(checkImagesLoaded, 5000);
  
    return () => {
      clearInterval(interval);
    };
  }, [images]);
  
  

  useEffect(() => {
    if (active) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [active])


  return (
    <>
      <div className={styles['loading']} style={loading ? {display: "block"} : {display: "none"}}>
        <Loading />
      </div>
      {active ? 
        <div className={`${styles['modal']} ${active ? styles['active'] : ""}`}>
          <img crossorigin="anonymous" src={active} alt="active image" />
          <button onClick={() => setActive(null)}>&times;</button>
        </div> 
      : null}
      <div style={loading ? {display: "none"} : {display: "block"}} className={styles['media-container']}>
        {images.map((item, index) => (
          <div className={styles['media-item']} key={index}>
            {item.format === 'jpg' || item.format === 'png' || item.format === 'gif' ? (
              <img
                crossorigin="anonymous"
                src={`https://drive.lienuc.com/uc?export=view&id=${item.id}`}
                alt="If image not showing Google broke the API."
                onClick={() => setActive(`https://drive.lienuc.com/uc?export=view&id=${item.id}`)}
              />
            ) : (
              <video
                controls
                muted
                crossorigin="anonymous"
              >
                <source
                  src={`https://drive.lienuc.com/uc?export=view&id=${item.id}`}
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
