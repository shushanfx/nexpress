var Express = require("express");

var app = new Express();

app.get("/", function(req, res){
    res.send("Hello World");
});

app.listen(18080, function(e, ins){
    console.info("System start at " + new Date());
})