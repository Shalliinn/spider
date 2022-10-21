console.dir(document);
console.log(document.title);
console.log(document.URL);
document.title= 123

console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);
document.all[10].textContent='hello'
console.log(document.forms);
console.log(document.links);
console.log(document.images);
console.log(document.getElementById('header-title'));
var headerTitle=document.getElementById('header-title');
var header =document.getElementById('main-header')
console.log(headerTitle);
headerTitle.textContent='hello';
headerTitle.innerText='goodbye';
headerTitle.innerHTML='<h3>Hello</h3>';
headerTitle.style.borderBottom= 'solid 3px #000'
header.style.borderBottom='solid 3px #000';
console.log(document.getElementsByClassName("title"));
var head=document.getElementsByClassName("title");
head[0].style.color='green'

head[0].style.fontWeight='bold'
console.log(head);
