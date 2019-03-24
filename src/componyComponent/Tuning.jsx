import React from 'react';

import Nav from '../navBar/Nav';

class Tuning extends React.Component{
  render(){
    return (
      <div className='main'>
        <header>
          <Nav />
        </header>
        <content>
          <div className="text-center" >
            <h1>Настройка</h1>
            <p className="text-center" >
              Настройтесь на продуктивную работу
            </p>
          </div>
        </content>
        <footer>
        </footer>
      </div>
    )
  }
}

export default Tuning