import './body.css'
import artists from '../artists';
import PostDefault from './posts/PostDefault';
import PostTableOfContents from './posts/PostTableOfContents';

function Body({ artistId, mobileTocOpen }: { artistId: string, mobileTocOpen: boolean, onTocToggle: (fn: () => void) => void }) {
  let PostComponent = mobileTocOpen ? PostTableOfContents : PostDefault;

  if (!mobileTocOpen) {
    const hasArtistId = !!artistId;
    if (hasArtistId) {
      const artistIndex = artists.findIndex(artist => {
        return artist.id === artistId;
      });

      PostComponent = artists[artistIndex]?.component;
    }
  }

  return (
    <>
      <div id="zine-body" className="body">
        <div className="post-container">
        <PostComponent />
        </div>
      </div>
    </>
  )
}

export default Body
