
class ReqUserEntry{

  constructor( date, colback) {
    this.date = date;

  }

  handleReqUserEntry() {
    let xhr = new XMLHttpRequest;
    let url = `http://localhost:2020/userStatus`;
    let newCompany = {
      contact: {
        email: this.date.email
      },
      security: {
        password: this.date.password
      }
    };

    xhr.open("POST", url )
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

    xhr.onreadystatechange = ()=>{
      if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200){
          console.log(xhr)
          // colback()
        }
      }
    xhr.send( JSON.stringify(newCompany) )
    console.log(newCompany, this.date)
  }
}

export default ReqUserEntry