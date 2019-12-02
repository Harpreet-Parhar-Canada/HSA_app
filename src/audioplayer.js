import AudioPlayer from "react-h5-audio-player";
import React, { Component } from 'react';
import audio1 from './assets/audio1.mp3'
import './App.css';
 
const Player = () => {
    return (
      <div >
  <AudioPlayer 
    autoPlay
    src={audio1}
    onPlay={e => console.log("onPlay")}
  
    
  />
  </div>
)
};
export default Player;