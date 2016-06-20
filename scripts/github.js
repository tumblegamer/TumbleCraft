
$(document).ready(function(){
 // Create a new request object
var request = new XMLHttpRequest();

// Initialize a request
request.open('get', 'https://api.github.com/users/tumblegamer')
// Send it
request.send()
});
