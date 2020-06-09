
import React from 'react';
import { Button } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import "./Header.css"
import Login from './Login.js';

const handleOnClick =()=>{
    console.log('hi');
}
const style = {
 
    backgroundColor : 'b',
    border: '1px solid black',
    
}
//   }
//   const MenuItem = ({active,children,to})=>{
//       <Link to={to}>
//         {children}
//       </Link>
      
//   }
const Header = () => (

    // <div>
    //     <div>
    //         velopert
    //     </div>
    //     <div>
    //         <MenuItem to={'/'}>홈</MenuItem>
    //         <MenuItem to={'/about'}>소개</MenuItem>
    //     </div>
    // </div>
    <div className="login">
        <div>
            <Router>
        <Link  to = "/b" >
            <button type="button" class="btn btn-info" onClick = {handleOnClick}>
                회원가입
            </button>
        </Link>
            <Link  to = "/a" >
                <button type="button" class="btn btn-info" onClick = {handleOnClick}>
                    로그인 
                </button>
            </Link>
            <Route path='/a' component={Login}/>
        </Router>
        </div>
        
       
    </div>   
    

)
export default Header;