var express = require('express');
var mysql = require('mysql');
var db = require('./database');
var session = require('express-session');//session
var flash = require('express-flash');//flash

var app = express();

var bodyParser = require('body-parser');
//const { stringify } = require('querystring');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(flash());
app.use(session({
   secret: '123456cart',
   resave: false,
   saveUninitialized: true,
   cookie: { maxAge: 60000 }

}))

app.get('/', function (req, res) {
   res.sendFile(__dirname + '/login.html');
});

app.post('/auth', function (req, res) {
   let name = req.body.name;
   let password = req.body.password;
   if (name && password) {

      db.query('SELECT * FROM user WHERE name= ? AND password= ?', [name, password], function (error, result) {

         if (error) {
            throw error;
         }
         if (result.length > 0) {
            req.session.loggedin = true;
            req.session.name = name;
            res.redirect('/register');
         } else {
            res.send('Incorrect Username and/or Password')
         }
         res.end();
      });
   } else {
      res.send('Please enter Username and Password!');
      res.end();
   }
});


app.get('/register', function (req, res) {
   if (req.session.loggedin) {
      res.sendFile(__dirname + '/register.html')
   } else {
      res.send('Please login to view this page!');
   }
});

app.post('/auth', function (req, res) {
   let name = req.body.name;
   let password = req.body.password;
   if (name && password) {

      db.query('SELECT * FROM user WHERE name= ? AND password= ?', [name, password], function (error, result) {

         if (error) {
            throw error;
         }
         if (result.length > 0) {
            req.session.loggedin = true;
            req.session.name = name;
            res.redirect('/register');
         } else {
            res.send('Incorrect Username and/or Password')
         }
         res.end();
      });
   } else {
      res.send('Please enter Username and Password!');
      res.end();
   }
});




app.post('/formsubmit', function (req, res) {
   if (req.session.loggedin) {
      //res.send(JSON.stringify("Hello "+req.body.name+" "+req.body.surname));
      var f_name = req.body.fname;
      var l_name = req.body.lname;
      var email = req.body.email;
      var add = req.body.address;
      var phone = req.body.phone;


      var sql = `INSERT INTO  contactform (fname,lname,email,address,phone)VALUES("${f_name}","${l_name}","${email}","${add}","${phone}")`;
      db.query(sql, function (err, result) {
         if (err) throw err;
         console.log("record inserted");
         req.flash('success', 'Data added succefully');
      });
   } else {
      res.send('Please login to view this page!')
   }
   res.redirect('/register');
   res.end();

});

app.get('/logout', function (req, res) {
   req.session.destroy((err) => {
      res.redirect('/');
   })
})
app.listen(5003, () => {
   console.log("Server is running")
})