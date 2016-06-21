function githubAPI(url) {
  url="https://api.github.com" + url
  var text = "";
   $(htmlTag).html("Loading GitHub API...");
   var output = [];
   
    $.getJSON(url, function(data) {
      output = data;
    }
    
    return output;
});
