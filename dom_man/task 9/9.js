var filter=document.getElementById('filter');
var itemList=document.getElementById('items')
var form=document.getElementById('addForm')
//filter event
filter.addEventListener('keyup',filterItems)

function filterItems(e){
    //conver text to lowercase
    var text=e.target.value.toLowerCase();
    //get li's
var items=itemList.getElementsByTagName('li');
Array.from(items).forEach(function(item){
    var itemName=item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
        item.style.display='block';
    }
    else{
        item.style.display='none';
    }
})
}

form.addEventListener('submit', addItem);
function addItem(e) {
    e.preventDefault();
    // get input value
var newItem=document.getElementById('item').value;
var newItem1=document.getElementById('item1').value;
//creat new li element
var li=document.createElement('li');
//add class
li.className='list-group-item';
//console.log(li);
//add text node with input value
li.appendChild(document.createTextNode(newItem+' '+newItem1));
itemList.appendChild(li);

}