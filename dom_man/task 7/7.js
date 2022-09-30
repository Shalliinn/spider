var itemList=document.querySelector('#items');
//parentNode
 console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor='grey';
console.log(itemList.parentNode.parentNode.parentNode); */
//parenElement
 console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor='grey';
console.log(itemList.parentElement.parentElement.parentElement); */

//childNode
console.log(itemList.childNodes);
 console.log(itemList.children);
console.log(itemList.children[1]);
  
itemList.children[1].style.backgroundColor='yellow';
console.log(itemList.firstChild);
console.log(itemList.firstElementChild);

itemList.firstElementChild.textContent='hello1'

// lastchild
 console.log(itemList.lastChild);
console.log(itemList.lastElementChild);

itemList.lastElementChild.textContent='hello1'

//prevsibling
 
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color='green' */
console.log(itemList.nextElementSibling);

//createlement
var newDiv=document.createElement('div');
newDiv.className='hello'

newDiv.id='hello1'

newDiv.setAttribute('title','hello div')
var newDivText=document.createTextNode('hello world');
newDiv.appendChild(newDivText)

//add before head
var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');
console.log(newDiv);

newDiv.style.fontSize='50px'
container.insertBefore(newDiv,h1);

//add after head
var addd=document.querySelector('body .container');
console.log(addd);

var h=document.querySelector('body .card card-body');
addd.insertBefore(newDiv,h)