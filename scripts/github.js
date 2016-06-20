$(function(){
 function printOutput() {
  var obj = JSON.parse(this.responseText);
  var face = jQuery.getJSON("https://api.github.com/repos/tumblegamer/TumbleCraft/releases?callback=0",0);
  
  var text="";
  /*for (i = 0; i < obj.data.length; i++) { 
   text += obj.data[i].id + "<br>";
  }*/
  $("#releases").html(face.data[1].id);
}

  
}
function githubAIP(DOMString method,
   DOMString url,
   optional boolean async,
   optional DOMString user,
   optional DOMString password)
   {
    var request = new XMLHttpRequest();
request.onload = printOutput;
request.open(method,"https://api.github.com" + url,async,user,password)
request.send()
   }
githubAPI(get,"/repos/tumblegamer/TumbleCraft/releases?callback=0")
var face = jQuery.getJSON("https://api.github.com/repos/tumblegamer/TumbleCraft/releases?callback=0",0);
  $("#releases").html(face.data[1].id);
  $("#releases").html("test");
});





