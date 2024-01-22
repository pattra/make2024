import { useNavigate } from 'react-router-dom';
import artists from '../../artists';
import '../body.css';

function PostTableOfContents() {
  const navigate = useNavigate();

  const navItems = artists.map(artist => {
    // @ts-ignore
    const path = `/zine/${artist.id}`;

    return (
      <button
        className='mobile-button'
        style={{ width: '100%', marginBottom: '4px' }}
        onClick={() => {
          navigate(path);
        }}>
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
