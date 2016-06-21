$(function(){
 
 githubApiUrl = "https://api.github.com";
 function githubAPI(url){
  $("#releases").html("githubAPI");
  $.getJSON(url, function(data){
  $("#releases").html(data);
  });
 }
 var username = "tumblegamer";
 var jsonUrl = githubApiUrl + "/repos/tumblegamer/TumbleCraft/releases";
 $("#releases").html("JScript");
 githubAPI(jsonUrl);
});





