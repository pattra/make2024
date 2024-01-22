import img01 from '../../assets/submissions/patt_dan_theo/01.png';
import img02 from '../../assets/submissions/patt_dan_theo/02.png';
import seaSong from '../../assets/submissions/patt_dan_theo/sea.mp3';
import '../body.css';

function PostPattDanTheo() {
  return (<>
    <div>
      <h3>Dan, Pattra, & Theo: A text-based adventure game</h3>
      <p>
        <i>Editor's Note:</i> Dan, Theo, and I have always individually had deep fascinations with making video games. For this make-a-thon, in "classic fashion," we decided to band together, be extremely ambitious, and bite off way more than we could chew.
      </p>
      <p>
        Dan & I wanted to make a text adventure (but with graphics and music, lol) where the player must keep a journal. We started thinking about ship's logs, and then came up with the idea of an eldritch mystery on the high seas. We wanted a world with characters who had their own agendas--where if you go through life day by day, they will change the course of the world's history with or without you. Theo then graciously lent us his musical talents to help bring this world to life.
      </p>
      <p>
        With <a href="https://github.com/dfreeman">Dan</a> crafting the engine, <a href="https://pattra.io">me</a> writing the script, and <a href="https://treehann.bandcamp.com">Theo</a> composing the soundtrack, we had ourselves an unstoppable team.
      </p>
      <p style={{ textAlign: 'center' }}>
        <h3>You can <a href="https://dfreeman.io/new-leaf">play our game</a> now! Desktop browsers only!</h3>
      </p>
    </div>
    <h4>Process & screenshots</h4>
    <div className="content-section">
      <p>
        <img className="image-container" src={img02} /><br />
        A screenshot from the opening scene of our game!
      </p>
      <p>
        <audio controls>
          <source src={seaSong} type="audio/mp3" />
          Your browser does not support the audio element.
        </audio><br />
        One of the loops Theo created. Check out the rest of the OST in game!
      </p>
      <p>
        <img className="image-container" src={img01} /><br />
        A screenshot of the FigJam board we used to plan and brainstorm ideas.
      </p>
      <p>
        You can check out the source code here: <a href="https://github.com/dfreeman/new-leaf">https://github.com/dfreeman/new-leaf</a>
      </p>
    </div>
  </>
  );
}

export default PostPattDanTheo
