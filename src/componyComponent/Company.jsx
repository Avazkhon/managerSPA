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
    this.state = { createCompany: true,
     messagesFromTheServer: false,
      button: false,
        nameCompany: "",
        shortName: "",
        INN: "",
        ORGN: "",
        phone: "",
        email: "",
        sity: "",
        street: ""
      }

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
    this.setState({[event.target.name]: value}, ()=>{
        if(this.state.nameCompany !== "" &&
          this.state.shortName !== "" &&
          this.state.INN !== "" &&
          this.state.ORGN !== "" &&
          this.state.phone !== "" &&
          this.state.email.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i) &&
          this.state.sity !== "" &&
          this.state.street !== ""
          ) {
          this.setState({button: true});
        }
        else {
          this.setState({button: false})
        }
    })
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
            { this.state.createCompany === true ? this.mainContent() : <FormCompony handleChange={this.handleChange} handleSendingCompany={this.handleSendingCompany} btn={this.state.button} /> }
          </div>
        </content>
        <footer>
        </footer>
      </div>
    )
  }
}

export default Company