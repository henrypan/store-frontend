/* 
 * server.js
 * 
 * The main file, to be invoked at the command line. Calls app.js to get 
 * the Express app object.
 */

var app = require('./app').init(process.env.PORT || 8080);
var os = require("os");

var locals = {
        title: 		 'Embedded Market',
        description: 'All your Embedded needs at one place',
        author: 	 'J Chakrdhar Rao',
        _layoutFile: true
    };

app.get('/', function(req,res){
    locals.date = new Date().toLocaleDateString();
    res.render('home.ejs', locals);
});

app.get('/version', function(req,res){
    res.send('Hello world v1.1 ' + os.hostname() + '\n');
});

app.get('/*', function(req, res){
    res.render('404.ejs', locals);
});
