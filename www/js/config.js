
host = "https://192.168.0.103:8443";
//host = "https://192.168.1.5:8443/quiz";
//host = "https://94.111.147.123:8443/quiz";


function myFunction() {
  var x = document.getElementById("navigation");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function captureAudio(o) {

    if(o=="q")
       navigator.device.capture.captureAudio(captureSuccessQuestion, captureError);
    else if (o=="a")
        navigator.device.capture.captureAudio(captureSuccessAnswer, captureError);
    else if (o=="w1")
        navigator.device.capture.captureAudio(captureSuccessWrong1, captureError);
    else if (o=="w2")
        navigator.device.capture.captureAudio(captureSuccessWrong2, captureError);
    else if (o=="w3")
        navigator.device.capture.captureAudio(captureSuccessWrong3, captureError);
}

function playAudio() {
    media.play();
}

function captureError(e) {
    alert("capture error: "+JSON.stringify(e));
}

function captureSuccessQuestion(s) {
    var a="<audio controls><source src='" + s[0].fullPath + "' type='video/mp4'></audio>";
    document.querySelector("#questionArea").innerHTML = a;
}

function captureSuccessAnswer(s) {
  var a="<audio controls><source src='" + s[0].fullPath + "' type='video/mp4'></audio>";
  document.querySelector("#answerArea").innerHTML = a;
}

function captureSuccessWrong1(s) {
  var a="<audio controls><source src='" + s[0].fullPath + "' type='video/mp4'></audio>";
  document.querySelector("#wrong1Area").innerHTML = a;
}

function captureSuccessWrong2(s) {
  var a="<audio controls><source src='" + s[0].fullPath + "' type='video/mp4'></audio>";
  document.querySelector("#wrong2Area").innerHTML = a;
}

function captureSuccessWrong3(s) {
  var a="<audio controls><source src='" + s[0].fullPath + "' type='video/mp4'></audio>";
  document.querySelector("#wrong3Area").innerHTML = a;
}
  function resetForm() {
      document.getElementById("myForm").reset();
  }
