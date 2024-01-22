import img01 from '../../assets/submissions/allison/01.jpg';
import img02 from '../../assets/submissions/allison/02.jpg';
import img03 from '../../assets/submissions/allison/03.jpg';
import img04 from '../../assets/submissions/allison/04.jpg';
import '../body.css';

function PostAllison() {
  return (<>
    <div>
      <h3>Allison: Embroidered journal cover</h3>
      <p>
        <i>Editor's Note:</i> Allison took a flora-based approach to her project and decided to sew a book jacket for her journal that she will continually embroider onto for months to come. We are very lucky to have inspired the first patch in the garden!
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

export default PostAllison
