const express = require('express');

const app = express();
const port = 3000;

const userRouter = require('./routes/users');

app.set('view engine', 'ejs'); // set the view engine to ejs
app.use("/users", userRouter); // use the user router
app.use(pathRequest); // use the middleware


app.get('/', (req, res, next) => {
    console.log('Request URL:', req.originalUrl);
    //res.send("Welcome to Cone Server...");
    //res.status(200).send("Your server is up and Running..."); //send a status and a message
    //res.json({ message: "Cone Server version 1..." }); // send JSON response
    //res.download('./public/images/1.jpg'); // download a file

    res.render('index', { users : "users" });   // render a view
});




//middleware in express
function pathRequest(req, res, next){
    console.log('Request URL:', req.originalUrl);
    next();
};




//Middleware
/*
app.param( (req, res, next) => {
    console.log('Request URL:', req.originalUrl);
    next();
});
*/

app.listen(port, () => {
    console.log(`Application Server running on port: ${port}`);
}); // listen on port 3000


