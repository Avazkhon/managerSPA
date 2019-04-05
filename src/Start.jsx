import React from 'react';

//this state
import Nav from './navBar/Nav';
import FormUser from './componentForm/formUser';
import ReqComponent from './componentRequest/ReqComponent';
import ReqUserEntry from './componentRequest/reqUserEntry';
import FormEntry from './componentForm/FormEntry';

class Start extends React.Component {

  constructor(props) {
  	super(props);
  	this.state = {
    	firstName: "",
    	lastName: "",
    	email: "",
    	phone: "",
    	password: "",
      formEntry: false,
      button: false
  	}

    this.handleSendingUser = this.handleSendingUser.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getForm = this.getForm.bind(this);
    this.handleFormState = this.handleFormState.bind(this);
    this.handleReqEntryUser = this.handleReqEntryUser.bind(this)
  }

  handleReqEntryUser() {
    let date = this.state;
    if(date.password !== "" || date.email !== "") {
      let reqUserEntry = new ReqUserEntry(date);
      reqUserEntry.handleReqUserEntry()
    }
    return
  }

  handleSendingUser() {
  	let date = this.state;
  	let url = `http://localhost:2020/userNew`;
  	let reqComponentnew = new ReqComponent(url, date)
  	reqComponentnew.handleSendingUser()
  }

  handleChange(event) {
  	let value = event.target.value;
    console.log(value)
  	this.setState({[event.target.name]: event.target.value}, ()=>{
      if(this.state.firstName !== "" &&
      this.state.lastName !== "" && 
      this.state.email.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i) &&
      this.state.phone !== "" &&
      this.state.password !== ""
      ){
        this.setState({button: true})
      }
      else {
        this.setState({button: false})
      }
    })
  }

   handleFormState() {
    this.setState({
      formEntry: !this.state.formEntry,
      password: "",
      email: ""
    })
  }

  getForm(){
    return this.state.formEntry == false ? <FormUser 
       button={this.state.button} handleChange={this.handleChange} handleSendingUser={this.handleSendingUser} handleFormState={this.handleFormState}
    /> : <FormEntry  handleChange={this.handleChange} handleFormState={this.handleFormState} handleReqEntryUser={this.handleReqEntryUser} />
  }

  render() {
  	return (
      <div className='main'>
       <header>
        <Nav />
       </header>
       <content>
       {this.getForm() }
       </content>
       <footer>
       </footer>
	    </div>
  	)
  }
}

export default Start