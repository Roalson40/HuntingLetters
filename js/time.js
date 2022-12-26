let timeout=150;
let countdownTimer;

function countdown(){
  document.getElementById('fieldset1').style.display = 'none';
  document.getElementById('fieldset2').style.display = 'block';
  document.getElementById('eye').style.display = 'block';
  ou();
  countdownTimer = setInterval(function(){
    if (timeout>0){
      timeout--;
      refreshTime0();
    }
    else if (timeout<=0){
      destroy0();
    }
  }, 1000);
}

function refreshTime0(){
  document.getElementById('time').innerHTML="Time : "+timeout;
}

function destroy0(){
    timeout=0;
    clearInterval(countdownTimer);
    refreshTime0();
}
