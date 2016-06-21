$(function(){
 
 githubApiUrl = "https://api.github.com";
 
 function githubAIP(url){
  $.getJSON(url,function(){
   $(this).html(data[1].id)
  });
 }
 var username = "tumblegamer"
 var jsonUrl = githubApiUrl + "/repos/tumblegamer/TumbleCraft/releases";
 $("#releases").githubAPU(jsonUrl);
});





