import React from 'react';

class NotFound extends React.Component{
  render(){
    return (
      <div className="alert alert-success notFound" role="alert">
      <h4 className="alert-heading">Упс, а мы не нашли страницу!</h4>
      <p>Искомая страниц не найдена (404)</p>
      <hr />
      <p className="mb-0">Проверьте правильность URL</p>
      <p className="mb-0">Попробуйте повторить позже!</p>
    </div>
    )
  }
}

export default NotFound