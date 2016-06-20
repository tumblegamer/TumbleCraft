$(function(){
 function printOutput() {
  var obj = JSON.parse(this.responseText);

while (obj.length > 0) {
    $("#releases").html(obj.pop() + "<br/>");
}


// Output:
// c
// b
// a
  
  
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





