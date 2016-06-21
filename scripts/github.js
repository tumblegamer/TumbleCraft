$(function(){
 
 githubApiUrl = "https://api.github.com";
 
 function githubAIP(url){
  $.getJSON(url,function(){
   var items = [];
  $.each( data, function( key, val ) {
    items.push( "<li id='" + key + "'>" + val + "</li>" );
  });
 
  $( this, {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "body" )
  });
 }
 var username = "tumblegamer";
 var jsonUrl = githubApiUrl + "/repos/tumblegamer/TumbleCraft/releases";
 $("#releases").githubAPU(jsonUrl);
});





