import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css'
import { Switch, Route ,Redirect} from 'react-router-dom'
import logo from './images/grad1.jpeg'

import Choose from './Choose';
import { BrowserRouter as Router, Link } from "react-router-dom";

import firebase from 'firebase';


class App extends Component {

constructor(props){
  super(props);

  
const config = {
  apiKey: "AIzaSyB7lyLjnK_73SpWHoeSYIZQWLbHh_iuXfs",
  authDomain: "srarynu.firebaseapp.com",
  databaseURL: "https://srarynu.firebaseio.com",
  projectId: "srarynu",
  storageBucket: "srarynu.appspot.com",
  messagingSenderId: "615781967422"
};
  this.state={
    valid:'',
    emailid:'',
    password:'',
    confirm:'',
    confirmEmail:''
  }
  this.SignIn=this.SignIn.bind(this);
  this.Signup=this.Signup.bind(this);
  this.setVal=this.setVal.bind(this);
  this.emailChange=this.emailChange.bind(this);
  this.ResetPassword=this.ResetPassword.bind(this);
  this.handleSubmit=this.handleSubmit.bind(this);
  this.handleChangeName=this.handleChangeName.bind(this);
  this.handleChangePasswd=this.handleChangePasswd.bind(this);

  firebase.initializeApp(config);
  
}
 
emailChange(event){
  this.setState({confirm:event.target.value})
  }
  handleSubmit(event){
    this.setState({confirmEmail:this.state.confirm})
  }
Signup(){
  let emil=this.state.emailid;
  let pass=this.state.password;
  if(emil!==''&&pass!==''){
  firebase.auth().createUserWithEmailAndPassword(this.state.emailid, this.state.password).catch(function(error) {

    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode)
    console.log(errorMessage)
    
    const begin= 
     <div className="columns">
       Welocome
     </div>

    ReactDOM.render(begin,document.getElementById('root'))
  });
}
else{
  console.log(' sign up not  ok')
}
}

SignIn(){
  let emil=this.state.emailid;
  let pass=this.state.password;
  if(emil!==''&&pass!==''){
  
  firebase.auth().signInWithEmailAndPassword(this.state.emailid, this.state.password).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
    ReactDOM.render('Error in signin',document.getElementById('root'));
  });

  
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      var email = user.email;
      var uid=user.uid;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      console.log('email,isAnonymous,uid,providerData:',email,isAnonymous,uid,providerData);
      //after Auth
      
      sessionStorage.setItem('login','true')
      
   const begin= 
   <Router>
   <div>
   <Route exact path="/choose" component={Choose}/>
 <Redirect to={"/choose"} />
 </div>

</Router>

      console.log(email)

      if(email!==null && user.uid!==null && isAnonymous===false){
        console.log('ok');
       ReactDOM.render(begin,document.getElementById('root'))
      }
    } else {
     console.log('could not signin/signup')
    }
  }); 
}
}


ResetPassword(){
  var auth = firebase.auth();

const cred=<div>
  {this.state.confirm}
 console.log({this.state.confirm})
  </div>
ReactDOM.render(cred,document.getElementById('root'));
let mailid=this.state.confirm
auth.sendPasswordResetEmail(mailid).then(function() {
  ReactDOM.render(<h1>Please check your mail box</h1>,document.getElementById('root'))
}).catch(function(error) {
 console.log(error)
});
}

setVal(email){
this.setState({valid:email})
}

handleChangeName(e){
  this.setState({emailid:e.target.value})
}
handleChangePasswd(e){
  this.setState({password:e.target.value})
}
  render() {

    return (
      
      <div className="main-card">
      
<div class="card">
   <center>

   <div class="card-content login">
        
   <center>
   
<p class="title">
            Streamer
            
        </p>
       
       
</center>
        <div class="field">
            
            <div class="control">
            <label class="label">Email</label>
            <input className="input" type="email" value={this.state.value} onChange={this.handleChangeName} placeholder="Email"/>

            </div>
        </div>
        <div class="field">
          
            <div class="control">
            <label class="label">Password</label>
                  <input className="input" type="password" value={this.state.value} onChange={this.handleChangePasswd} placeholder="Passsword"/><br/>
            </div>
        </div>
       
        <h6 class="subtitle is-6 has-text-centered"></h6>
        <div class="has-text-centered">
        <input className="button is-link is-rounded" type="submit" value="SignIn" onClick={this.SignIn}/>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <input className="button is-link is-rounded" type="submit" value="SignUp" onClick={this.Signup}/> 
        <div class="field">
        <h6 class="subtitle is-6 has-text-centered"></h6>
            <label class="label">Forgot password</label>
            <div class="control">
            <div class="card-content">
            
            <input className="input " type="email" value={this.state.value} onChange={this.emailChange}  placeholder="Email id"/>
            <h6 class="subtitle is-6 has-text-centered"></h6>
              <center>
                  <input className="button is-link is-rounded" type="submit" value="Confirm" onClick={this.ResetPassword}/>
             </center>

           </div>
            </div>
        </div>
        </div>
    </div>
    </center>
    <footer class="card-footer">
   
    </footer>
</div>

      </div>
    );
  

  }
  
}
export  default App;