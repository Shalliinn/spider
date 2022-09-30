var namei=document.getElementById('name')
var emaili=document.getElementById('email')
localStorage.setItem('userdetailsname','name')
localStorage.setItem('userdetailsemail','email')

var myForm=document.querySelector('#my-form');
myForm.addEventListener('submit',onsubmit);
function onsubmit(e){
    e.preventDefault();
    if(namei.value==='' || emaili.value===''){
        alert('please enter fields')
    }
    else{
let myObj={
    name:namei.value,
    email:emaili.value
}
let myobj_serialized=JSON.stringify(myObj);
localStorage.setItem("myObj",myobj_serialized);
let myobj_deserialized=JSON.parse(localStorage.getItem("myObj"))
    }
}