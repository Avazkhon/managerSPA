import React from 'react';

class FormUser extends React.Component {
	render() {
    return (
    <div className='text-center'>
    <form className="newUser">
    <div className="form-group row">
      <label htmlFor="inputFirstNamel3" className="col-sm-2 col-form-label">Имя</label>
    <div className="col-sm-10">
      <input name="firstName" className="form-control" id="inputFirstNamel3" placeholder="Ввидите имя" onChange={this.props.handleChange}  />
    </div>
  </div>
  <div className="form-group row">
    <label htmlFor="inputLastNamel3" className="col-sm-2 col-form-label">Фамилия</label>
    <div className="col-sm-10">
      <input name="lastName" className="form-control" id="inputLastNamel3" placeholder="Ввидите фамилию" onChange={this.props.handleChange} />
    </div>
  </div>
  <div className="form-group row">
    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input name="email" className="form-control" id="inputEmail3" placeholder="Ввидите email" onChange={this.props.handleChange} />
    </div>
  </div>
  <div className="form-group row">
    <label htmlFor="inputPhone3" className="col-sm-2 col-form-label">Телефон</label>
    <div className="col-sm-10">
      <input name="phone" className="form-control" id="inputPhone3" placeholder="Ввидите телефон" onChange={this.props.handleChange} />
    </div>
  </div>
  <div className="form-group row">
    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input name="password" type="password" autoComplete="off" className="form-control" id="inputPassword3" placeholder="Password" onChange={this.props.handleChange} />
    </div>
  </div>
  <div className="form-group row">
    <div className="col-sm-10">
      <input  type='button' className="btn btn-primary" value="зарегистрироваться" onClick={this.props.handleSendingUser} / >
    </div>
    <input  type='button' className="btn btn-light" value="войти" onClick={this.props.handleFormState} / >
  </div>
</form>
</div>
  )
  }
}

export default FormUser