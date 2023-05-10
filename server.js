const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.engine('html', require('ejs').renderFile);
//app.set('views', path.join(__dirname, 'views'));
//_app.set('view engine', 'html');

// Serve static files from the "public" directory
app.use(express.static('public'));

// Define a route to serve the HTML file
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/seat/floral', function(req, res) {
  var cssFile = "floral.css"
  res.render( path.join(__dirname, 'public/views/') +'seat.html', { cssFile });
});

app.get('/seat/golden', function(req, res) {
  var cssFile = "golden.css"
  res.render( path.join(__dirname, 'public/views/') +'seat.html', { cssFile });
});


// Start the server
const port =  process.env.PORT || 3000;
app.listen(port, function() {
  console.log('Server is running at http://localhost:' + port);
});
