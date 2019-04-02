import React from 'react';

class FormCompony extends React.Component {


	render() {
    return (
    <form className="newCompany">
    <div className="form-group row">
      <label htmlFor="inputNameCommponyl3" className="col-sm-2 col-form-label">Названия компании</label>
    <div className="col-sm-10">
      <input name="nameCompany" className="form-control" id="inputNameCommponyl3" placeholder="Ввидите названия" value={this.props.nameCompany} onChange={this.props.handleChange}  />
    </div>
  </div>
  <div className="form-group row">
    <label htmlFor="inputShortNamel3" className="col-sm-2 col-form-label">Сокращенное названия</label>
    <div className="col-sm-10">
      <input name="shortName" className="form-control" id="inputShortNamel3" placeholder="Ввидите сокращенное названия" value={this.props.shortName} onChange={this.props.handleChange} />
    </div>
  </div>
  <div className="form-group row">
    <label htmlFor="inputINNl3" className="col-sm-2 col-form-label">ИНН</label>
    <div className="col-sm-10">
      <input name="INN" className="form-control" id="inputINNl3" placeholder="Ввидите ИНН" value={this.props.INN} onChange={this.props.handleChange} />
    </div>
  </div>
  <div className="form-group row">
    <label htmlFor="inputORGNl3" className="col-sm-2 col-form-label">ОГРН</label>
    <div className="col-sm-10">
      <input name="ORGN" className="form-control" id="inputORGNl3" placeholder="Ввидите ОГРН" value={this.props.ORGN} onChange={this.props.handleChange} />
    </div>
  </div>
  <div className="form-group row">
    <label htmlFor="inputPhone13" className="col-sm-2 col-form-label">Телефон</label>
    <div className="col-sm-10">
      <input name="phone" className="form-control" id="inputPhone13" placeholder="Ввидите телефон" value={this.props.phone} onChange={this.props.handleChange} />
    </div>
  </div>
  <div className="form-group row">
    <label htmlFor="inputEmail13" className="col-sm-2 col-form-label">эл. Почта</label>
    <div className="col-sm-10">
      <input name="email" className="form-control" id="inputEmail13" placeholder="Ввидите эл. почту" value={this.props.email} onChange={this.props.handleChange} />
    </div>
  </div>
  <div className="form-group row">
    <label htmlFor="inputSity13" className="col-sm-2 col-form-label">Город</label>
    <div className="col-sm-10">
      <input name="sity" className="form-control" id="inputSity13" placeholder="Ввидите город" value={this.props.sity} onChange={this.props.handleChange} />
    </div>
  </div>
  <div className="form-group row">
    <label htmlFor="inputStreet13" className="col-sm-2 col-form-label">Адрес</label>
    <div className="col-sm-10">
      <input name="street" className="form-control" id="inputStreet13" placeholder="Ввидите адрес" value={this.props.street} onChange={this.props.handleChange} />
    </div>
  </div>
  <div className="form-group row">
    <div className="col-sm-10">
      <input  type='button' className="btn btn-primary" value="зарегистрироваться" onClick={this.props.btn === true ? this.props.handleSendingCompany : null} / >
    </div>
  </div>
</form>
  )
  }
}

export default FormCompony