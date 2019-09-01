module.exports = function(app,path){
    //Route for default page for root of site.
    app.get('/',function(req,res){
        let filepath = path.resolve('../dist/Assignment1');
        res.sendFile(filepath);
      });
    }