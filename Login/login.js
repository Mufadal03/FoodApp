let form = document.querySelector("#form")
form.addEventListener("submit", Verify)
let userInfo = JSON.parse(localStorage.getItem("userData"))
console.log(userInfo)
if (userInfo == null) {
    alert("Please Sign In")
    window.location.href="../SignUp/signup.html"
}
function Verify()
{
    event.preventDefault()
    let email = form.email.value
    let password = form.password.value
   
    let c = 0
    for (let i = 0; i < userInfo.length;i++)
    {
        if (email == userInfo[i].email && password == userInfo[i].password)
        {
            alert("Successfull")
            c++
            window.location.href="../Homepage/index.html"
            return
        }
    }
    if(c==0)alert("Not Valid Credentials")











}