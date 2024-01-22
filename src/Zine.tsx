import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Zine.css'
import Sidebar from './components/Sidebar';
import MobileSidebar from './components/MobileSidebar';
import Body from './components/Body';

function Zine() {
  const location = useLocation();

  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransistionStage] = useState("fadeIn");
  const [mobileTocOpen, setMobileTocOpen] = useState(false);

  useEffect(() => {
    if (location !== displayLocation) setTransistionStage("fadeOut");
    
    const bodyEl = document.querySelector('#zine-body');
    bodyEl?.scrollTo(0, 0)
  }, [location, displayLocation]);

  const extractedId = displayLocation.pathname.split('/').slice(-1)[0];
  let idToUse;
  if (extractedId !== 'zine') {
    idToUse = extractedId;
  } 

  return (
    <>
      <div className="container">
        <div className="desktop-sidebar-display"><Sidebar /></div>
        <div className={`container ${transitionStage}`}
          onAnimationEnd={() => {
            if (transitionStage === "fadeOut") {
              setTransistionStage("fadeIn");
              setDisplayLocation(location);
            }

            if (mobileTocOpen) {
              setMobileTocOpen(false);
            }
          }}>
          <Body artistId={idToUse} mobileTocOpen={mobileTocOpen} />
        </div>
        <div className='mobile-sidebar-display'>
          <MobileSidebar mobileTocOpen={mobileTocOpen} onTocToggle={setMobileTocOpen} />
        </div>
      </div>
    </>
  )
}

export default Zine
