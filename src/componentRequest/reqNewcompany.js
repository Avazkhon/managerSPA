class ReqNewCompany{

  constructor(url , date) {
    this.url = url;
    this.date = date;

  }

  handleSendingUser() {
    let xhr = new XMLHttpRequest;
    let url = `http://localhost:2020/companyNew`;
    let newCompany = {
      name: {
        nameCompany: this.date.nameCompany,
        shortName: this.date.shortName,
      },
      stateRegister: {
        INN:this.date.INN,
        ORGN:this.date.ORGN
      },
      address: {
        sity: this.date.sity,
        street: this.date.street
      },
      contact: {
        email: this.date.email,
        phone: this.date.phone
      },
    };

    xhr.open("POST", url )
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

    xhr.onreadystatechange = ()=>{
      if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200){
          console.log(xhr.response)
        }
      }
    xhr.send( JSON.stringify(newCompany) )
  }

  handleChange(event) {
  	let value = event.target.value;
  	this.setState({[event.target.name]: event.target.value})
  }
}

export default ReqNewCompany