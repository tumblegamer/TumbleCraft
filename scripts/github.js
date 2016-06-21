function githubAPI(url) {
  var output = [];
   $("#releases").html("test");
  $.getJSON("https://api.github.com" + url, function(data) {
    output = data;
  }
    
  return output;
});
