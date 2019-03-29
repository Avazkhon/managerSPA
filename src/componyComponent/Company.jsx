import React from 'react';

// this Component
import Nav from '../navBar/Nav';
import Menu from '../sideBarComponents/Menu';
import FormCompony from '../componentForm/FormCompony';
import ReqNewCompany from '../componentRequest/reqNewCompany';
import Messang from '../messages/messagesFromTheServer'; 

class Company extends React.Component{
  constructor(props) {
    super(props);
    this.state = { createCompany: true, messagesFromTheServer: false }

    this.mainContent = this.mainContent.bind(this);
    this.hendalCreateCompany = this.hendalCreateCompany.bind(this);
    this.hendalCreateState = this.hendalCreateState.bind(this);
    this.handleSendingCompany = this.handleSendingCompany.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handelMessang = this.handelMessang.bind(this);

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


  hendalCreateCompany() {
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


  handleChange(event) {
    let value = event.target.value;
    this.setState({[event.target.name]: value})
  }


  handleSendingCompany() {
    let date = this.state;
    let url = `http://localhost:2020/companyNew`;
    let reqNewCompany = new ReqNewCompany(url, date, this.setState(state => ({
        messagesFromTheServer: !state.messagesFromTheServer,
        createCompany: !state.createCompany
      })))


    reqNewCompany.handleSendingUser()
  }


  handelMessang(props) {

    return Messang(props, ()=>{
     this.setState(state => ({
        messagesFromTheServer: !state.messagesFromTheServer
      })); 
    })
  }

  hendalCreateState () {
    this.setState(state => ({
      createCompany: !state.createCompany
    }));
  }

  render(){
    return (
      <div className='main'>
        <header>
          <Nav />
        </header>
        <content>
          { this.hendalCreateCompany() }
          <div className='text-center'>
            {this.state.messagesFromTheServer !== false ? this.handelMessang() : ""}
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