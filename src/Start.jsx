import React from 'react';
import Nav from './Nav';

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
  	  <form className="newUser">
  	  <div className="form-group row">
	    <label htmlFor="inputFirstNamel3" className="col-sm-2 col-form-label">Имя</label>
	    <div className="col-sm-10">
	      <input name="firstName" className="form-control" id="inputFirstNamel3" placeholder="Ввидите имя" onChange={this.handleChange}  />
	    </div>
	  </div>
	  <div className="form-group row">
	    <label htmlFor="inputLastNamel3" className="col-sm-2 col-form-label">Фамилия</label>
	    <div className="col-sm-10">
	      <input name="lastName" className="form-control" id="inputLastNamel3" placeholder="Ввидите фамилию" onChange={this.handleChange} />
	    </div>
	  </div>
	  <div className="form-group row">
	    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
	    <div className="col-sm-10">
	      <input name="email" className="form-control" id="inputEmail3" placeholder="Ввидите email" onChange={this.handleChange} />
	    </div>
	  </div>
	  <div className="form-group row">
	    <label htmlFor="inputastNickNamel3" className="col-sm-2 col-form-label">Ник</label>
	    <div className="col-sm-10">
	      <input name="nickName" className="form-control" id="inputastNickNamel3" placeholder="Ввидите ник" onChange={this.handleChange} />
	    </div>
	  </div>
	  <div className="form-group row">
	    <label htmlFor="inputPhone3" className="col-sm-2 col-form-label">Телефон</label>
	    <div className="col-sm-10">
	      <input name="phone" className="form-control" id="inputPhone3" placeholder="Ввидите телефон" onChange={this.handleChange} />
	    </div>
	  </div>
	  <div className="form-group row">
	    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
	    <div className="col-sm-10">
	      <input name="password" type="password" className="form-control" id="inputPassword3" placeholder="Password" onChange={this.handleChange} />
	    </div>
	  </div>
	  <div className="form-group row">
	    <div className="col-sm-10">
	      <input  type='button' className="btn btn-primary" value="зарегистрироваться" onClick={this.handleSendingUser} / >
	    </div>
	  </div>
	</form>
	</div>
  	)
  }
}

export default Start