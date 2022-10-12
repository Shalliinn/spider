const posts=[
    {title:'post one',body:'this is post one'},
    {title:'post two',body:'this is post two'}
]
function getposts(){
    setTimeout(()=>{
let output='';
for(var i=0;i<posts.length;i++)
    output+=`<li>${posts[i].title}</li>`
document.body.innerHTML=output;
    },1000)
}
getposts()

function createpost(post){
    const cpromise= new Promise((resolve,reject)=>{
        setTimeout(() => {
        posts.push(post);
        resolve(`${posts[posts.length-1].title}`)
        }, 1000);
    })
    return cpromise;
   
}
function activitytime(){
    let time=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(new Date())
        },2000)
    })
    return time;
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


const post3={title:'post three',body:'this is post three'}
const post4={title:'post four',body:'this is post four'}
Promise.all([createpost(post3),activitytime()]).then((values)=>{console.log(values)})