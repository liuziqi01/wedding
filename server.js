const express = require('express');
const app = express();
const path = require('path');

// Define the list of pages and their URLs
const pages = [
  { name: 'Floral', url: '/seat/floral' },
  { name: 'Golden Frame', url: '/seat/golden' },
  { name: 'Autumn', url: '/seat/autumn' }
  // Add more pages here
];

app.use(express.static(path.join(__dirname, 'public')));
app.engine('html', require('ejs').renderFile);
//app.set('views', path.join(__dirname, 'views'));
//_app.set('view engine', 'html');

// Serve static files from the "public" directory
app.use(express.static('public'));

// Define a route to serve the HTML file
app.get('/', function(req, res) {
  res.render( path.join(__dirname, 'public/views/') +'links.html', { pages });
});

app.get('/seat/floral', function(req, res) {
  var theme = "floral"
  res.render( path.join(__dirname, 'public/views/') +'seat.html', { theme });
});

app.get('/seat/autumn', function(req, res) {
  var theme = "autumn"
  res.render( path.join(__dirname, 'public/views/') +'seat.html', { theme });
});


app.get('/seat/golden', function(req, res) {
  var theme = "golden"
  res.render( path.join(__dirname, 'public/views/') +'seat.html', { theme });
});


// Start the server
const port =  process.env.PORT || 3000;
app.listen(port, function() {
  console.log('Server is running at http://localhost:' + port);
});
