$(function(){
      var text = "";
      alert("text");
      $.each(githubAPI("/repos/tumblegamer/TumbleCraft/releases"), function(index,element) {
          text = text + "<li>" + element.name + "<br><a href=" + element.zipball_url + ">Download ZIP</a> | <a href=" + element.tarball_url + ">Download TAR</a> | <a href=" + element.html_url + ">Change Log</a></li><br>";
      });
      text = "<ul>" + text + "</ul>";
      
      $("#releases").html(text);
    });
