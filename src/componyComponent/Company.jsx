import React from 'react';
import Nav from '../navBar/Nav';

class Company extends React.Component{
  render(){
    return (
      <div className='main'>
        <header>
          <Nav />
        </header>
        <content>
          <div className='text-center'>
            <img src="https://rb.ru/media/upload_tmp/shutterstock_390186499.jpg" className="img-fluid img-thumbnail w-50" alt="Responsive image" />
            <div className="text-center">
              <h3 className="text-center" >Желаем вашей компании больших успехов!</h3>
            </div>
          </div>
        </content>
        <footer>
        </footer>
      </div>
    )
  }
}

export default Company