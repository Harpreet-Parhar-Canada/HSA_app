import React, { Component } from 'react';
import Showhistorical from './showhistorical';
import './App.css';

const Historical =() => {
    return(
      <div className= "historicalDiv">
        
         <Showhistorical
                      video={"'https://www.youtube.com/watch?v=nEm-0ndDZEc'"}
                      audio={2019}
                      read="EvolveU"
                      historicalName="The Grand YYC"
                      backgroundImage1="'https://i1.wp.com/livewirecalgary.com/wp-content/uploads/2019/01/The_Grand_-_Calgary-e1546543255554.jpg?fit=1182%2C822&ssl=1'"/> 
        
       
      </div>
    )

}

export default Historical;