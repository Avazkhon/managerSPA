import React from 'react';

// this Component
import Nav from '../navBar/Nav';
import Menu from '../sideBarComponents/Menu'

class Company extends React.Component{
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div className='main'>
        <header>
          <Nav />
        </header>
        <content>
          <div className='text-center'>
            <Menu arr={["Create company", "List of companies"]} />
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