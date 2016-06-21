$(function(){
 
 githubApiUrl = "https://api.github.com";
 
 function githubAPI(url){
  $.getJSON(url,function(){
  $(this).html( "body" );
  });
 }
 var username = "tumblegamer";
 var jsonUrl = githubApiUrl + "/repos/tumblegamer/TumbleCraft/releases";
 $("#releases").githubAPI(jsonUrl);
});





