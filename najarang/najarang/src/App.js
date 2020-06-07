import React, {  Component } from 'react';
import Header from './component/Header';
import TopLayout from './component/TopLayout';
import MiddleLayout from './component/MiddleLayout';
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
      </div>
      //<h1>App</h1>
    )
    }
 }

export default App;