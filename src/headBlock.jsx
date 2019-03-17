import React from 'react';

class HeadBlock extends React.Component{
  render(){
    return (
      <div className='text-center'>
        <img src="https://republic.ru/images/photos/large/cd8a55ec8c27f9269a1693ca67587961.jpeg" className="img-fluid img-thumbnail w-50" alt="Responsive image" />
        <div className="text-center">
          <p className="text-center" >Сервер – это компьютер, который предназначен для решения определенных задач по выполнению программных кодов, хранению информации, обслуживанию пользователей
            и баз данных. Для обеспечения их бесперебойной работы предоставляется услуга Colocation, позволяющая размещать сервера на специальной оборудованной площадке с
            круглосуточной технической поддержкой, называемой Дата-Центром.</p>
        </div>
      </div>
    )
  }
}

export default HeadBlock