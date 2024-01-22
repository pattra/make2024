import { useNavigate } from 'react-router-dom';
import artists from '../../artists';
import '../body.css';
import { useState } from 'react';

function PostTableOfContents() {
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
        className={`mobile-button ${isActive ? 'active-mobile-button' : ''}`}
        style={{ width: '100%', marginBottom: '4px' }}
        onClick={() => {
          navigate(path);
        }}
        key={`mobile-sidebar-item-${i}`}
      >
        {artist.name}
      </button>
    )
  });

  return (<>
    <div>
      {navItems}
    </div>
  </>
  );
}

export default PostTableOfContents
