# Web_server
# CORN WEBSERVER
Creating a Web Server API Using Express.

Requirements:

1. node.js
2. Express - module.
3. Nodemon - module.
4. Mocha - module.
5. Chai - module.

Process:

1. Npm init -y
2. npm install express nodemon mocha chai --save-dev
3. node <filename> or
4. Start nodmone server
5. Create a script:
    "devStart": "nodemon server.js"
6. Run npm run devStart


Views:

You can use a view to renderer for your html templates:
1. ejs
2. pug
Embedded Javascript Templating:

npm install ejs --save-dev
app.set('view engine', 'ejs'); // ejs or pug


mocha and chai:

These tools are used for testing and debugging.
You can use them with Sinon module to spy on the app functions.


Router in Express:

Create a new router for each file in the application.
const router = express.Router()
app.use('/', router)
=> in the Routes folder


concepts : express, routes, rendering, middleware, backend, views, params, responses, requests, testing, 
