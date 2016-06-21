$(function(){
 
 githubApiUrl = "https://api.github.com";
 function githubAPI(url){
  $("#releases").html("githubAPI");
  $.getJSON(url, function(){
  $("#releases").html("getJSON");
  });
 }
 var username = "tumblegamer";
 var jsonUrl = githubApiUrl + "/repos/tumblegamer/TumbleCraft/releases";
 $("#releases").html("JScript");
 githubAPI(jsonUrl);
});





