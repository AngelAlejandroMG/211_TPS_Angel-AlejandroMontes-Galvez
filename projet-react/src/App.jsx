import Header from './component/Header';
import MemeGenerator from './component/MemeGenerator';
import Footer from './component/Footer';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [memeImage, setMemeImage] = useState('https://i.imgflip.com/1bij.jpg');

  function getNewMemeImage() {
    fetch('https://api.imgflip.com/get_memes')
      .then(response => response.json())
      .then(memeData => {
        const memes = memeData.data.memes;
        const randomIndex = Math.floor(Math.random() * memes.length);
        const randomMeme = memes[randomIndex];
        setMemeImage(randomMeme.url);
      });
  }

  function gererTexteHaut(event) {
    setTopText(event.currentTarget.value);
  }

  function gererTexteBas(event) {
    setBottomText(event.currentTarget.value);
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
