var webdriverjs = require('webdriverjs');
var url = "http://localhost:8000"
var record = module.exports = function(url){
  webdriverjs.remote()
    .init()
    .url(url)
}
record(url)
