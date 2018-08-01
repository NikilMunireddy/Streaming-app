import React from 'react';
import './App.css'

import { BrowserRouter as Router,Link } from "react-router-dom";

class FM  extends React.Component{
    constructor(){
        super();
        this.state={
            card1: 'http://192.168.1.156:8081/home/mayura/Downloads/pubg.mp4/playlist.m3u8',
            card2:'http://192.168.1.146:8081/home/mayura/Downloads/pubg.mp4/playlist.m3u8',
            card3:'http://192.168.1.146:8081/home/mayura/Downloads/pubg.mp4/playlist.m3u8',
            card4:'http://192.168.1.146:8081/home/mayura/Downloads/pubg.mp4/playlist.m3u8',
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
    <div class="column fmimg5 willow is-quarter">
    <p  >Music Channel 1</p>
    <h6 class="subtitle is-6 has-text-centered"></h6>
    <h6 class="subtitle is-6 has-text-centered"></h6>
    <Link to='/play'><input class="button is-link is-rounded " type='submit' value='Listen' id={this.state.card1} onClick={this.handleCardCLick1}/></Link>
    </div>

    <div class="column fmimg2 xpro2 is-quarter" >
      <p>Music Channel 2</p>
      <h6 class="subtitle is-6 has-text-centered"></h6>
    <h6 class="subtitle is-6 has-text-centered"></h6>
    <Link to='/play'><input class="button is-link is-rounded" type='submit' value='Listen' id={this.state.card2} onClick={this.handleCardCLick1}/></Link>
    </div>

    <div class="column fmimg3 willow is-quarter">
      <p>Music Channel 3</p>
    <h6 class="subtitle is-6 has-text-centered"></h6>
    <h6 class="subtitle is-6 has-text-centered"></h6>
    <Link to='/play'><input class="button is-link is-rounded " type='submit' value='Listen' id={this.state.card3} onClick={this.handleCardCLick1}/></Link>
    </div>

    <div class="column fmimg4 clarendon is-quarter">
      <p>Music Channel 4</p>
      <h6 class="subtitle is-6 has-text-centered"></h6>
    <h6 class="subtitle is-6 has-text-centered"></h6>
    <Link to='/play'><input class="button is-link is-rounded " type='submit' value='Listen' id={this.state.card4} onClick={this.handleCardCLick1}/></Link>
    
    </div>
    <div class="column fmimg2 lofi is-quarter">
      <p>Music Channel 5</p>
      <h6 class="subtitle is-6 has-text-centered"></h6>
    <h6 class="subtitle is-6 has-text-centered"></h6>
    <Link to='/play'><input class="button is-link is-rounded " type='submit' value='Listen' id={this.state.card4} onClick={this.handleCardCLick1}/></Link>
    
    </div>

  </div>
</div>
</section> 
            
            </div>
            </Router>
        );
    }
}
export default FM;