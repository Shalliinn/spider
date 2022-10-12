const posts=[
    {title:'post one',body:'this is post one',createdAt:new Date().getTime()},
    {title:'post two',body:'this is post two',createdAt:new Date().getTime()}
]
let intervalId=0;
function getposts(){
clearInterval(intervalId)
setTimeout(()=>{
let output=''
for(var i=0;i<posts.length;i++)
output+=`<li>${posts[i].title}added at ${(new Date().getTime() - posts[i].createdAt)/1000}</li>`
document.body.innerHTML=output

},1000)
}



function createpost(post,callback){
    setTimeout(()=>{
posts.push({...post,createdAt:new Date().getTime()});
callback();
    },3000)
}
getposts()
createpost({title:'post3',body:'this is three'},getposts)
createpost({title:'post4',body:'this is four'},getposts)
