import final from '../../assets/submissions/rys/final.mp4';
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
      <video className="video-container" controls>
        <source src={final} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </>
  );
}

export default PostRys
