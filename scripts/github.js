$(function(){
 
 githubApiUrl = "https://api.github.com";
 function githubAPI(url){
  $("#releases").html("Loading GitHub API..,");
  
  $.getJSON(url, function(data){
   if(data.length == 0) {
    text = text + '<p>No releases!</p>'; 
   } else {
    $.each(data, function(index) {
     text += "<li>" + data[index].name + "</li>";
    }
    text = "<ul>" + text + "</ul>"
   }
    $("#releases").html(text);
  });
 }
 var username = "tumblegamer";
 var jsonUrl = githubApiUrl + "/repos/tumblegamer/TumbleCraft/releases";
 $("#releases").html("Loading JSON...");
 githubAPI(jsonUrl);
});





