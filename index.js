const http = require('http');

const httpServer = http.createServer(async, (req,res){
const httpMethod = re.method;
const parsedUrl = url.Parse(req.url, true)
const pathName = parsedUrl.pathName;

  mongoose.connect('SOME_URL',{
    useNewUrlParser : true,
    useUnifiedTopology : true
  })
  const db = mongoose.connection();
  db.on('error',()=>{
    console.log("MongoDB connection error");
  });

  db.on('connect',()=>{
    console.log("MongoDB connected");
  })

  if(httpMethod == 'POST' && pathName == 'users')
  {
    try{
      const userObj = JSON.parse(req.body);
      const newUser = new Model();
    }catch{
    }
  }
});
