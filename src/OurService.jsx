import React from 'react';
import Nav from './navBar/Nav';

class OurService extends React.Component{
  render(){
    return (
      <div className='main'>
        <header>
          <Nav />
        </header>
        <content>
          <div className="text-center" >
            <h1>Наше приимущество</h1>
            <p className="text-center" >
              Наш сервис очен удобен... 
            </p>
          </div>
        </content>
        <footer>
        </footer>
      </div>
    )
  }
}

export default OurService