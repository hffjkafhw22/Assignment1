module.exports = function(app){
    //Route to manage user logins
    app.post('/api/auth',function(req,res){
        let users = [{'email':'123@com','password':'123','id':1,'username':'asd','birthdate':'123','age':5},
        {'email':'1234@1234','password':'1234','id':2,'username':'Jodi','birthdate':'123','age':5},
        {'email':'1234@123','password':'123456','id':3,'username':'Sarah','birthdate':'123','age':5}]
      
        if (!req.body) {
          return res.sendStatus(400)
        }
          var customer = {};
          customer.valid = false;
          customer.email = '';
          customer.username = '';
          customer.birthdate = '';
          customer.age = 0;
        for (let i=0;i<users.length;i++){
            if (req.body.email == users[i].email && req.body.password ==users[i].password){
            alert("username:"+this.emailusername);
            customer.valid = true;
            customer.email = users[i].email;
            customer.username = users[i].username;
            customer.birthdate = users[i].birthdate;
            customer.age = users[i].age;
          }
        }
          res.send(customer);
      
      });
    }