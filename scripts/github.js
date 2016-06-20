$(function(){
 function printOutput() {
  var obj = JSON.parse(this.responseText);
  $("#releases").html(obj[1].id);
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





