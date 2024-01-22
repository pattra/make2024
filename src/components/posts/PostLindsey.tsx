import img01 from '../../assets/submissions/lindsey/01.jpeg';
import img02 from '../../assets/submissions/lindsey/02.jpg';
import img03 from '../../assets/submissions/lindsey/03.jpg';
import '../body.css';

function PostLindsey() {
  return (<>
    <div>
      <h3>Lindsey: "Turning Over a New Leaf (To Find Critters Beneath)"</h3>
      <p>
        <i>Editor's Note:</i> Lindsey is a prolific <a href="https://www.linseedling.com/">children's book author and illustrator</a> with a passion for science, critters, and illustration. When given the theme she instantly leapt at the chance to draw bugs.
      </p>
      <p>
        In her words: <i>The title is "Turning Over a New Leaf (To Find Critters Beneath)" and obviously it takes the theme literally BUT also the deeper meaning is that I'd like to turn over a new leaf in the new year and make more personal work that makes me happy :')</i>
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
    </div>
  </>
  );
}

export default PostLindsey
