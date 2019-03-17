import React from 'react';

import Nav from "./nav";
import HeadBlock from './headBlock';

class Home extends React.Component{
  render(){
    return (
      <div className='main'>
        <header>
          <Nav />
        </header>
        <content>
          <HeadBlock />
        </content>
        <footer>
        </footer>
      </div>
    )
  }
}

export default Home