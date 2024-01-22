import img01 from '../../assets/submissions/jas/01.png';
import img02 from '../../assets/submissions/jas/02.png';
import img03 from '../../assets/submissions/jas/03.png';
import timelapse from '../../assets/submissions/jas/timelapse.mp4';
import '../body.css';

function PostJas() {
  return (<>
    <div>
      <h3>Jas: "My Leaf Remains Unturned"</h3>
      <p>
        <i>Editor's Note:</i> This piece, which the artist has titled <i>My Leaf Remains Unturned</i>, is somehow both relatable yet also wildly at odds with the progression of Jas' own life--not only is she comedic and creative powerhouse, she's also recently started a <a href="https://www.etsy.com/shop/venturestickers/?etsrc=sdt">stationery business</a> on Etsy. I hope this little guy starts raking in the cash soon.
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
        <video className="video-container" controls>
          <source src={timelapse} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </p>
    </div>
  </>
  );
}

export default PostJas
