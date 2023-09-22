import './App.css'
import Media from './components/Media';
import Icon from "./assets/Icon.png"

function App() {

  return (
    <div className="container">
      <h1 className="title">
        <img src={Icon} alt="" />
        Ash's Pawsome Gallery
      </h1>
      <Media />
    </div>
  );
}

export default App
