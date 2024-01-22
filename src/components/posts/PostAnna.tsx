import img01 from '../../assets/submissions/anna/01.png';
import img02 from '../../assets/submissions/anna/02.png';
import img03 from '../../assets/submissions/anna/03.png';
import img04 from '../../assets/submissions/anna/04.png';
import '../body.css';

function PostAnna() {
  return (<>
    <div>
      <h3>Anna: Pixel art adventures</h3>
      <p>
        <i>Editor's Note:</i> This year, Anna decided to apply the Make-a-thon theme to herself as a person, and turned a new leaf as a pixel artist. While she's had plenty of experience working with other traditional and digital media, for this event she plunged into Aseprite for the first time.
      </p>
    </div>
    <div className='content-section'>
      <p>
        <img className="image-container" src={img01} />
      </p>
      <p>
        <img className="image-container" src={img02} />
      </p>
      <p>
        <img className="image-container" src={img03} />
      </p>
      <p>
        <img className="image-container" src={img04} />
      </p>
    </div>
  </>
  );
}

export default PostAnna
