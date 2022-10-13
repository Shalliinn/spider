var Form=document.getElementById('addform')
var exp=document.getElementById('expence');
var desc=document.getElementById('description');
var cate=document.getElementById('category');
var itemlist=document.getElementById('users')
document.addEventListener("submit",addItem)
// localStorage.setItem('userexpense','expence')
// localStorage.setItem('userdescription','description')
// localStorage.setItem('usercategory','category')

function addItem(e){
    e.preventDefault();
    if(exp.value==='' || desc.value==='' || cate.value===''){
        alert('please enter fields')
    }
    else{
        let Obj={
            name:exp.value,
            Emailid:desc.value,
            Phoneno:cate.value
        }
        axios.post("https://crudcrud.com/api/3726483fd944438e95bbbdc1392c6d8e/appoinmentData",Obj)
        .then((response)=>{
            showonscreen(response.data)

            console.log(response)
        })
        .catch((err)=>{
            document.body.innerHTML=document.body.innerHTML+"<h4>something wrong</h4>"
            console.log(err)
        })
       // let Obj_serialized=JSON.stringify(Obj);
//localStorage.setItem(Obj.description,Obj_serialized);
//let Obj_deserialized=JSON.parse(localStorage.getItem("Obj"))

    }
}

 function showonscreen(data){
    var li=document.createElement('li');
    li.className='item';
    li.appendChild(document.createTextNode(`${data.name}- ${data.Emailid}`));
    
    var delbtn=document.createElement('button');
    delbtn.className='delete-btn';
    delbtn.appendChild(document.createTextNode('Delete'));
    li.appendChild(delbtn)
    
    var edibtn=document.createElement('button');
    edibtn.className='edit-btn';
    edibtn.appendChild(document.createTextNode('Edit'));
    li.appendChild(edibtn)
    
    itemlist.appendChild(li)
    
    
        document.addEventListener('click',deleteitem);
    
        function deleteitem(e){
            if(e.target==delbtn){
                if(confirm('Are U sure?')){
                    var li=e.target.parentElement;
                   // localStorage.removeItem(Obj.description);
                    itemlist.removeChild(li)
                }
            }
        }
        document.addEventListener('click',edititem);
    
        function edititem(e){
            if(e.target==edibtn){
                var li=e.target.parentElement;
                // for(var i=0;i<itemlist.getElementsByClassName('item').length;i++){
                //     if(itemlist.getElementsByClassName('item')[i]==li){
                //         let myobj_deserialized1=JSON.parse(itemlist.getElementsByClassName('item')[i].firstChild.textContent);
                //         Form.querySelector('#expence').value=myobj_deserialized1.expence
                //         Form.querySelector('#description').value=myobj_deserialized1.description;
                //         Form.querySelector('#category').value=myobj_deserialized1.category;
                //         localStorage.removeItem(Obj.description);
    
                //     }
                // }
                itemlist.removeChild(li)
            }
        }
    }  
    
 