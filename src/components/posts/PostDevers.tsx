import img01 from '../../assets/submissions/devers/01.png';
import img02 from '../../assets/submissions/devers/02.png';
import img03 from '../../assets/submissions/devers/03.png';
import '../body.css';

function PostDevers() {
  return (<>
    <div>
      <h3>Devers: Mushrooms, compost, and gacha</h3>
      <p>
        <i>Editor's Note:</i> Inspired by both his fascination with gacha games and a recent mushroom foraging trip, Devers used his development skills to make one of the most creative gacha games we'd ever seen. In this prototype, aspiring farmers can collect different types of mushrooms in the forest and plant spores in their own fantasy gardens.
      </p>
      <p>
        Below are some screenshots from his prototype, including artwork for the cards! I'd collect these !!
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
        View the full source on Github: <a href="https://github.com/deverstalmage/fungus">https://github.com/deverstalmage/fungus</a>
      </p>
    </div>
  </>
  );
}

export default PostDevers
