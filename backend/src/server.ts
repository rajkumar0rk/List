import app from './app';
import config from './config/config'

const app=express();

app.get("/",(req,res)=>{
    res.send("Hello World")
});

app.listen(config.port,()=>{
    console.log(`server listening port from ${config.port}`)
})