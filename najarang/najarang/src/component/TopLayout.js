import React from 'react';
import { Button } from 'reactstrap';
const TopLayout=()=>(
    <div className = "container">
        <form>
        <input 
            placeholder="관심있는 내용을 검색하세요!"
            type = "text"
            className="form-control"
        />

    <div className = "container">
            <button type="button" class="btn btn-info">
            자랑글 쓰러가기
        </button>
    </div>  
    </form>
    </div>
    
    
)
export default TopLayout;