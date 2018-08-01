import React from 'react';
import './App.css'

import { BrowserRouter as Router,Link } from "react-router-dom";

class LiveStreaming  extends React.Component{
    constructor(){
        super();
        this.state={
            card1: 'http://192.168.1.187:8081/live/srt/playlist.m3u8',
            card2:'https://nimble.viblast.com:8081/live/high/playlist.m3u8 ',
            card3:'https://hvcplayer.haivision.com/f43d4b3b-d35f-41cb-b8ce-9841406b9362',
            card4:'http://192.168.1.156:8081/home/mayura/Downloads/pubg.mp4/playlist.m3u8',
            card5:''
        }
       
        this.handleCardCLick1=this.handleCardCLick1.bind(this);
    }
    
    handleCardCLick1(event){
      localStorage.setItem('url1',event.target.id)
      window.location.reload(1)
    }

    render(){
        return(
          <Router>
            <div>
        
            <section class="section cards">
<div class="container">
  <div class="columns is-multiline" >
    <div class="column img5 willow is-quarter">
    <p  >Live video 1</p>
    <h6 class="subtitle is-6 has-text-centered"></h6>
    <h6 class="subtitle is-6 has-text-centered"></h6>
    <Link to='/play'><input class="button is-link is-rounded " type='submit' value='Watch' id={this.state.card1} onClick={this.handleCardCLick1}/></Link>
    </div>

    <div class="column img2 xpro2 is-quarter" >
      <p>Live video 2</p>
      <h6 class="subtitle is-6 has-text-centered"></h6>
    <h6 class="subtitle is-6 has-text-centered"></h6>
    <Link to='/play'><input class="button is-link is-rounded " type='submit' value='Watch' id={this.state.card2} onClick={this.handleCardCLick1}/></Link>
    </div>

    <div class="column img3 willow is-quarter">
      <p>Live video 3</p>
    <h6 class="subtitle is-6 has-text-centered"></h6>
    <h6 class="subtitle is-6 has-text-centered"></h6>
    <Link to='/play'><input class="button is-link is-rounded " type='submit' value='Watch' id={this.state.card3} onClick={this.handleCardCLick1}/></Link>
    </div>

    <div class="column img4 clarendon is-quarter">
      <p>Live video 4</p>
      <h6 class="subtitle is-6 has-text-centered"></h6>
    <h6 class="subtitle is-6 has-text-centered"></h6>
    <Link to='/play'><input class="button is-link is-rounded " type='submit' value='Watch' id={this.state.card4} onClick={this.handleCardCLick1}/></Link>
    
    </div>
    <div class="column img2 lofi is-quarter">
      <p>Live video 5</p>
      <h6 class="subtitle is-6 has-text-centered"></h6>
    <h6 class="subtitle is-6 has-text-centered"></h6>
    <Link to='/play'><input class="button is-link is-rounded " type='submit' value='Watch' id={this.state.card4} onClick={this.handleCardCLick1}/></Link>
    </div>

  </div>
</div>
</section> 
            
            </div>
            </Router>
        );
    }
}
export default LiveStreaming;