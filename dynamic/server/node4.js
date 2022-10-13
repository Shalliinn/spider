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
        axios.post("https://crudcrud.com/api/4870f87315874cb184403d9dd48b778f/appoinmentData",Obj)
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
window.addEventListener("DOMContentLoaded",()=>{
    axios.get("https://crudcrud.com/api/4870f87315874cb184403d9dd48b778f/appoinmentData")
    .then((response)=>{
        console.log(response)
         for(var i=0;i<response.data.length;i++){
            showonscreen(response.data[i])
         }
    })
    .catch((error)=>{
        console.log(error);
    })
})

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
    
    
        itemlist.addEventListener('click',deleteitem);
    
        function deleteitem(e){
            if(e.target==delbtn){
                if(confirm('Are U sure?')){
                    var li=e.target.parentElement;
                   // localStorage.removeItem(Obj.description);
                   axios.get(`https://crudcrud.com/api/4870f87315874cb184403d9dd48b778f/appoinmentData`)
                   .then((response)=>{
                       console.log(response)
                        for(var i=0;i<response.data.length;i++){

                            if(li.innerHTML.indexOf(response.data[i].Emailid)!=-1){
                            axios.delete(`https://crudcrud.com/api/4870f87315874cb184403d9dd48b778f/appoinmentData/${response.data[i]._id}`)
                             .then()
                             .catch(err=>console.log(err))
                            }
                        }
                   })
                   .catch((error)=>{
                       console.log(error);
                   })
                    itemlist.removeChild(li)
                }
            }
        }
        document.addEventListener('click',edititem);
    
        function edititem(e){
            if(e.target==edibtn){
                var li=e.target.parentElement;
                axios.get(`https://crudcrud.com/api/4870f87315874cb184403d9dd48b778f/appoinmentData`)
                .then((response)=>{
                for(var i=0;i<response.data.length;i++){
                if(li.innerHTML.indexOf(response.data[i].Emailid)!=-1) {

                    Form.querySelector('#expence').value=response.data[i].name
                  Form.querySelector('#description').value=response.data[i].Emailid;
                      Form.querySelector('#category').value=response.data[i].Phoneno;
                      axios.delete(`https://crudcrud.com/api/4870f87315874cb184403d9dd48b778f/appoinmentData/${response.data[i]._id}`)
                      .then()
                      .catch(err=>console.log(err))

                }
            }
        })
        .catch((error)=>{
            console.log(error);
        })
        itemlist.removeChild(li)
    }
 }
  }
    
    
 