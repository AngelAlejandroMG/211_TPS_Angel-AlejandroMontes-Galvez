import "./MemeGenerator.css";
import React, { useState } from 'react';


function MemeGenerator(props) {

  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');

  function gererTexteHaut(texte) {
      setTopText(texte.currentTarget.value);
    }
  
    function gererTexteBas(texte) {
      setBottomText(texte.currentTarget.value);
    }

    return (

      <div className="memeGenerator">
        <input 
        type="text" 
        placeholder="Texte en haut" 
        onChange={gererTexteHaut}
        value={topText}
        className="memeInput"
        />

        <br/><br/>

        <input 
        type="text" 
        placeholder="Texte en bas" 
        onChange={gererTexteBas}
        value={bottomText}
        className="memeInput"
        />

        <br/><br/>

        <button className="memeBtn" onClick={props.getNewMemeImage}>Get a new meme image</button>
  
        <div className="memeContainer">
          <img src={props.memeImage} alt="Meme" className="memeImage"/>
          <div className="memeText">
            <div className="memeTextTop">
            {topText}
            </div>
          <div className="memeTextBottom">
            {bottomText}
            </div>-
          </div>
        </div>
      </div>
      
    );
  }
  
  export default MemeGenerator;
  