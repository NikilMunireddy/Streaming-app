import React from 'react';
import OnDemand from './OnDemand';
import ReactDOM from 'react-dom';
import LiveStreaming from './LiveStreaming';
import FM from './FM'
import Play from './Play'
import { Switch, Route ,Redirect} from 'react-router-dom'
import { BrowserRouter as Router, Link } from "react-router-dom";
class Choose extends React.Component{
    constructor(props){
        super(props);
        this.state={
          k:false
        }
        this.OnDemand=this.OnDemand.bind(this);
        this.LiveStreaming=this.LiveStreaming.bind(this);
        this.FMAudio=this.FMAudio.bind(this);
        console.log(this.state.k);
    }
    
    OnDemand(){
        const navigationBar=
        <div>
        <div class="tabs is-toggle is-fullwidth ">
  <ul>
    <li >
      <a onClick={this.LiveStreaming}>
        <span class="icon"><i class="fas fa-image" aria-hidden="true"></i></span>
        <span>Live</span>

      </a>
    </li>
    <li>
      <a onClick={this.FMAudio}>
        <span class="icon"><i class="fas fa-music" aria-hidden="true"></i></span>
        <span>Music</span>
      </a>
    </li>
    <li class="is-active">
      <a onClick={this.OnDemand}>
        <span class="icon"><i class="fas fa-film" aria-hidden="true"></i></span>
        <span>On demand</span>
      </a>
    </li>
  </ul>
</div>
        <OnDemand/>
        
</div>
        ReactDOM.render(navigationBar,document.getElementById('root'))
        
    }

    LiveStreaming(){
        const navigationBar=
        <div>
        <div class="tabs is-toggle is-fullwidth ">
  <ul>
    <li class="is-active">
      <a onClick={this.LiveStreaming}>
        <span class="icon"><i class="fas fa-image" aria-hidden="true"></i></span>
        <span>Live</span>

      </a>
    </li>
    <li>
      <a onClick={this.FMAudio}>
        <span class="icon is-small"><i class="fas fa-music" aria-hidden="true"></i></span>
        <span>Music</span>
      </a>
    </li>
    <li>
      <a onClick={this.OnDemand}>
        <span class="icon is-small"><i class="fas fa-film" aria-hidden="true"></i></span>
        <span>On demand</span>
      </a>
    </li>
  </ul>
</div>
        <LiveStreaming/>
    </div>
    
        ReactDOM.render(navigationBar,document.getElementById('root'))
    }

    FMAudio(){
        const navigationBar=
        <div>
        <div class="tabs is-toggle is-fullwidth ">
  <ul>
    <li >
      <a onClick={this.LiveStreaming}>
        <span class="icon"><i class="fas fa-image" aria-hidden="true"></i></span>
        <span>Live</span>

      </a>
    </li>
    <li class="is-active">
      <a onClick={this.FMAudio}>
        <span class="icon"><i class="fas fa-music" aria-hidden="true"></i></span>
        <span>Music</span>
      </a>
    </li>
    <li>
      <a onClick={this.OnDemand}>
        <span class="icon is-small"><i class="fas fa-film" aria-hidden="true"></i></span>
        <span>On demand</span>
      </a>
    </li>
  </ul>
</div>
        <FM/>
    </div>
     ReactDOM.render(navigationBar,document.getElementById('root'))
    }

render(){
  var stat =sessionStorage.getItem('login')
   if(stat==='true'){
    return(
      <div>
          <div class="tabs is-toggle is-fullwidth is-rounded">
    <ul>
      <li >
        <a onClick={this.LiveStreaming}>
          <span class="icon is-small"><i class="fas fa-image" aria-hidden="true"></i></span>
          <span>Live</span>
  
        </a>
      </li>
      <li>
        <a onClick={this.FMAudio}>
          <span class="icon"><i class="fas fa-music" aria-hidden="true"></i></span>
          <span>Music</span>
        </a>
      </li>
      <li class="is-active">
        <a onClick={this.OnDemand}>
          <span class="icon"><i class="fas fa-film" aria-hidden="true"></i></span>
          <span>On demand</span>
        </a>
      </li>
    </ul>
  </div>
          <OnDemand/>
      </div>
      );
   }
   else{
     return(
       <p>Un privilaged user<br/>
         You cannot access this page unless you login
       </p>
     );
   }
}
}

export default Choose;