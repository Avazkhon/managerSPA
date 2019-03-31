import React from 'react';
export default function messang (props, colback) {
  return (
    <div className="jumbotron">
	  <h1 className="display-4">Регистрация компании</h1>
	  <p className="lead">Вы успешно зарегистрировали копанию. По мере необходимости вы сможете ее дополнить информацией или изменить еe</p>
	  <hr className="my-4" />
	  <p>За дополнительной информацией вы можете обратиться к документаций</p>
	  <p className="lead">
	    <a className="btn btn-primary btn-lg" role="button" onClick={colback} >Ok</a>
	  </p>
    </div>
  )
}