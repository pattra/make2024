import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Div100vh from 'react-div-100vh';
import './App.css'

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransistionStage] = useState("fadeIn");

  useEffect(() => {
    if (location !== displayLocation) setTransistionStage("fadeOut");
  }, [location, displayLocation]);

  return (
    <Div100vh>
      <div className={`splash ${transitionStage}`} onAnimationEnd={() => {
        if (transitionStage === "fadeOut") {
          setTransistionStage("fadeIn");
          setDisplayLocation(location);
        }
      }}>
        <h1 className="splash-title">✨🍃 multimedia make vol. 1 🍃✨</h1>
        <div className="card">
          <p>
            In January 2024, a group of artists and makers got together for a weekend to put together projects in the medium of their choice under a given theme. Welcome to the results: our multimedia zine!
          </p>
          <p>
            Our theme this year? <b>Turning a new leaf!</b>
          </p>
          <button className="splash-button" onClick={() => { navigate('/zine') }}>
            Let's go!
          </button>
        </div>
      </div>
    </Div100vh>
  )
}

export default App
