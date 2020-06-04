import React from 'react';
import { Button } from 'reactstrap';
import './TopLayout.css';

const TopLayout=()=>(
    <div className = "myForm">
        <form className = "interestInput">
        <input 
            placeholder="관심있는 내용을 검색하세요!"
            type = "text"
            className="form-control"
        />

    <div className="button">
            <button type="button" class="btn btn-info">
            자랑글 쓰러가기
            </button>
    </div>
    <div>
        <p class="font-weight-bold">
            토픽 리스트
        </p>
    </div>
    <div className="topicBody">
        
        <div className="a">
            <button className="topic" type="button">
                토픽
            </button>
    </div>
    <div  className="a">
            <button  className="topic" type="button">
                토픽
            </button>
    </div>
    <div  className="a">
            <button  className="topic" type="button">
                토픽
            </button>
    </div>
    <div  className="a">
            <button  className="topic" type="button">
                토픽
            </button>
    </div>
    <div  className="a">
            <button  className="topic" type="button">
                토픽
            </button>
    </div>  
    </div>
    
    </form>
    </div>
    
    
)
export default TopLayout;