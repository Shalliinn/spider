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
        localStorage.setItem('userdetailsname',namei.value)
        localStorage.setItem('userdetailsemail',emaili.value)
        
            }
        }
   