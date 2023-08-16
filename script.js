var api_key = 'key-7519d268932efc4937026b20be44b8f8';
var domain = 'sandbox97428c18f58e4084903e30bd13db8d76.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
 
var data = {
  from: 'Excited User <udit4854.be22@chitkara.edu.in>',
  to: 'udit4854.be22@chitkara.edu.in',
  subject: 'Hello',
  text: 'Testing some Mailgun awesomeness!'
};
const express = require('express');
const bodyParse= require('body-parser');
const app = express();

app.use(bodyParse.urlencoded({extended:true}))
app.use(express.static("Public"));
app.get("/",function(req,res){  
    res.sendFile(__dirname+"/index.html")
})

app.listen(5050, function(req, rev)
{
    console.log('server is running on 8080');
})
app.post('/',function(req,res){
    const firstname = req.body.first_name;
    const lastnaem = req.body.last_name;
    const email= req.body.email;
    console.log(req.body);
    mailgun.messages().send(data, function (error, body) {
        if (error){
           console.log(error);}
        else {
            console.log(body);
           }
        
       })});

