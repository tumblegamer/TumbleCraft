$(function(){
 function printOutput() {
  var responseObj = JSON.parse(this.responseText);
  $("#releases").html(responseObj.name + " has " + responseObj.public_repos + " public repositories!");
}
var request = new XMLHttpRequest();
request.onload = printOutput;
request.open('get', 'https://api.github.com/users/tumblegamer', true)
request.send()
});
