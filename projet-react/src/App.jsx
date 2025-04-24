import Header from './component/Header';
import MemeGenerator from './component/MemeGenerator';
import Footer from './component/Footer';
import React, { useState } from 'react';
import './App.css';

function App() {
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

  

  return (
    <div className="app-main">
      <Header />
      <MemeGenerator
        getNewMemeImage={getNewMemeImage}
        memeImage={memeImage}
      />
      <Footer />
    </div>
  );
}

export default App;
