import React from 'react';
import ReactDOM from 'react-dom';

let text = "Hello, i am Manager!"

ReactDOM.render(
  text, 
  document.getElementById('root')
)

module.hot.accept();