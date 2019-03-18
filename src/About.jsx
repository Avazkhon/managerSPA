import React from 'react';

import Nav from './Nav';

class About extends React.Component{
  render(){
    return (
      <div className='main'>
      <header>
        <Nav />
      </header>
        <content>
          <div className="text-center" >
            <h1>Какие мы </h1>
            <p className="text-center" >
              Мы любим хорошую работу
            </p>
          </div>
        </content>
        <footer>
        </footer>
      </div>
    )
  }
}

export default About