import React from 'react';
import Nav from './Nav';

class Start extends React.Component {

  constructor(props) {
  	super(props);

    this.handleSendingUser = this.handleSendingUser.bind(this);
  }

  handleSendingUser(e) {
  	e.preventDefault();
    let xhr = new XMLHttpRequest;
    let url = `http://localhost:2020/userNew`;
    let newUser = {
      name: {
      	firstName: this.refs.firstName.value,
      	lastName: this.refs.lastName.value
      },
      contact: {
      	email: this.refs.email.value,
      	phone: Number(this.refs.phone.value)
      },
      security: {
      	nickName: this.refs.nickName.value,
      	password: this.refs.password.value
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

  render() {
  	return (
      <div className='start'>
       <header>
        <Nav />
      </header>
  	  <form className="newUser" onSubmit={this.handleSendingUser} >
  	  <div className="form-group row">
	    <label htmlFor="inputFirstNamel3" className="col-sm-2 col-form-label">Имя</label>
	    <div className="col-sm-10">
	      <input ref="firstName" className="form-control" id="inputFirstNamel3" placeholder="Ввидите имя" />
	    </div>
	  </div>
	  <div className="form-group row">
	    <label htmlFor="inputLastNamel3" className="col-sm-2 col-form-label">Фамилия</label>
	    <div className="col-sm-10">
	      <input ref="lastName" className="form-control" id="inputLastNamel3" placeholder="Ввидите фамилию" />
	    </div>
	  </div>
	  <div className="form-group row">
	    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
	    <div className="col-sm-10">
	      <input ref="email" className="form-control" id="inputEmail3" placeholder="Ввидите email" />
	    </div>
	  </div>
	  <div className="form-group row">
	    <label htmlFor="inputastNickNamel3" className="col-sm-2 col-form-label">Ник</label>
	    <div className="col-sm-10">
	      <input ref="nickName" className="form-control" id="inputastNickNamel3" placeholder="Ввидите ник" />
	    </div>
	  </div>
	  <div className="form-group row">
	    <label htmlFor="inputPhone3" className="col-sm-2 col-form-label">Телефон</label>
	    <div className="col-sm-10">
	      <input ref="phone" className="form-control" id="inputPhone3" placeholder="Ввидите телефон" />
	    </div>
	  </div>
	  <div className="form-group row">
	    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
	    <div className="col-sm-10">
	      <input ref="password" type="password" className="form-control" id="inputPassword3" placeholder="Password" />
	    </div>
	  </div>
	  <div className="form-group row">
	    <div className="col-sm-10">
	      <button ref="submit" className="btn btn-primary">зарегистрироваться</button>
	    </div>
	  </div>
	</form>
	</div>
  	)
  }
}

export default Start