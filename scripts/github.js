$(document).ready(function(){
  function printRepoCount() {
    var responseObj = JSON.parse(this.responseText);
    console.log(responseObj.name + " has " + responseObj.public_repos + " public repositories!");
  }
  var request = new XMLHttpRequest();
  request.onload = printRepoCount;
  request.open('get', 'https://api.github.com/users/funchal', true)
  request.send()
}
