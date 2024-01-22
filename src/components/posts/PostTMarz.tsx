import img01 from '../../assets/submissions/tmarz/01.jpg';
import img02 from '../../assets/submissions/tmarz/02.jpg';
import img03 from '../../assets/submissions/tmarz/03.jpg';
import img04 from '../../assets/submissions/tmarz/04.jpg';
import img05 from '../../assets/submissions/tmarz/05.jpg';
import '../body.css';

function PostTMarz() {
  return (<>
    <div>
      <h3>T. Marz: Painted miniatures</h3>
      <p>
        <i>Editor's Note:</i> Never in my life will I have the patience or skill to paint miniatures, and the fact that Marz did it so intricately and well is jaw-dropping. And once he dropped that they're UV/blacklight reactive as well I just about lost my mind.
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
      <p>
        <img className="image-container" src={img05} />
      </p>
    </div>
  </>
  );
}

export default PostTMarz
