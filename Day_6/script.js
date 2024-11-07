function changePara(){
    let p1 = document.querySelector('p');
    p1.innerText = "I am updated";
    p1.style.backgroundColor = "red";
};
changeLink = ()=>{
    let a1 = document.querySelector('a');
    a1.setAttribute('href','https://aktu.ac.in/');
    a1.innerText = "AKTU website"
};