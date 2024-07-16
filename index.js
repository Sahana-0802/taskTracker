const http = require('http');
const os = require('os');
const mongoose = require('mongoose');

const server = http.createServer (async (req,res) => {
   
  const httpMethod = req.method;
  const pathName = req.method;
  // console.log(pathName);

  const db = mongoose.connect('mongodb+srv://sahanajk8:n8Y0jSmgVdE2FiN4@cluster0.pkcauai.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0&dbName=tasks_tracker',{
    useNewUrlParser : true,
    useUnifiedTopology : true
  })

  if(httpMethod == 'POST' && pathName == '/users')
  {
    try{
      let body = '';
      req.on('data',chunk =>{
        body += chunk.toString();
      });

      req.on('end', async() => {
        try {
          const userData = JSON.parse(body);
          const newUser = new User(userData);
          await newUser.save();
          res.writeHead(200,{'Content-type':'application/json'});
          res.end(JSON.stringify(newUser));
          console.log(newUser);
        } catch{
          res.writeHead(400, {'Content-type':'text/plain'});
          res.end('Invalid user data or user aleady exists');
        }
      });

    }
    catch(error){
      res.end(JSON.stringify({
        message: "Failed to create user",
        error: "Internal Server Error"
      }));
    }
  }
});


server.on('listening',function(){
  console.log('ok, server is running');
});

server.listen(8081);