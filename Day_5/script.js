function validate(){
    let un = document.getElementById('un').value;
    let pass = document.getElementById('pass').value;
    if (un == 'admin' && pass == 'admin'){
       let p1 = document.getElementById('res');
       p1.innerHTML = "Login Success"
    }
    else{
        let p1 = document.getElementById('res');
        p1.innerHTML = "Invalid Credentials";
    }
}