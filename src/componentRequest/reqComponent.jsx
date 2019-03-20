
class ReqComponent{

  constructor(url , date) {
    this.url = url;
    this.date = date;

  }

  handleSendingUser() {
    let xhr = new XMLHttpRequest;
    let url = `http://localhost:2020/userNew`;
    let newUser = {
  	  name: {
      	firstName: this.date.firstName,
      	lastName: this.date.lastName
      },
      contact: {
      	email: this.date.email,
      	phone: this.date.phone
      },
      security: {
      	nickName: this.date.nickName,
      	password: this.date.password
      }
  	};

    xhr.open("POST", this.url, )
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

    xhr.onreadystatechange = ()=>{
      if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 201){
          console.log(xhr.response)
        }
       console.log(xhr.response)
      }
    xhr.send( JSON.stringify(newUser) )
  }

  handleChange(event) {
  	let value = event.target.value;
  	this.setState({[event.target.name]: event.target.value})
  }
}

export default ReqComponent