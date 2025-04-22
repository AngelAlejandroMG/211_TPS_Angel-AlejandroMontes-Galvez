import "./MemeGenerator.css";


function MemeGenerator(props) {
    return (
      <div className="memeGenerator">
        <input 
        type="text" 
        placeholder="Texte en haut" 
        onChange={props.gererTexteHaut}
        value={props.topText}
        className="memeInput"
        />
        <br/><br/>
        <input 
        type="text" 
        placeholder="Texte en bas" 
        onChange={props.gererTexteBas}
        value={props.bottomText}
        className="memeInput"
        />
        <br/><br/>
        <button className="memeBtn" onClick={props.getNewMemeImage}>Get a new meme image</button>
  
        <div className="memeContainer">
          <img src={props.memeImage} alt="Meme" className="memeImage"/>
          <div className="memeText">
            <div className="memeTextTop">
            {props.topText}
            </div>
          <div className="memeTextBottom">
            {props.bottomText}
            </div>-
          </div>
        </div>
      </div>
    );
  }
  
  export default MemeGenerator;
  