
//host = "https://192.168.0.103:8443";
//host = "https://192.168.1.5:8443/quiz";
host = "https://94.111.147.123:8443/quiz";

function myFunction() {
  var x = document.getElementById("navigation");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
