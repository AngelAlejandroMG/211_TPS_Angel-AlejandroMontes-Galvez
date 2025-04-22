import Header from './component/Header';
import MemeGenerator from './component/MemeGenerator';
import Footer from './component/Footer';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [memeImage, setMemeImage] = useState(null);


  //charger  dans le montage
  React.useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then(response => response.json())
      .then(memeData => {
        const memes = memeData.data.memes;
        const index = Math.floor(Math.random() * memes.length);
        const randomMeme = memes[index];
        setMemeImage(randomMeme.url);
      });
  }, []);


  //obtenir une nouvelle image
  function getNewMemeImage() {
    fetch('https://api.imgflip.com/get_memes')
      .then(response => response.json())
      .then(memeData => {
        const memes = memeData.data.memes;
        const index = Math.floor(Math.random() * memes.length);
        const randomMeme = memes[index];
        setMemeImage(randomMeme.url);
      });
  }

  function gererTexteHaut(texte) {
    setTopText(texte.currentTarget.value);
  }

  function gererTexteBas(texte) {
    setBottomText(texte.currentTarget.value);
  }

  return (
    <div className="app-main">
      <Header />
      <MemeGenerator
        getNewMemeImage={getNewMemeImage}
        gererTexteBas={gererTexteBas}
        gererTexteHaut={gererTexteHaut}
        topText={topText}
        bottomText={bottomText}
        memeImage={memeImage}
      />
      <Footer />
    </div>
  );
}

export default App;
