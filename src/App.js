import React from "react";
import {useState, useEffect} from "react";
import "./App.css"
import Player from "./components/Player";

function App() {

  const [songs,setSongs] = useState([

    {
      "name":"Weak for Your Love",
      "artist": "Thee Sacred Souls",
      "image": "./images/Weak for Your Love - Thee Sacred Souls.jpg",
      "mp3": "./songs/Weak for Your Love - Thee Sacred Souls.mp3"
  },
  {
      
      "name":"Let The Sunshine In",
      "artist": "The 5th Dimension",
      "image": "./images/Let The Sunshine In.jpg",
      "mp3": "./songs/Let The Sunshine In - The 5th Dimension.mp3"
  },
    {
      "name":"All Your Sisters",
      "artist": "Mazzy Star",
      "image": "./images/All-Your-Sisters.jpg",
      "mp3": "./songs/All Your Sisters - Mazzy Star.mp3"
  },
  {
      
      "name":"Cinnamon Girl",
      "artist": "Lana Del Rey",
      "image": "./images/Cinnamon-Girl.jpg",
      "mp3": "./songs/Cinnamon Girl - Lana Del Rey.mp3"
  },
  {
      
      "name":"Dark Fantasy",
      "artist": "Kanye West",
      "image": "./images/Dark Fantasy - Kanye West.jpg",
      "mp3": "./songs/Dark Fantasy - Kanye West.mp3"
  },
  {
      
      "name": "Theme of Laura",
      "artist": "Akira Yamaoka",
      "image": "./images/Theme of Laura - Akira Yamaoka.jpg",
      "mp3": "./songs/Theme of Laura - Akira Yamaoka.mp3"
  },
  {
      
      "name":"I'll Do My Best",
      "artist": "The Ritchie Family",
      "image": "./images/I'll Do My Best - The Ritchie Family.jpg",
      "mp3": "./songs/I'll Do My Best - The Ritchie Family.mp3"
  },
   {
      
      "name":"When the Levee Breaks",
      "artist": "Led Zeppelin",
      "image": "./images/When the Levee Breaks - Led Zeppelin.jpg",
      "mp3": "./songs/When the Levee Breaks - Led Zeppelin.mp3"
  },
  {
      
      "name":"Miserlou",
      "artist": "Dick Dale",
      "image": "./images/Miserlou - Dick Dale and his Del-Tones.jpg",
      "mp3": "./songs/Miserlou - Dick Dale and his Del-Tones.mp3"
  },
 {
      
      "name":"Love Is Strong",
      "artist": "The Rolling Stones",
      "image": "./images/Love Is Strong - The Rolling Stones.jpg",
      "mp3": "./songs/Love Is Strong - The Rolling Stones.mp3"
  },
  {
      
      "name":"Yer Blues",
      "artist": "The Beatles",
      "image": "./images/Yer Blues - The Beatles.jpg",
      "mp3": "./songs/Yer Blues - The Beatles.mp3"
  },

  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="App">
     
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  );
}

export default App;