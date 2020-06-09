import React, { Component } from 'react';
import styled from 'styled-components';
//import { StyledText } from '../style';
import KaKaoLogin from 'react-kakao-login';


class KakaoSignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: 'kakao'
        }
    }

    responseKaKao = (res) => {
        this.setState({
            data: res
        })
        alert(JSON.stringify(this.state.data))
    }

    responseFail = (err) => {
        alert(err);
    }

    render() {
        return (
            
                <div>
                    <MainLayout>
                        <h1>로그인 방식을 선택해 주세요</h1>
                    </MainLayout>
                    <MiddleLayout >
                        <div className="content" >
                            <h4>카카오로 회원가입</h4>
                            <h6>카카오로 인증하여 회원가입</h6>
                           
                        </div>
                    </MiddleLayout>
                    
                    {/* <StKaKaoLogin>
                        <img src={img} alt="a" onClick={this.loginWithKakao} />
                    </StKaKaoLogin> */}
                    <br></br>
                    <KaKaoBtn
                        jsKey={'d1accb2a33731f137e3be748e693ec79'}
                        buttonText="KaKao"
                        onSuccess={this.responseKaKao}
                        onFailure={this.responseFail}
                        getProfile={true}
                    >아아아
                        </KaKaoBtn>

                </div>

            
        );
    }
}
const MainLayout = styled.div`
    display: flex;
    justify-content:center;
`;
const MiddleLayout = styled.div`
    display:flex;
    width:500px;
    height:50px;
    margin:0 auto;
    margin-top: 50px;
    border: 1px solid lightgrey;
    box-sizing:border-box;
    flex-direction:column;
    .content{
        margin-left: 10px;
        margin-top: 10px;
        display:flex;
        flex-direction:row;
        h4{
            margin: 0 auto;
        }
        h6{
            margin-left: 30px;
            margin-top: 5px;
        }
    }
`;

const StKaKaoLogin = styled.div`
    cursor: pointer;
    /* border-radius:10px; */
    /* width: 200px; */
    /* &:hover{
        box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0.2), 0 0px 20px 0 rgba(0, 0, 0, 0.19);
    } */
`;

const KaKaoBtn = styled(KaKaoLogin)`
    padding: 0;
    width: 190px;
    height: 44px;
    line-height: 44px;
    color: #783c00;
    background-color: #FFEB00;
    border: 1px solid transparent;
    border-radius: 3px;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
    &:hover{
        box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.2)
    }
`

export default KakaoSignUp;