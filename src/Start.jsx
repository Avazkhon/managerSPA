import React from 'react';

//this state
import Nav from './navBar/Nav';
import FormUser from './componentStart/formUser';
import ReqComponent from './componentRequest/ReqComponent'

class Start extends React.Component {

  constructor(props) {
  	super(props);
  	this.state = {
      	firstName: "",
      	lastName: "",
      	email: "",
      	phone: "",
      	password: ""
  	}

    this.handleSendingUser = this.handleSendingUser.bind(this);
    this.handleChange = this.handleChange.bind(this);
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

  render() {
  	return (
      <div className='start'>
       <header>
        <Nav />
      </header>
  	  <FormUser 
  	    handleChange={this.handleChange} handleSendingUser={this.handleSendingUser}
  	  />
	</div>
  	)
  }
}

export default Start