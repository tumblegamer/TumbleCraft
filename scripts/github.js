$(function(){
 
 githubApiUrl = "https://api.github.com";
 function githubAPI(url){
  $("#releases").html("Loading GitHub API");
  $.getJSON(url, function(data){
  $("#releases").html(data[0].id);
  });
 }
 var username = "tumblegamer";
 var jsonUrl = githubApiUrl + "/repos/tumblegamer/TumbleCraft/releases";
 $("#releases").html("Loading JSON");
 githubAPI(jsonUrl);
});





