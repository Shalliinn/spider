const httP=require('http');
// function rqlistner(req,res){

// }
//httP.createServer(rqlistner)
// httP.createServer(function(req,res){

// });
const server=httP.createServer((req,res)=>{
    console.log('shalin');
})
server.listen(4000);