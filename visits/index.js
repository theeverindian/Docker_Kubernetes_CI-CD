var express = require('express');
var redis = require('redis');

const app = express();

const client = redis.createClient({
    host:'redis-server',
    port:6379
});
client.set('visitCount',0);

app.get('/',(req,res)=>{
    client.get('visitCount',(err,visitCount)=>{
        res.send('Number of visits is : '+visitCount);
        client.set('visitCount',parseInt(visitCount)+1);
    })
})

app.listen(3001,()=>{
    console.log("listening on port 3001")
});