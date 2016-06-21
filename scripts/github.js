$(function() {

  githubApiUrl = "https://api.github.com";

  function githubAPI(url) {
    url=githubApiUrl + url
    var text = "";
     $(htmlTag).html("Loading GitHub API...");
     var output = [];
     
      $.getJSON(url, function(data) {
        output = data;
      }
      
      return data
    });
    
});
