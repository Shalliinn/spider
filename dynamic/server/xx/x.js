var Form=document.getElementById('addform')
var exp=document.getElementById('expence');
var desc=document.getElementById('description');
var cate=document.getElementById('category');
var itemlist=document.getElementById('users')
document.addEventListener("submit",addItem)

function addItem(e){
    e.preventDefault();
    if(exp.value==='' || desc.value==='' || cate.value===''){
        alert('please enter fields')
    }
    else{
        let Obj={
            expence:exp.value,
            description:desc.value,
            category:cate.value
        }
        sub(Obj)
    }
}
async function sub(Obj){
   let x= await axios.post("https://crudcrud.com/api/e734755281494cb0b5d2d6d7c268cd0f/appoinmentData",Obj)
   showonscreen(x.data)

}

async function Adde(){
    let y= await axios.get("https://crudcrud.com/api/e734755281494cb0b5d2d6d7c268cd0f/appoinmentData")
    for(var i=0;i<y.data.length;i++){
        showonscreen(y.data[i])
     }
}
window.addEventListener("DOMContentLoaded",Adde)

async function del(li){
    let z=await axios.get("https://crudcrud.com/api/e734755281494cb0b5d2d6d7c268cd0f/appoinmentData")
    for(var i=0;i<z.data.length;i++){
        if(li.innerHTML.indexOf(z.data[i].description)!=-1){
            axios.delete(`https://crudcrud.com/api/e734755281494cb0b5d2d6d7c268cd0f/appoinmentData/${z.data[i]._id}`)
        }
    }
}
async function addii(li){
    let z=await axios.get("https://crudcrud.com/api/e734755281494cb0b5d2d6d7c268cd0f/appoinmentData")
    for(var i=0;i<z.data.length;i++){
        if(li.innerHTML.indexOf(z.data[i].description)!=-1){
            Form.querySelector('#expence').value=z.data[i].expence
                        Form.querySelector('#description').value=z.data[i].description
                        Form.querySelector('#category').value=z.data[i].category
            axios.delete(`https://crudcrud.com/api/e734755281494cb0b5d2d6d7c268cd0f/appoinmentData/${z.data[i]._id}`)
        }
    }
}

function showonscreen(data){
    var li=document.createElement('li');
    li.className='item';
    //console.log(`${data.expence}`)
    li.appendChild(document.createTextNode(`${data.expence}- ${data.description}`));
    
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
                   del(li)
                            
                         }
                
                 
                    //localStorage.removeItem(Obj.description);
                    itemlist.removeChild(li)
                }
            }
            document.addEventListener('click',edititem);
    
            function edititem(e){
                if(e.target==edibtn){
                    var li=e.target.parentElement;
                    addii(li)
                   
                
                itemlist.removeChild(li)
            }
        }
       
       
    }  
