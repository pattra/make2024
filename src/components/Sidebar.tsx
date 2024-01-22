import { useNavigate } from 'react-router-dom';
import './sidebar.css'
import artists from '../artists';
import { useState } from 'react';

function Sidebar() {
  const navigate = useNavigate();
  const navItems = artists.map(artist => {
    // @ts-ignore
    const path = `/zine/${artist.id}`;

    const [displayLocation, setDisplayLocation] = useState(location);
    let isActive = false;

    if (displayLocation.pathname.includes(artist.id)) {
      isActive = true;
    }

    return (
      <button className={isActive ? 'button-active' : ''} style={{width: '100%', marginBottom: '4px'}} onClick={() => navigate(path)}>
        {artist.name}
      </button>
    )
  });

  return (
    <>
      <div className="sidebar">
        {navItems}
      </div>
    </>
  )
}

export default Sidebar
