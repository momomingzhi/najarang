import React, {  Component } from 'react';
import Header from './component/Header';
import TopLayout from './component/TopLayout';
import MiddleLayout from './component/MiddleLayout';
<<<<<<< HEAD
import Login from './component/Login'
import NavBar from './component/NavBar'
import NaverLogin from 'react-naver-login';
import { Link, Route, BrowserRouter as Router } from "react-router-dom"

class App extends Component {
  render() {
    return(
      <Router>
        <div>
            <Link to='/' >
            <button type="button" class="btn btn-info">
                회원가입
            </button>
            </Link>
           
        
            <Link to='/about' >
              <button type="button" class="btn btn-info">
                로그인 
            </button>
            </Link>
       
     
        <hr />
        <Route path='/' component={TopLayout} exact={true}/>
        <Route path='/about' component={Login} exact={true}/>
=======
import KakaoSignUp from './component/KakaoSignUp';
import { BrowserRouter as Router, Route } from 'react-router-dom';
class App extends Component {
  render() {
    return(
      <div>
          <Header   />
          <TopLayout />
          <MiddleLayout />
          {/* <KakaoSignUp /> */}
            
          
          {/* <Header   />
          <TopLayout /> */}
>>>>>>> 01bace7aceeb11496fd9a15713c9997713d4e281
      </div>
      </Router>
      // <div>
      //   <Header   />
      // </div>
      
    )
 
    //   return(
  //     <div>
          
  //         <Header   />
  //         <TopLayout />
  //         {/* <MiddleLayout />
  //         <NaverLogin 
  // clientId = "Aqpwh33bx4irAD87YKY8"
  // callbackUrl = "http://127.0.0.1:3000/login"
  //   render={(props) => <div onClick={props.onClick}>아아아아</div>}
  //   onSuccess={(naverUser) => console.log('안녕안녕',naverUser)}
  //   onFailure={() => console.error("result")}
  // /> */}
  //         {/* <NaverLogin
  //           clientId = "Aqpwh33bx4irAD87YKY8"
  //           callbackUrl = "http://127.0.0.1:3000/login"
  //           onSuccess={(naverUser) => console.log(naverUser)}
  //           onFailure={() => console.error('실패')}
  //         /> */}
  //     <Router>
  //       <Route exact path ="/sdsf" component={TopLayout} /> 
  //       {/* <Route path = "/a" render={()=>{return(<Login/>)}} />   */}
        
  //     </Router>
      
  //     </div>
  //     //<h1>App</h1>
  //   )
    }
 }

export default App;

//render={props =>{ return( <Login/> )}}