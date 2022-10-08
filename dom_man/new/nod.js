var obj={num:2}

function add(a){
    return this.num+a
}
console.log(add.call(obj,2))



var obj={num:2}
function add(a,b,c){
    return this.num+a+b+c
}
var arr=[1,2,3]
console.log(add.apply(obj,arr))

var obj={num:2}
function add(a,b,c){
    return this.num+a+b+c
}

var bound=add.bind(obj)
console.log(bound(1,2,3))

var student={age:20}
function add(a,b,c){
   return this.age
}
var bound=add.bind(student)
console.log(bound())	


let mul=function(x,y){
console.log(x*y);
 }
let mul2=mul.bind(this,2,6);
mul2(4)
let mul3=mul.bind(this,3);
mul3(8)

let multiply=function(x){
    return function (y){
        console.log(x*y);
    }
}
let mul2=multiply(2);
mul2(5)



