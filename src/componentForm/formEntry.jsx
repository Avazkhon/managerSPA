import React from 'react';

class FormEntry extends React.Component {
	render() {
    return (
    <div className='text-center'>
      <form className="formEntry" >
        <div className="form-group row">
          <label htmlFor="inputEmail4" className="col-sm-2 col-form-label" >Email</label>
          <div className="col-sm-10">
            <input name="email" className="form-control" id="inputEmail4" placeholder="Ввидите email" value={this.props.email} onChange={this.props.handleChange} />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputPassword4" className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-10">
            <input name="password" type="password" autoComplete="off" className="form-control" id="inputPassword4" placeholder="Password" value={this.props.password} onChange={this.props.handleChange} />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-10">
            <input  type='button' className="btn btn-light" value="зарегистрироваться" onClick={this.props.handleFormState} / >
          </div>
          <input  type='button' className="btn btn-primary" value="войти" onClick={this.props.handleReqentryUser}/ >
        </div>
      </form>
    </div>
   )
  }
}

export default FormEntry