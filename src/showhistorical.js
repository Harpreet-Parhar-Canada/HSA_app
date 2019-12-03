import React, { Component } from 'react';
import {Tabs,Tab,Grid,Cell,Chip} from 'react-mdl';
import ReactPlayer from 'react-player';
import Player from './audioplayer.js';
import './App.css';

class Showhistorical extends Component {
  constructor(props) {
      super(props)
      this.state = {
          backgroundImage1: this.props.backgroundImage1,
          activeTab:'Select',
          url: this.props.video,
          pip: false,
          playing: false,
      };
  }
  
  handlePlay = () => {
    console.log('onPlay')
    this.setState(
      { activeTab: <div>
              <ReactPlayer
              id="myVid" height='auto' width='auto'
              className='react-player'
              width='100%'
              height='100%'
              url={this.state.url}
              playing={true}
              />
      <button onClick={this.handlePlay}> Play </button>
      <button onClick={this.handlePause}> Pause </button>
      </div>});
console.log(this.state.playing)
  }

  handlePause = () => {
    console.log('onPause')
    this.setState(
      {       activeTab: <div>
              <ReactPlayer
              id="myVid" height='auto' width='auto'
              ref={this.player}
              className='react-player'
              width='100%'
              height='100%'
              url={this.state.url}
              playing={false}
              />
      <button onClick={this.handlePlay}> Play </button>
      <button onClick={this.handlePause}> Pause </button>
      </div>});
    console.log(this.state.playing)
  }
  
  handleChange = (tabId) => {
    switch(tabId) {
      case 0:
        this.setState(
          { activeTab: <div>
                  <ReactPlayer
                  id="myVid" height='auto' width='auto'
                  ref={this.player}
                  className='react-player'
                  width='100%'
                  height='100%'
                  url={this.state.url}
                  playing={this.state.playing}
                  />
          <button onClick={this.handlePlay}> Play </button>
          <button onClick={this.handlePause}> Pause </button>
          </div>});
          break;
          case 1:
               this.setState(
                { activeTab: <div >
                  <Player/>
                   </div>});
                break;
             case 2:
                 this.setState(
                  { activeTab:<div style={{backgroundColor:'black'}}> <p style={{color:'white'}}>"The Grand is situated on the land where the Bow River meets the Elbow River. The traditional Blackfoot name of this place is Mohkinstsis, which is also referred to as the City of Calgary. We honour and acknowledge Mohkinstsis and the traditional Treaty 7 territory and oral practices of the Blackfoot confederacy: Siksika, Kainai, Piikani as well as the Iyarhe Nakoda and Tsuut’ina nations who also call this place home.  We also acknowledge that this territory is home to the Métis Nation of Alberta, Region 3 within the historical Northwest Métis homeland.

                  The Grand is a not-for-profit organization (Charitable Registration: 134483981 RR0001). Since 2006, the theatre has been a centre for creation and presentation of contemporary performance from Calgary, Canada, and around the world. In 2019, we embark on a new chapter with a new vision for the future."</p></div> });          break;
    }
  }

  render() {
    const backImg=""+this.state.backgroundImage1+"";
    return(
        <div className='divHistorical' style={{backgroundColor:'black'}}>
          <Grid style={{background:'black',alignItems:'center'}}>
                  <Cell col={8}><h2 style={{color:'white'}}>Welcome</h2></Cell>
                
                    <h2 style={{color:'white', fontWeight:'bold'}}>{this.props.historicalName}</h2>
          </Grid>
          <div>
                  <Tabs className="aboutCell" activeTab={this.state.activeTab} onChange={this.handleChange} ripple>
                        <Tab label="tab1" >Video</Tab>
                        <Tab label ="tab2">Audio</Tab>
                        <Tab label="tab3" >Read</Tab>
                 </Tabs>
          </div>
           <Grid style={{
                       backgroundImage:'url(' + backImg + ')',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        filter: 'grayscale(75%)',
                        height:'350px',
                        
                        
                  }}
                  >
                <section>
                        <div > <p style={{color:'black',alignItems:'center',width:'auto'}}> {this.state.activeTab} </p></div>
                   </section>
                  </Grid>
    </div>
    )
  }
}

export default Showhistorical;
