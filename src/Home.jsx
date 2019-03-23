import React from 'react';

import HeadBlock from './headBlock';
import Nav from './navBar/Nav';

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