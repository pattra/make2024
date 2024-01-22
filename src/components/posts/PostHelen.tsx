import img01 from '../../assets/submissions/helen/01.jpeg';
import img02 from '../../assets/submissions/helen/02.png';
import img03 from '../../assets/submissions/helen/03.jpeg';
import final from '../../assets/submissions/helen/final.jpeg';
import '../body.css';

function PostHelen() {
  return (<>
    <div>
      <h3>Helen: Comics, collage, illustration</h3>
      <p>
        <i>Editor's Note:</i> Helen never ceases to amaze me when it comes to her insane creativity with 2D media. We've spent many hours talking about our favorite graphic novelists, tattoo artists, and illustrators, and even then I was still shocked by her skill in this wildly textured, layered, and adorable piece. This work's muse is her partner's lovely family dog.
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
        <img className="image-container" src={final} />
      </p>
    </div>
  </>
  );
}

export default PostHelen
