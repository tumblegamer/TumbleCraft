function githubAPI(url) {
  url="https://api.github.com" + url;
  var output = [face];
   $("#releases").html("test");
  $.getJSON(url, function(data) {
    output = data;
  }
    
  return output;
});
