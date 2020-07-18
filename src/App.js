import React from 'react';
import Navbar from './Components/nav';
import Main from './Components/main';
import Footer from './Components/footer' ;
import Top from './Components/top';


import {Content} from 'react-mdl';

function App() {
  return (
    <div className="demo-big-content">
    <Navbar></Navbar>
      
      <Content>
          <Top></Top>
        <div className="page-content" />
          <Main></Main>
        </Content>
        <br /><br /><br />
       <Footer></Footer>
       


  </div>
  );
}

export default App;
