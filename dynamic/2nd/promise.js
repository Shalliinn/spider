const posts=[
    {title:'post one',body:'this is post one'},
    {title:'post two',body:'this is post two'}
]
function getposts(){
    setTimeout(()=>{
let output='';
posts.forEach((post,index)=>{
    output+=`<li>${post.title}</li>`
})
document.body.innerHTML=output;
    },1000)
}

function createpost(post){
    let cpromise= new Promise((resolve,reject)=>{
    setTimeout(()=>{
posts.push(post);
const error=false;
if(!error){
    resolve(`${posts[posts.length-1].title}`)
}else{
    reject('error:something went wrong')
}
    },2000)
})
    
return cpromise;
}
function activitytime(){
const userpromise= new Promise((resolve,reject)=>{
       setTimeout(()=>{
             resolve(new Date())
       },2000)
            })
            return userpromise;
        }
        //createpost({title:'post three',body:'this is post three'}).then(getposts).catch(err=>console.log(err))
        const post3={title:'post three',body:'this is post three'}
        const post4={title:'post four',body:'this is post four'}
        //Promise.all([createpost(post3),activitytime()]).then((values)=>{console.log(values)})
        Promise.all([createpost(post4),activitytime()]).then((values)=>{console.log(values)})
        .then(deletepost)
        .then(getposts)
function createpost1(post){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
posts.push(post);
const error=false;
if(!error){
    resolve()
}else{
    reject('error:something went wrong')
}
    },2000)
})
}

function deletepost(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(posts.length>0){
                posts.pop();
                resolve()
            }else{
                reject('array is empty')
            }
        },2000)
    })
}



 
 //createpost({title:'post four',body:'this is post four'}).then(getposts).catch(err=>console.log(err))
// createpost1({title:'post four',body:'this is post four'})
// .then(getposts)
// .then(deletepost)
// .then(getposts)
// .then(deletepost)
// .then(getposts)
// .then(deletepost)
// .then(getposts)
// .then(deletepost)
// .then(getposts)
// .then(deletepost)
// .catch(err=>console.log(err));
// const promise1=Promise.resolve('hello world');
// const promise2=10;
// const promise3=new Promise((resolve,reject)=>
// setTimeout(resolve,2000,'Goodbye'))
// Promise.all([promise1,promise2,promise3]).then(values=>console.log(values))

// const userpromise= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(new Date())
//     },2000)
//         })
//         const deletion= new Promise((resolve,reject)=>{
//                     deletepost().then(getposts)
//                   arr=[];
//                   posts.forEach((post)=>
//                   {
//                     arr.push(`${post.title}`)
//                   })
//                   resolve(arr)        
//             })
            
            
    
    
    //Promise.all([deletion]).then((values)=>{console.log(values)})




