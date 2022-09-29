var li=document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].textContent='hello'
li[1].style.fontWeight='bold'
li[2].style.backgroundColor='red';
for(var i=0; i<li.length;i++){
    li[i].style.fontWeight='bold'
}
