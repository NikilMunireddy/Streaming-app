import React from 'react';
import './App.css'
import App from './App'
import ReactHLS from 'react-hls';

class Play  extends React.Component{
    
  render(){
      
      const a=localStorage.getItem('url1')
      console.log(a)
      var stat =sessionStorage.getItem('login')
if(stat==='true'){
    return( 
        <div class="play" > 
        <div>
        
         <br/> <br/>
         <br/>
            <center>
         <ReactHLS url={a}
         width='1000'
         height="1000"
         autoplay='true'
     />
     </center>
     </div>
     <div>
         <br/>
         <br/>
         <center>
         <p is-size-3 is-text-success is-italic has-text-weight-bold>HAPPY WATCHING</p>
         </center>
         <br/>
         <br/> <br/>
         <br/> <br/>
         <br/> <br/>
         <br/>
 
         </div>
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
export default Play;

