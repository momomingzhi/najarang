import React from 'react';
import styled from 'styled-components';
import TopLayout from './TopLayout.js';
const Login=()=>(
    <div>
      
      
       <Button>
            로그인
        </Button> 
    </div>
    
);
const Button = styled.button`
    flex: 1;
    border-radius: 50px;
    padding: 5px;
    min-width: 120px;
    color: white;
    font-weight: 600;
    -webkit-appearance: none;
    cursor: pointer;
    &:active,
    &:focus {
      outline: none;
    }
    background-color: ${props => (props.danger ? 'red' : 'purple')}
`;

export default Login;