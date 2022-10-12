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

function createpost(post,callback){
    setTimeout(()=>{
posts.push(post);
callback();
    },2000)
}
function createpostnew(post,callback1,callback2){
    setTimeout(()=>{
 callback1(post,callback2);
    },3000)
}
// function createpost5(post,callback1,callback2){
//     setTimeout(()=>{
//  callback1(post,callback2);
//     },3000)
// }
getposts();
createpost({title:'post three',body:'this is post three'},getposts)
createpostnew({title:'post four',body:'this is post four'},createpost,getposts)
createpostnew({title:'post five',body:'this is post five'},createpost,getposts)