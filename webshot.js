
var webshot = require('webshot');

webshot('localhost:3000', 'google.png', function(err) {
  // screenshot now saved to google.png
  //throw err
  //console.log(err)
});
