let arr = [1,2,45,2,3,34];
// let newArr = arr.map((x) => x*2);
// let newArr = arr.filter((x)=>x%2 ==0).map((x) => x*2);
let newArr = arr
.filter((x) => x % 2 == 0)
.map((x) => x*2)
.reduce((x,y) => x+y, 0);
//let sum = arr.reduce((x,y) => x+y, 0);
console.log(newArr);