import { useNavigate } from 'react-router-dom';
import './mobile-sidebar.css'
import artists from '../artists';
import { useState } from 'react';

function MobileSidebar({ mobileTocOpen, onTocToggle }: { mobileTocOpen: boolean, onTocToggle: (fn: () => void) => void }) {
  const navigate = useNavigate();
  const [displayLocation, setDisplayLocation] = useState(location);

  const currentArtistIndex = artists.findIndex((artist) => {
    return displayLocation.pathname.includes(artist.id);
  });
  const numArtists = artists.length;

  let nextPath = '/zine';
  let prevPath = '';

  if (currentArtistIndex + 1 < numArtists) {
    nextPath = `/zine/${artists[currentArtistIndex + 1].id}`;
  }

  if (currentArtistIndex -1 >= 0) {
    prevPath = `/zine/${artists[currentArtistIndex - 1].id}`;
  } else if (currentArtistIndex === 0) {
    prevPath = '/zine';
  }

  return (
    <>
      <div className="mobile-sidebar">
        <button disabled={!prevPath} onClick={() => navigate(prevPath)}>
          &lt;
        </button>
        <button onClick={() => onTocToggle(() => !mobileTocOpen)}>
          {mobileTocOpen ? 'X' : `${currentArtistIndex + 2}/${numArtists + 1}`}
        </button>
        <button onClick={() => navigate(nextPath)}>
          &gt;
        </button>
      </div>
    </>
  )
}

export default MobileSidebar
