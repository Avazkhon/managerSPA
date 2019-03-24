import React from 'react';

function Menu(props) {
  let arr = props.arr;

  let element = arr.map((item)=>{
    return <button type="button" className="list-group-item list-group-item-action" key={item}>
      {item}
    </button>
  })

  return (
    <div className="menu">
      <div className="list-group">
      <button type="button" className="list-group-item list-group-item-action active">
        Меню
      </button>
        {element}
      </div>
    </div>
  );
}

export default Menu