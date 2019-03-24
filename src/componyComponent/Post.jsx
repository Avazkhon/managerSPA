import React from 'react';

import Nav from '../navBar/Nav';

class Staff extends React.Component{
  render(){
    return (
      <div className='main'>
        <header>
          <Nav />
        </header>
        <content>
          <div className="text-center" >
            <h1>Статьи </h1>
            <p className="text-center" >
              первая статья: Ура! мы могем!
            </p>
          </div>
        </content>
        <footer>
        </footer>
      </div>
    )
  }
}

export default Staff