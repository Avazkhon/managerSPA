import React from 'react';
export default function messang (props, colback) {
  return (
    <div className="jumbotron">
	  <h1 className="display-4">props.h1</h1>
	  <p className="lead">props.bigText</p>
	  <hr className="my-4" />
	  <p>props.smallЕext</p>
	  <p className="lead">
	    <a className="btn btn-primary btn-lg" role="button" onClick={colback} >Ok</a>
	  </p>
    </div>
  )
}