import img01 from '../../assets/submissions/lulu/01.png';
import img02 from '../../assets/submissions/lulu/02.png';
import timelapse from '../../assets/submissions/lulu/process.mp4';
import '../body.css';

function PostLulu() {
  return (<>
    <div>
      <h3>Lulu: Cat & plant sticker sheet</h3>
      <p>
        <i>Editor's Note:</i> When I tell you this girl was grinding, I mean it. She cooked this sticker sheet on a plane ride home, using the theme to inspire this gift for a friend. By the end of the weekend she had finished the flat colors, and we will update later with a final when we get it. In the meantime, check her out on instagram <a href="https://instagram.com/luluspicedesigns">@luluspicedesigns</a> and enjoy!
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
        <video className="video-container" controls>
          <source src={timelapse} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </p>
    </div>
  </>
  );
}

export default PostLulu