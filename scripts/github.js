function printRepoCount() {
    var responseObj = JSON.parse(this.responseText);
    console.log(responseObj.name + " has " + responseObj.public_repos + " public repositories!");
  }
$(document).ready(function(){
  var request = new XMLHttpRequest();
  request.onload = printRepoCount;
  request.open('get', 'https://api.github.com/users/funchal', true);
  $("#releases").html("<b>Hello world!</b>");
  request.send();
});
