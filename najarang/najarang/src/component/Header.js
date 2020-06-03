
import React from 'react';
import { Button } from 'reactstrap';
const handleOnClick =()=>{
    console.log('hi');
}
const style = {
 
    backgroundColor : 'b',
    border: '1px solid black',
    

  }
const Header = () => (

    <div className="header">
                로고
        <Button color="danger" onClick = {handleOnClick}>
            회원가입
        </Button>
        <button onClick = {handleOnClick}>
            로그인
        </button>
    </div>

)
export default Header;