$(function(){
 
 githubApiUrl = "https://api.github.com";
$("#releases").html( "body" );
 function githubAPI(url){
  $.getJSON(url, function(){
  $("#releases").html( "face" );
  });
 }
 var username = "tumblegamer";
 var jsonUrl = githubApiUrl + "/repos/tumblegamer/TumbleCraft/releases";
 githubAPI(jsonUrl);
});





