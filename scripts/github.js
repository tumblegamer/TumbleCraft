function githubAPI(url) {
  url="https://api.github.com" + url;
  var output = [];
   
  $.getJSON(url, function(data) {
    output = data;
  }
    
  return output;
});
