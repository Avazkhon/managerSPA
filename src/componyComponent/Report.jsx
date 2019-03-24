import React from 'react';

import Nav from '../navBar/Nav';

class Report extends React.Component{
  render(){
    return (
      <div className='main'>
        <header>
          <Nav />
        </header>
        <content>
          <div className="text-center" >
            <h1>Отчеты</h1>
            <p className="text-center" >
              Отчет первый: Пока нет очетов!
            </p>
          </div>
        </content>
        <footer>
        </footer>
      </div>
    )
  }
}

export default Report