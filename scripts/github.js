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
          text = text + "<li>" + element.name + "<br><a href=" + element.zipball_url + ">Download ZIP</a> | <a href=" + element.tarball_url + ">Download TAR</a> | <a href=" + element.html_url + ">Change Log</a></li><br>";
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
