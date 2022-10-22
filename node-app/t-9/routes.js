
const fs=require('fs')
const requestHandler=(req,res)=>{
   const url=req.url;
   const method=req.method
   if(url==='/'){
    //const filepath=path.join(__dirname,"message.txt");

    fs.readFile("message.text",{encoding:"utf-8"},(err,data)=>{
        if(err){
            console.log(err);
        }
      console.log('data from file'+ data);
    res.write('<html')
    res.write('<head><title>Enter Message</title></head>')
    res.write(`<body>${data}</body`)
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');

    res.write('</html>')

    return res.end();
})
   }
   else if(url ==='/message' && method==='POST'){
    const body=[];
    req.on('data',(chunk)=>{
      body.push(chunk);
    })
    return req.on('end',()=>{
        const parsebody=Buffer.concat(body).toString();
        //console.log(parsebody);
        const message=parsebody.split('=')[1]
        fs.writeFile('message.text',message,(err)=>{
            res.statusCode=302
            res.setHeader('Location','/')
            return res.end();
        });
    });
}
else {
   res.setHeader('Content-Type','text/html')
   res.write('<html')
   res.write('<head><title>Enter Message</title></head>')
    res.write('<body><h1>welcome to my node js project</h1></body>')
   res.write('</html>')
   res.end();
}
}

// module.exports= requestHandler;
//server.listen(4000);
// module.exports={
//     handler:requestHandler,
//     someText:"some hard coded text"
// // }
// module.exports.handler=requestHandler;
// module.exports.someText="some hard coded text";

exports.handler=requestHandler;
exports.someText="some hard coded text"