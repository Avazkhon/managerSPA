import React from 'react';

// this Component
import Nav from '../navBar/Nav';
import Menu from '../sideBarComponents/Menu';
import FormCompony from '../componentForm/FormCompony';
import ReqNewCompany from '../componentRequest/reqNewCompany';

class Company extends React.Component{
  constructor(props) {
    super(props);
    this.state = { createCompany: true }

    this.mainContent = this.mainContent.bind(this);
    this.HendalCreateCompany = this.HendalCreateCompany.bind(this);
    this.hendalCreateState = this.hendalCreateState.bind(this);
    this.handleSendingCompany = this.handleSendingCompany.bind(this);
    this.handleChange = this.handleChange.bind(this);

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
      <div className="text-center menu">
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

  handleSendingCompany() {
    let date = this.state;
    let url = `http://localhost:2020/companyNew`;
    let reqNewCompany = new ReqNewCompany(url, date)
    reqNewCompany.handleSendingUser()
  }

  handleChange(event) {
    let value = event.target.value;
    this.setState({[event.target.name]: value})
  }

  render(){
    return (
      <div className='main'>
        <header>
          <Nav />
        </header>
        <content>
          { this.HendalCreateCompany() }
          <div className='text-center'>
            { this.state.createCompany === true ? this.mainContent() : <FormCompony handleChange={this.handleChange} handleSendingCompany={this.handleSendingCompany} /> }
          </div>
        </content>
        <footer>
        </footer>
      </div>
    )
  }
}

export default Company