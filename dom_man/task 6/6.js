var header=document.querySelector('#main-header');
header.style.borderBottom='solid 4px #000'
var input=document.querySelector('input');
input.value='hellloooo'

var submit=document.querySelector('input[type="submit"]');
submit.value='send'
var item=document.querySelector('.list-group-item');
item.style.color='red';

var secondItem=document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.backgroundColor='green';

var thirdItem=document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.visibility='hidden'



//quaery selectorall
var titles=document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent='hello'
var odd=document.querySelectorAll('li:nth-child(odd)')
for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor='green';

}
