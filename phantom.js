var page = require('webpage').create();
var url = 'http://localhost:8000';
var bindFunc = require("function-bind")
page.injectJs("./lib/bind.js")
//  console.log(a)
page.open(url, function (status) {
  //Page is loaded!
  //console.log(status)
  setTimeout(function(){
    page.render("./tmp/foo.png")
    phantom.exit();

  }, 100)

});
//})
