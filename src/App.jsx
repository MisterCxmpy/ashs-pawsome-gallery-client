import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [images, setImages] = useState([])

  const url = "http://localhost:3000/getImages"

  const getImages = async () => {

    const response = await fetch(url)

    const data = await response.json();

    setImages(data)
  }

  useEffect(() => {
    getImages()
  }, [])

  return (
    <div className="container">
      <h1 className="title">Ash's Pawsome Gallary</h1>
      <div className="media-container">
        {images.map((item, index) => (
          <div className="media-item" key={index}>
            {item.format === 'jpg' || item.format === 'png' ? (
              <img loading='lazy' src={`https://drive.google.com/uc?export=view&id=${item.id}`} alt="drive image" />
            ) : (
              <video controls muted>
                <source src={`https://drive.google.com/uc?export=view&id=${item.id}`} type={`video/${item.format}`} />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App
