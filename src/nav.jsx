import React from 'react';
import { Link } from 'react-router-dom';

function Button (props) {
  return (
    <li className="nav-item active">
      <Link to={props.link} ><div className="nav-link">{props.name} </div></Link>
    </li>
  )
}

class Nav extends React.Component{
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <Button link="/" name="Главное" />
            <Button link="/ourService" name="Наш сервис" />
            <Button link="/instructions" name="Инструкции" />
            <Button link="/about" name="О нас" />
            <Button link="/start" name="Начать" />
          </ul>
        </div>
      </nav>
    )
  }
}
// link="/start" module start

export default Nav