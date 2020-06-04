import React, {  Component } from 'react';
import Header from './component/Header';
import TopLayout from './component/TopLayout';
import MiddleLayout from './component/MiddleLayout';
class App extends Component {
  render() {
    return(
      <div>
          <Header   />
          <TopLayout />
          <MiddleLayout />
      </div>
      //<h1>App</h1>
    )
    }
 }

export default App;