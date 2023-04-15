const express = require("express");
const https = require("https");
const bodyparser = require("body-parser");
const { write } = require("fs");
const { waitForDebugger } = require("inspector");


const app = express();
app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
    
});

app.post("/",function(req,res){
    
    const id = "3df6836ada8bae1010a0706d2b45f0af";
    const place = req.body.cityy;
    const unitt = req.body.unit;
    let uni = "metric"
    let uname = "Celsius";
   
    if(unitt==='k' ||unitt==='K' ){
        uni = "standard";
        uname = "Kelvin";
       
    }
    else if(unitt==="f" ||unitt==="F" ){
        uni = "imperial";
        uname = "Farenheit "
        

    }
    else{
        uni = "metric";
        
      
    }
    
    
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+place+"&appid="+id+"&units="+uni;

   
 

    https.get(url,function(ress){
    console.log(ress.statusCode);

    ress.on("data",function(data){
        const weatherdata = JSON.parse(data);
        const weatherdes  = weatherdata.weather[0].description;
        const tempp = weatherdata.main.temp;
        const icon  = weatherdata.weather[0].icon;

        const imgurl = "https://openweathermap.org/img/wn/"+ icon +"@2x.png";
        res.writeHead(200, {
        'Content-Type': 'text/html'
    });
        res.write("<html>")
        res.write("<head>")
        res.write("<style>")
        res.write(".content {box-shadow: 5px 5px 8px 5px black;border-radius: 20px;max-width: 500px;margin: 10% auto 10% auto;background: white;padding: 10px;}</style>")
        res.write("<title>"+place+"</title>");
        res.write("</head>")
        res.write("<body bgcolor='#a37fe0'>")
        res.write("<div class='content'>")
        res.write("<center>")
        res.write("<p>The weather is currently "+weatherdes+"<p>");
        res.write("<h1>The Temperature in "+place+" is "+tempp+" "+uname+"</h1>");
        res.write("<img src="+imgurl+">"); 
        res.write("</center>") 
        res.write("</div>")
        res.write("</body>")   
        res.write("</html>")  
        res.end();
    })

})
})
const port = 5000

app.listen(process.env.PORT || port, () => console.log(`Listening on port ${port}`))
