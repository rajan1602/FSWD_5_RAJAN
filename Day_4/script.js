function validate(){
    let un = document.getElementById("un").value;
    let pass = document.getElementById("pass").value;

    if(un == "admin" && pass == "admin")
        document.getElementById("res").innerHTML="Login Success";
     else
        document.getElementById("res").innerHTML = "Login Failed";
}
// let x = 12
// console.log(x);
// let y = 14