import React from 'react';

class Start extends React.Component {
  
  render() {
  	return (
  	  <form className="newUser">
  	  <div className="form-group row">
	    <label htmlFor="inputFirstNamel3" className="col-sm-2 col-form-label">Имя</label>
	    <div className="col-sm-10">
	      <input type="firstName" className="form-control" id="inputFirstNamel3" placeholder="Ввидите имя" />
	    </div>
	  </div>
	  <div className="form-group row">
	    <label htmlFor="inputLastNamel3" className="col-sm-2 col-form-label">Фамилия</label>
	    <div className="col-sm-10">
	      <input type="lastName" className="form-control" id="inputLastNamel3" placeholder="Ввидите фамилию" />
	    </div>
	  </div>
	  <div className="form-group row">
	    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
	    <div className="col-sm-10">
	      <input type="email" className="form-control" id="inputEmail3" placeholder="Email" />
	    </div>
	  </div>
	  <div className="form-group row">
	    <label htmlFor="inputastNickNamel3" className="col-sm-2 col-form-label">Ник</label>
	    <div className="col-sm-10">
	      <input type="nickName" className="form-control" id="inputastNickNamel3" placeholder="Ввидите ник" />
	    </div>
	  </div>
	  <div className="form-group row">
	    <label htmlFor="inputPhone3" className="col-sm-2 col-form-label">Телефон</label>
	    <div className="col-sm-10">
	      <input type="phone" className="form-control" id="inputPhone3" placeholder="Ввидите телефон" />
	    </div>
	  </div>
	  <div className="form-group row">
	    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
	    <div className="col-sm-10">
	      <input type="Password" className="form-control" id="inputPassword3" placeholder="Password" />
	    </div>
	  </div>
	  <div className="form-group row">
	    <div className="col-sm-10">
	      <button type="submit" className="btn btn-primary">зарегистрироваться</button>
	    </div>
	  </div>
	</form>
  	)
  }
}

export default Start