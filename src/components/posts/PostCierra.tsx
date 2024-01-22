import img01 from '../../assets/submissions/cierra/01.jpg';
import img02 from '../../assets/submissions/cierra/02.jpg';
import final from '../../assets/submissions/cierra/final.mp4';
import '../body.css';

function PostCierra() {
  return (<>
    <div>
      <h3>Cierra: Falling leaf extensions</h3>
      <p>
        <i>Editor's Note:</i> If I said that the chat absolutely exploded when Cierra busted out these custom-dyed <i>hair extensions</i>, that still would be an understatement. We were so amazed to see this medium at all, not to mention such an incredible result. Check her out on insta: <a href="https://instagram.com/_unholyhair">@_unholyhair</a>
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
          <source src={final} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </p>
    </div>
  </>
  );
}

export default PostCierra
