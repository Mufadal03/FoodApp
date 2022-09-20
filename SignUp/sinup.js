let form = document.querySelector("#form")
form.addEventListener("submit", getData)

let userD=JSON.parse(localStorage.getItem("userData"))||[]
function getData()
{
    event.preventDefault()
    let name = form.name.value
    let email = form.email.value
    let pass = form.password.value
    let number = form.mobile.value

    let user = new Data(name, email, pass, number)
    userD.push(user)
    localStorage.setItem("userData", JSON.stringify(userD))
    window.location.href="../Login/login.html"
}

class Data{
    constructor(name,email,pass,number)
    {
        this.name=name
        this.email = email
        this.password=pass
        this.number=number
    }
}