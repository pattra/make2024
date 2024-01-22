import img01 from '../../assets/submissions/steph/01.jpg';
import img02 from '../../assets/submissions/steph/02.jpg';
import img03 from '../../assets/submissions/steph/03.jpg';
import img04 from '../../assets/submissions/steph/04.jpg';
import img05 from '../../assets/submissions/steph/05.jpg';
import img06 from '../../assets/submissions/steph/06.jpg';
import img07 from '../../assets/submissions/steph/07.jpg';
import img08 from '../../assets/submissions/steph/08.jpg';
import '../body.css';

function PostSteph() {
  return (<>
    <div>
      <h3>Steph: Reversible knitted hat</h3>
      <p>
        <i>Editor's Note:</i> I cannot understate the insane speed, skill, determination, and in Steph's words, <i>math</i>, that went into their creation of this reversible knitted hat. They took two separately existing patterns in two different leaf motifs and combined them into this incredible spring & autumn piece. In record time!
      </p>
      <p>
        Many reps of gamer hand exercises & stretches likely ensued after this.
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
      <p>
        <img className="image-container" src={img07} />
      </p>
      <p>
        <img className="image-container" src={img08} />
      </p>
    </div>
  </>
  );
}

export default PostSteph
