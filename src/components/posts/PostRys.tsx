import img01 from '../../assets/submissions/rys/01.png';
import '../body.css';

function PostRys() {
  return (<>
    <div>
      <h3>Rys: Make-your-own gacha girl!</h3>
      <p>
        <i>Editor's Note:</i> Rys recently began dabbling in the world of animation, and merged themes from 2024 being the Year of the Dragon with her own ability to turn leaves, develop new skills, and... resist temptation ?! In their own words: "New year new me, instead of spending money on gacha girls, I'll just draw my own?!"
      </p>
      <p>
        You can check out more of Rys' work on Instagram: <a href="https://instagram.com/cerysmii">@cerysmii</a>.
      </p>
    </div>
    <div className='content-section'>
      <h3>
        You can view the full animation on <a href="https://www.youtube.com/watch?v=fU5rD4XcIA4">YouTube</a>!
      </h3>
      <p>
        <img className="image-container" src={img01} />
      </p>
    </div>
  </>
  );
}

export default PostRys
