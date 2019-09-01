var fs = require('fs');

module.exports = function(req, res) {
    var u = req.body.username;
    var p = req.body.password;
    c = u + p;
    console.log(c);

    fs.readFile('./server/data/users.json', 'utf8', function(err, data){
        if(err) throw err;
        let userArray = JSON.parse(data);
        console.log(userArray);
        let i = userArray.findIndex(user =>
                ((user.username ==u) && (user.password == p)));
        if (i == -1) {
            res.send({ "ok": false});
        }else {
            console.log(userArray[i]);
            res.send({"fine": true});
        }

    });
    fs.writeFile('./server/data/users.json', 'utf8', function(err, data){
        if (err) throw err;
        let userArray = JSON.parse(data);
        console.log(userArray);
        let i = userArray.findIndex(user =>
                ((user.username ==u) && (user.password == p)));
        if (i == -1) {
            res.send({ "ok": false});
        }else {
            console.log(userArray[i]);
            res.send({"fine": true});
        }

    });
    }

