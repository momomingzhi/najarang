
import React from 'react';
import { Button } from 'reactstrap';
import "./Header.css"
const handleOnClick =()=>{
    console.log('hi');
}
const style = {
 
    backgroundColor : 'b',
    border: '1px solid black',
    

  }
const Header = () => (

    <div className="login">
        
            <button type="button" class="btn btn-info" onClick = {handleOnClick}>
            회원가입
        </button>
        
        
            <button type="button" class="btn btn-info" onClick = {handleOnClick}>
            로그인
        </button>
        
        
    </div>

)
export default Header;