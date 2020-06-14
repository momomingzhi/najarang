import React, {  Component } from 'react';
import Header from './component/Header';
import TopLayout from './component/TopLayout';
import MiddleLayout from './component/MiddleLayout';
import Login from './component/Login'
import KakaoSignUp from './component/KakaoSignUp'
import NavBar from './component/NavBar'
import NaverLogin from 'react-naver-login';
import styled from 'styled-components';
import { Link, Route, BrowserRouter as Router } from "react-router-dom"

class App extends Component {
  
  render() {
    return(
      // <Layout>
      //   <div className="btn">
      //     <button>
      //       안녕
      //     </button>
      //     <button>
      //       바이
      //     </button>
      //   </div>
      // </Layout>
      <Router>
        <div>
          <Layout>
            <headerBtn>
            <Link to='/' >
            <button type="button" class="btn btn-info">
                회원가입
            </button>
            </Link>
            <Link to='/login' >
              <button type="button" class="btn btn-info">
                로그인 
            </button>
            </Link>
            </headerBtn>
          </Layout>
            
       
     
        <hr />
        <Route path='/' component={TopLayout} exact={true}/>
        <Route path='/login' component={KakaoSignUp} exact={true}/>
      </div>
      </Router>
      
      
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
 const Layout = styled.div`
     display: flex;
    flex-direction:row;
    justify-content:flex-end;
     .btn{
      border-width:2;
      width: 100px;
      height:50px;
     }
 `;
 const headerBtn = styled.div`

    justify-content:flex-end;
     background-color:blue;
     margin-left: 100px;
     color:blue;
 `;

export default App;

//render={props =>{ return( <Login/> )}}