$(function(){
 function printRepoCount() {
  var responseObj = JSON.parse(this.responseText);
  $("#releases").html(responseObj.name + " has " + responseObj.public_repos + " public repositories!");
}
var request = new XMLHttpRequest();
request.onload = printRepoCount;
request.open('get', 'https://api.github.com/users/tumblegamer', true)
request.send()
});
