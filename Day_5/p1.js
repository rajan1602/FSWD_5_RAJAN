// num = 12
// console.log(num)

// let x = '12'
// let num = Number(x)
// let y = '12' % '4'
// console.log(y)
// console.log(typeof(num));

// let b = Boolean(12)
// console.log(b)

// function display(){
//     // let confirm("are u sure to logout");
//     let c = prompt("Enter your name","Rajan");
//     // alert("welcome");
//     alert(c);
// }
// let a = 12;
// let b = '12';
// console.log(a==b);
// console.log(a===b)

// let sayhello=()=>{
//     console.log("Arrow Function");
// }
let sayhello = () => console.log("Arrow Function");
sayhello();

let sum =(x,y)=>{
    return x+y;
}
let res = sum(10,10);
console.log("res is "+res);
console.log(sum(10,10))