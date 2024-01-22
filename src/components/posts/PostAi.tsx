import img01 from '../../assets/submissions/ai/01.jpg';
import img02 from '../../assets/submissions/ai/02.jpg';
import img03 from '../../assets/submissions/ai/03.jpg';
import img04 from '../../assets/submissions/ai/04.jpg';
import img05 from '../../assets/submissions/ai/05.jpg';
import img06 from '../../assets/submissions/ai/06.jpg';
import '../body.css';

function PostAi() {
  return (<>
    <div>
      <h3>Ai: Needle-felted Totoro</h3>
      <p className="editors-note">
        <i>Editor's Note:</i> Thinking about new leaves and growth got Ai thinking about Miyazaki films. Inspired by the scene in <i>Totoro</i> where the namesake character begins summoning winds, spirits, and leaves, she decided to make a mobile depicting this scene. Here is her work in progress!
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
      <p>
        <img className="image-container" src={img06} />
      </p>
    </div>
  </>
  );
}

export default PostAi
