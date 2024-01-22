import { useNavigate } from 'react-router-dom';
import './mobile-sidebar.css'
import artists from '../artists';

function MobileSidebar({ mobileTocOpen, onTocToggle }: { mobileTocOpen: boolean, onTocToggle: (fn: () => void) => void }) {
  const navigate = useNavigate();
  const currentArtistIndex = 0;

  return (
    <>
      <div className="mobile-sidebar">
        <button onClick={() => navigate('')}>
          &lt;
        </button>
        <button onClick={() => onTocToggle(() => !mobileTocOpen)}>
          {mobileTocOpen ? 'X' : `${currentArtistIndex + 1}/20`}
        </button>
        <button onClick={() => navigate('')}>
          &gt;
        </button>
      </div>
    </>
  )
}

export default MobileSidebar
