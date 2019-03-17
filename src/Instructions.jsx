import React from 'react';

import Nav from "./nav";

class Instructions extends React.Component{
  render(){
    return (
      <div className='main'>
        <header>
          <Nav />
        </header>
        <content>
          <div className="text-center" >
            <h1>Все просто </h1>
            <p className="text-center" >
              для начала прочтите инструкции
            </p>
          </div>
        </content>
        <footer>
        </footer>
      </div>
    )
  }
}

export default Instructions