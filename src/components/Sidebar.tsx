import { useNavigate } from 'react-router-dom';
import './sidebar.css'
import artists from '../artists';
import { useState } from 'react';

function Sidebar() {
  const navigate = useNavigate();
  const [displayLocation] = useState(location);

  const navItems = artists.map((artist, i) => {
    const path = `/zine/${artist.id}`;
    let isActive = false;

    if (displayLocation.pathname.includes(artist.id)) {
      isActive = true;
    }

    return (
      <button
        className={isActive ? 'button-active' : ''}
        style={{width: '100%', marginBottom: '4px'}}
        onClick={() => navigate(path)}
        key={`sidebar-item-${i}`}
      >
        {artist.name}
      </button>
    )
  });

  return (
    <>
      <div className="sidebar">
      <button className={displayLocation.pathname === '/zine' || displayLocation.pathname === '/zine/' ? 'button-active' : ''} style={{width: '100%', marginBottom: '4px'}} onClick={() => navigate('/zine')}>
        🍃
      </button>
        {navItems}
      </div>
    </>
  )
}

export default Sidebar
