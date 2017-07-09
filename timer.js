var sec = 0;
var min = 0;
var hr = 0;
var lmtimer = window.document.getElementById("inpTimer");
var lmstart = window.document.getElementById("start");
var lmstop = window.document.getElementById("stop");
var lmmsg = window.document.getElementById("msg");
var lmresult = window.document.getElementById("result");
var lmreset = window.document.getElementById("reset");
var lmsend = window.document.getElementById("send");
var interval;

lmstart.addEventListener("click", function(){
  if(interval) return false;
  interval = setInterval("timerTik()", 1000);
});

lmstop.addEventListener("click", function(){
  clearInterval(interval);
  interval = false;
});

lmreset.addEventListener("click", function(){
  lmtimer.value = "00:00:00";
  sec = 0;
  min = 0;
  hr = 0;
  lmmsg.value = "";
});

lmsend.addEventListener("click", function(){
  clearInterval(interval);
  interval = false;
  var li = document.createElement("li");
  var now = new Date();
  var timeStr = "<i>"+addNull(now.getDate())+":"+addNull(now.getMonth())+":"+now.getFullYear()+", "+addNull(now.getHours())+":"+addNull(now.getMinutes())+":"+addNull(now.getSeconds());
  li.innerHTML = timeStr+"</i><br><b>Elapsed time: </b>"+lmtimer.value+"<br>"+"<b>Message: </b>"+lmmsg.value;
  lmresult.appendChild(li);
  lmtimer.value = "00:00:00";
  sec = 0;
  min = 0;
  hr = 0;
});


function timerTik() {
  sec++;
  if(sec == 59) {
    sec = 0;
    min++;
    if(min == 59) {
      min = 0;
      hr++;
    }
  }
  lmtimer.value = addNull(hr)+":"+addNull(min)+":"+addNull(sec);
}

function addNull(etwas) {
  if(etwas < 10){
    etwas = "0"+etwas;
  }
  return etwas;
}