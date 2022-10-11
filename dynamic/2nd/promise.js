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
    const userpromise= new Promise((resolve,reject)=>{
setTimeout(resolve,2000,new Date())
    })
    const deletion= new Promise((resolve,reject)=>{
                deletepost().then(getposts)
              arr=[];
              posts.forEach((post)=>
              {
                arr.push(`${post.title}`)
              })
              resolve(arr)        
        })
        
        

Promise.all([cpromise,userpromise]).then(deletion)
Promise.all([deletion]).then((values)=>{console.log(values)})
return cpromise;
}

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



 createpost({title:'post three',body:'this is post three'}).then(getposts).catch(err=>console.log(err))
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






