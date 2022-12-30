let timeout=150;
let countdownTimer;

function countdown(){
  document.getElementById('fieldset1').style.display = 'none';
  document.getElementById('fieldset2').style.display = 'block';
  document.getElementById('eye').style.display = 'block';
  subLevel = "A";
  document.getElementById('subLevel').innerHTML="SubLevel : "+subLevel;
  level = "1";
  document.getElementById('level').innerHTML="Level : "+level;
    ou();
  countdownTimer = setInterval(function(){
    console.log("uytjygjyg");
    if (timeout>0){
      timeout-=50;
      refreshTime0();
    }
    else if (timeout<=0){
      destroy0();
    }
  }, 1000);
}

function refreshTime0(){
  document.getElementById('time').innerHTML="Daily training : "+timeout;
}

function destroy0(){
  timeout=0;
    clearInterval(countdownTimer);
    refreshTime0();
document.getElementById('win').style.display = 'block';
document.getElementById('win1').style.display = 'block';
}
