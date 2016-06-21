$(function(){
 function printOutput() {
  var obj = JSON.parse(this.responseText);
  
  var text="";
  /*for (i = 0; i < obj.data.length; i++) { 
   text += obj.data[i].id + "<br>";
  }*/
  $("#releases").html(obj[1].id);
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
githubAPI(get,"/repos/tumblegamer/TumbleCraft/releases")
});





