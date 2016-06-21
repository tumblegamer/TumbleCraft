$(function() {

  githubApiUrl = "https://api.github.com";

  function githubAPI(url) {
    var text = "";
     $("#releases").html("Loading GitHub API...");

      $.getJSON(url, function(data) {
      if (data.length == 0) {
        text = text + '<p>No releases!</p>';
      } else {
        $.each(data, function(index,element) {
          text = text + "<li><a href=" + element.html_url + ">" + element.name + "</a></li>";
        });
        text = "<ul>" + text + "</ul>";
      }
       $("#releases").html(text);
    });
  }
  var username = "tumblegamer";
  var jsonUrl = githubApiUrl + "/repos/tumblegamer/TumbleCraft/releases";
  $("#releases").html("Loading JSON...");
  githubAPI(jsonUrl);
});
