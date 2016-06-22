$(function(){
      var text = "";
      alert("face");
      var releasesArray = githubAPI("/repos/tumblegamer/TumbleCraft/releases");
      
      $.each(releasesArray, function(index,element) {
          text = text + "<li>" + element.name + "<br><a href=" + element.zipball_url + ">Download ZIP</a> | <a href=" + element.tarball_url + ">Download TAR</a> | <a href=" + element.html_url + ">Change Log</a></li><br>";
      });
      text = "<ul>" + text + "</ul>";
      alert(text);
      alert(releasesArray.toString());
      
      $("#releases").html(text);
    });
