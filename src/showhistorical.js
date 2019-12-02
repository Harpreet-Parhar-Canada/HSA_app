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
          activeTab:'Select any option ',
          url: 'https://www.youtube.com/watch?v=0vk5Rmo3E3E&t=4s',
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
                  { activeTab:<div style={{backgroundColor:'black'}}> <p style={{color:'white'}}>"Built in 1891 and originally known as Beaulieu, the French meaning beautiful place, Lougheed House is a national historic site located in the Beltline district of Calgary, Alberta. Lougheed House is operated by Lougheed House Conservation Society, an independent, non-profit society devoted to the restoration and public enjoyment of the historic house and its Gardens.Over its long history, Lougheed House has been a family residence, a training centre for young women,a women's military barracks and a blood donor clinic. Then, for many years, it sat empty — cared for, but unused until its restoration started in 2000."</p></div> });          break;
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

// <Cell col={2} style={{color:'black'}}><Chip className="aboutCell1">back</Chip></Cell>