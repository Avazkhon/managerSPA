import React from 'react';

//this state
import Nav from './navBar/Nav';
import FormUser from './componentForm/formUser';
import ReqComponent from './componentRequest/ReqComponent';
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
      formEntry: false
  	}

    this.handleSendingUser = this.handleSendingUser.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getForm = this.getForm.bind(this);
    this.handleFormState = this.handleFormState.bind(this);
  }

  handleSendingUser() {
  	let date = this.state;
  	let url = `http://localhost:2020/userNew`;
  	let reqComponentnew = new ReqComponent(url, date)
  	reqComponentnew.handleSendingUser()
  }

  handleChange(event) {
  	let value = event.target.value;
  	this.setState({[event.target.name]: event.target.value})
  }

   handleFormState() {
    this.setState({formEntry: !this.state.formEntry})
  }

  getForm(){
    return this.state.formEntry == false ? <FormUser 
        handleChange={this.handleChange} handleSendingUser={this.handleSendingUser} handleFormState={this.handleFormState}
    /> : <FormEntry  handleFormState={this.handleFormState} />
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