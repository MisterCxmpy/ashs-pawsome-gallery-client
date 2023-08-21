import { useEffect, useState } from 'react';
import './App.css'
import Media from './components/Media';
import icon from "./assets/icon.png"

function App() {

  return (
    <div className="container">
      <h1 className="title">
        <img src={icon} alt="" />
        Ash's Pawsome Gallary
      </h1>
      <Media />
    </div>
  );
}

export default App
