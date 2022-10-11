const posts=[
    {title:'post one',body:'this is post one',createdAt:new Date().getTime()},
    {title:'post two',body:'this is post two',createdAt:new Date().getTime()}
]
let intervalId=0;
function getposts(){
    clearInterval(intervalId);
    setInterval(()=>{
let output='';
for(var i=0;i<posts.length;i++){
    output+=`<li>${posts[i].title}- last updated ${(new Date().getTime() - posts[i].createdAt)/1000}-second ago</li>`
}
document.body.innerHTML=output;
    },1000)
    }


function createpost(post,callback){
    setTimeout(()=>{
posts.push({...post,createdAt:new Date().getTime()});
callback();
    },1000)
}
function createpost4(post,callback){
    setTimeout(()=>{
        posts.push({...post,createdAt:new Date().getTime()});
        callback();
        },3000)
}

getposts();
createpost({title:'post three',body:'this is post three'},getposts)
createpost4({title:'post four',body:'this is post four'},getposts)
