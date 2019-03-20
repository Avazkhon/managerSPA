import React from 'react';

//this state
import Nav from './Nav';
import FormUser from './componentStart/formUser'

class Start extends React.Component {

  constructor(props) {
  	super(props);
  	this.state = {
      	firstName: "",
      	lastName: "",
      	email: "",
      	phone: "",
      	nickName: "",
      	password: ""
  	}

    this.handleSendingUser = this.handleSendingUser.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSendingUser() {
    let xhr = new XMLHttpRequest;
    let url = `http://localhost:2020/userNew`;
    let newUser = {
  	  name: {
      	firstName: this.state.firstName,
      	lastName: this.state.lastName
      },
      contact: {
      	email: this.state.email,
      	phone: this.state.phone
      },
      security: {
      	nickName: this.state.nickName,
      	password: this.state.password
      }
  	};

    xhr.open("POST", url, )
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

    xhr.onreadystatechange = ()=>{
      if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 201){
          console.log(xhr.response)
        }
       console.log(xhr.response)
      }
    xhr.send( JSON.stringify(newUser) )
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