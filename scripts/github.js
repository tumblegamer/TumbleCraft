$(function(){
 
 githubApiUrl = "https://api.github.com";
 
 function githubAPI(url){
  $.getJSON(url,function(){
   var items = [];
  $.each( data, function( key, val ) {
    items.push( "<li id='" + key + "'>" + val + "</li>" );
  });
 
  $(this).html( "body" );
  });
 }
 var username = "tumblegamer";
 var jsonUrl = githubApiUrl + "/repos/tumblegamer/TumbleCraft/releases";
 $("#releases").githubAPI(jsonUrl);
});





