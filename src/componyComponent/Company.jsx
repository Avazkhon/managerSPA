import React from 'react';

// this Component
import Nav from '../navBar/Nav';
import Menu from '../sideBarComponents/Menu';
import FormCompony from '../componentForm/FormCompony';

class Company extends React.Component{
  constructor(props) {
    super(props);
    this.state = { createCompany: true }

    this.mainContent = this.mainContent.bind(this);
    this.HendalCreateCompany = this.HendalCreateCompany.bind(this);
    this.hendalCreateState = this.hendalCreateState.bind(this);

  }


  mainContent (){
    return (
      <div>
        <img src="https://rb.ru/media/upload_tmp/shutterstock_390186499.jpg" className="img-fluid img-thumbnail w-50" alt="Responsive image" />
        <div className="text-center">
          <h3 className="text-center" >Желаем вашей компании больших успехов!</h3>
        </div>
      </div>
    )
  }

  HendalCreateCompany() {
    return (
      <div className="menu">
        <button type="button" className="list-group-item list-group-item-action active">
          меню
        </button>
        <button type="button" className="list-group-item list-group-item-action" onClick={ this.hendalCreateState } >
          Create company
        </button>
      </div>
    )
  }

  hendalCreateState () {
    this.setState(state => ({
      createCompany: !state.createCompany
    })); 
    console.log(this.state.createCompany);
  }

  render(){
    return (
      <div className='main'>
        <header>
          <Nav />
        </header>
        <content>
          <div className='text-center'>
            { this.HendalCreateCompany() }
            { this.state.createCompany === true ? this.mainContent() : <FormCompony /> }
          </div>
        </content>
        <footer>
        </footer>
      </div>
    )
  }
}

export default Company