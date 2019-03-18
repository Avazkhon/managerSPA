import React from 'react';

import HeadBlock from './headBlock';

class Home extends React.Component{
  render(){
    return (
      <div className='main'>
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