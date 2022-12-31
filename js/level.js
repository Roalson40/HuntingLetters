let subLevel = "null";
let level = "null";
let characters = new Array("a","b","c");
let characters1 = new Array("a2","b2","c2","d2","e2","f2");
let characters2 = new Array("a3","b3","c3","d3","e3","f3","g3","h3","i3","j3","k3","l3","m3");
let characters3 = new Array("a4","b4","c4","d4","e4","f4","g4","h4","i4","j4","k4","l4","m4","n4","o4","p4","q4","r4","s4","t4","u4","v4","w4","x4","y4","z4");
let index = 0;
let symbol1 = "Eye : Right";
let counterVal = 0;
let i = 2000;
let timeout=150;
let countdownTimer;
let plate = document.getElementById("plate");

document.getElementById('btn1').onclick = () => iiii();
document.getElementById('btn2').onclick = () => iii();
window.onload = function (){
  let body = document.getElementById('counter-label');
  setInterval(decrease,1000)
  decrease();
  function decrease(){
    if (subLevel === "D"){
      i-=50;
     body.innerHTML = "Score : " + i;
    }
  }
  read();
  if (level === "1" && subLevel === "A"){
    countdown();
    level = "1";
    document.getElementById('level').innerHTML="Level : "+ level;
    subLevel = "A";
    document.getElementById('subLevel').innerHTML="SubLevel : "+ subLevel;
    console.log("111111")
  }
  else if (level === "1" && subLevel === "B"){
    countdown();
    level = "1";
    document.getElementById('level').innerHTML="Level : "+ level;
    subLevel = "B";
    document.getElementById('subLevel').innerHTML="SubLevel : "+ subLevel;
    document.getElementById('fieldset2').style.display = 'none';
    document.getElementById('fieldset3').style.display = 'block';
    ou1();
  }
  else if (level === "1" && subLevel === "C"){
    countdown();
    level = "1";
    document.getElementById('level').innerHTML="Level : "+ level;
    subLevel = "C";
    document.getElementById('subLevel').innerHTML="SubLevel : "+ subLevel;
    document.getElementById('fieldset2').style.display = 'none';
    document.getElementById('fieldset4').style.display = 'block';
    ou2();
  }
  else if (level === "1" && subLevel === "D"){
    countdown();
    level = "1";
    document.getElementById('level').innerHTML="Level : "+ level;
    subLevel = "D";
    document.getElementById('subLevel').innerHTML="SubLevel : "+ subLevel;
    document.getElementById('fieldset2').style.display = 'none';
    document.getElementById('fieldset5').style.display = 'block';
    ou3();
  }
  else if (level === "2" && subLevel === "A"){
    countdown();
    level = "2";
    document.getElementById('level').innerHTML="Level : "+ level;
    console.log("111111")
  }
  else if (level === "2" && subLevel === "B"){
    countdown();
    level = "2";
    document.getElementById('level').innerHTML="Level : "+ level;
    subLevel = "B";
    document.getElementById('subLevel').innerHTML="SubLevel : "+ subLevel;
    console.log("111111")
  }
  else if (level === "2" && subLevel === "C"){
    countdown();
    level = "2";
    document.getElementById('level').innerHTML="Level : "+ level;
    subLevel = "C";
    document.getElementById('subLevel').innerHTML="SubLevel : "+ subLevel;
    console.log("111111")
  }
  else if (level === "2" && subLevel === "D"){
    countdown();
    level = "2";
    document.getElementById('level').innerHTML="Level : "+ level;
    subLevel = "D";
    document.getElementById('subLevel').innerHTML="SubLevel : "+ subLevel;
    console.log("111111")
  }
}

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
      timeout-=10;
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


function classColor(){
  let oUl =document.getElementsByClassName("before");
  for (let i=0;i<oUl.length;i++) {
    oUl[i].style.background= "blue";
    }
}
function iiii(){
  change();
  refresh();
  document.getElementById('win').style.display = 'none';
  document.getElementById('win1').style.display = 'none';
}

function iii(){
  timeout = 150;
  refreshTime0();
  countdownTimer = setInterval(function(){
    console.log("uytjygjyg");
    if (timeout>0){
      timeout-=10;
      refreshTime0();
    }
    else if (timeout<=0){
      destroy0();
    }
  }, 1000);
  document.getElementById('win').style.display = 'none';
  document.getElementById('win1').style.display = 'none';
}

function refresh(){
  timeout = 150;
  subLevel = "null";
  level = "null";
  save();
location.reload();
}

function levelDown(){
  if (subLevel === "D"){
    document.getElementById('fieldset5').style.display = 'none';
    document.getElementById('fieldset4').style.display = 'block';
    subLevel = "C";
    document.getElementById('subLevel').innerHTML="SubLevel : "+subLevel;
  }
  else if (subLevel === "C"){
    document.getElementById('fieldset4').style.display = 'none';
    document.getElementById('fieldset3').style.display = 'block';
    subLevel = "B";
    document.getElementById('subLevel').innerHTML="SubLevel : "+subLevel;
  }
  else if (subLevel === "B"){
    document.getElementById('fieldset3').style.display = 'none';
    document.getElementById('fieldset2').style.display = 'block';
    subLevel = "A";
    document.getElementById('subLevel').innerHTML="SubLevel : "+subLevel;
  }
}

function change(){
  if (symbol1 === "Eye : Right"){
    symbol1 = "Eye : Left";
    document.getElementById('eye').innerHTML = symbol1;
  }
  else if (symbol1 === "Eye : Left"){
    symbol1 = "Eye : Right";
    document.getElementById('eye').innerHTML = symbol1;
  }
}

function reset(){
  // let baba = document.querySelectorAll(".elcText");
  // for (let i = 0; i < baba.length; i++) {
  //
  //   if (baba[i].classList.item(i)==="before"){
  //     //console.log(baba[i].classList.item(i));
  //     baba[i].classList.remove("before");
  //   }
  //   console.log(baba[i].classList.item(i));
  // }
  save();
  location.reload();
}

function save(){
  localStorage.setItem("B",subLevel)
  localStorage.setItem("t",timeout)
  localStorage.setItem("u",level)
  localStorage.setItem("h",symbol1);
}

function read(){
  // document.getElementById('eyes').innerHTML = localStorage.getItem("e");
  if (localStorage.getItem("t") !== null){
    timeout=localStorage.getItem("t");
    document.getElementById("time").innerHTML = 'Daily training : ' + localStorage.getItem("t");
    subLevel=localStorage.getItem("B");
    level=localStorage.getItem("u");
    document.getElementById("subLevel").innerHTML = 'SubLevel : ' + localStorage.getItem("B");
    document.getElementById("level").innerHTML = 'Level : ' + localStorage.getItem("u");
    symbol1=localStorage.getItem("h");
    document.getElementById("eye").innerHTML = localStorage.getItem("h");
  }








  // symbol2=localStorage.getItem("e")


}

function increment() {

  updateDisplay0(counterVal+=10);

}

function decrement(){

  updateDisplay0(counterVal-=10);

}

function resetCounter() {
  counterVal = 0;
  updateDisplay0(counterVal);
}

function updateDisplay0(val) {
  document.getElementById("counter-label").innerHTML = "Score : " + val;
}

function ou(){

  let randomBgIndex = Math.floor( Math.random() * 10 );
  if (randomBgIndex === 0){
    document.getElementById("ok1").style.display = 'block';
    document.getElementById("ok2").style.display = 'none';
    document.getElementById("ok3").style.display = 'none';
    document.getElementById("ok4").style.display = 'none';
    document.getElementById("ok5").style.display = 'none';
    document.getElementById("ok6").style.display = 'none';
    document.getElementById("ok7").style.display = 'none';
    document.getElementById("ok8").style.display = 'none';
    document.getElementById("ok9").style.display = 'none';
    document.getElementById("ok10").style.display = 'none';
  }
  if (randomBgIndex === 1){

    document.getElementById('ok1').remove();
    // let ok1 = document.getElementById("ok1").children;
    // for (let i = 0; i < ok1.length; i++) {
    //   ok1[i].classList.add("before")
    // }
    document.getElementById("ok2").style.display = 'block';
    document.getElementById("ok3").style.display = 'none';
    document.getElementById("ok4").style.display = 'none';
    document.getElementById("ok5").style.display = 'none';
    document.getElementById("ok6").style.display = 'none';
    document.getElementById("ok7").style.display = 'none';
    document.getElementById("ok8").style.display = 'none';
    document.getElementById("ok9").style.display = 'none';
    document.getElementById("ok10").style.display = 'none';
  }
  if (randomBgIndex === 2){

    document.getElementById('ok1').remove();
    // let ok1 = document.getElementById("ok1").children;
    // for (let i = 0; i < ok1.length; i++) {
    //   ok1[i].classList.add("before")
    // }

    document.getElementById('ok2').remove();
    // let ok2 = document.getElementById("ok2").children;
    // for (let i = 0; i < ok2.length; i++) {
    //   ok2[i].classList.add("before")
    // }
    document.getElementById("ok3").style.display = 'block';
    document.getElementById("ok4").style.display = 'none';
    document.getElementById("ok5").style.display = 'none';
    document.getElementById("ok6").style.display = 'none';
    document.getElementById("ok7").style.display = 'none';
    document.getElementById("ok8").style.display = 'none';
    document.getElementById("ok9").style.display = 'none';
    document.getElementById("ok10").style.display = 'none';
  }
  if (randomBgIndex === 3){

    document.getElementById('ok1').remove();
    // let ok1 = document.getElementById("ok1").children;
    // for (let i = 0; i < ok1.length; i++) {
    //   ok1[i].classList.add("before")
    // }

    document.getElementById('ok2').remove();
    // let ok2 = document.getElementById("ok2").children;
    // for (let i = 0; i < ok2.length; i++) {
    //   ok2[i].classList.add("before")
    // }

    document.getElementById('ok3').remove();
    // let ok3 = document.getElementById("ok3").children;
    // for (let i = 0; i < ok3.length; i++) {
    //   ok3[i].classList.add("before")
    // }
    document.getElementById("ok4").style.display = 'block';
    document.getElementById("ok5").style.display = 'none';
    document.getElementById("ok6").style.display = 'none';
    document.getElementById("ok7").style.display = 'none';
    document.getElementById("ok8").style.display = 'none';
    document.getElementById("ok9").style.display = 'none';
    document.getElementById("ok10").style.display = 'none';
  }
  if (randomBgIndex === 4){

    document.getElementById('ok1').remove();
    // let ok1 = document.getElementById("ok1").children;
    // for (let i = 0; i < ok1.length; i++) {
    //   ok1[i].classList.add("before")
    // }

    document.getElementById('ok2').remove();
    // let ok2 = document.getElementById("ok2").children;
    // for (let i = 0; i < ok2.length; i++) {
    //   ok2[i].classList.add("before")
    // }

    document.getElementById('ok3').remove();
    // let ok3 = document.getElementById("ok3").children;
    // for (let i = 0; i < ok3.length; i++) {
    //   ok3[i].classList.add("before")
    // }

    document.getElementById('ok4').remove();
    // let ok4 = document.getElementById("ok4").children;
    // for (let i = 0; i < ok4.length; i++) {
    //   ok4[i].classList.add("before")
    // }
    document.getElementById("ok5").style.display = 'block';
    document.getElementById("ok6").style.display = 'none';
    document.getElementById("ok7").style.display = 'none';
    document.getElementById("ok8").style.display = 'none';
    document.getElementById("ok9").style.display = 'none';
    document.getElementById("ok10").style.display = 'none';
  }
  if (randomBgIndex === 5){

    document.getElementById('ok1').remove();
    // let ok1 = document.getElementById("ok1").children;
    // for (let i = 0; i < ok1.length; i++) {
    //   ok1[i].classList.add("before")
    // }

    document.getElementById('ok2').remove();
    // let ok2 = document.getElementById("ok2").children;
    // for (let i = 0; i < ok2.length; i++) {
    //   ok2[i].classList.add("before")
    // }

    document.getElementById('ok3').remove();
    // let ok3 = document.getElementById("ok3").children;
    // for (let i = 0; i < ok3.length; i++) {
    //   ok3[i].classList.add("before")
    // }

    document.getElementById('ok4').remove();
    // let ok4 = document.getElementById("ok4").children;
    // for (let i = 0; i < ok4.length; i++) {
    //   ok4[i].classList.add("before")
    // }

    document.getElementById('ok5').remove();
    // let ok5 = document.getElementById("ok5").children;
    // for (let i = 0; i < ok5.length; i++) {
    //   ok5[i].classList.add("before")
    // }
    document.getElementById("ok6").style.display = 'block';
    document.getElementById("ok7").style.display = 'none';
    document.getElementById("ok8").style.display = 'none';
    document.getElementById("ok9").style.display = 'none';
    document.getElementById("ok10").style.display = 'none';
  }
  if (randomBgIndex === 6){

    document.getElementById('ok1').remove();
    // let ok1 = document.getElementById("ok1").children;
    // for (let i = 0; i < ok1.length; i++) {
    //   ok1[i].classList.add("before")
    // }

    document.getElementById('ok2').remove();
    // let ok2 = document.getElementById("ok2").children;
    // for (let i = 0; i < ok2.length; i++) {
    //   ok2[i].classList.add("before")
    // }

    document.getElementById('ok3').remove();
    // let ok3 = document.getElementById("ok3").children;
    // for (let i = 0; i < ok3.length; i++) {
    //   ok3[i].classList.add("before")
    // }

    document.getElementById('ok4').remove();
    // let ok4 = document.getElementById("ok4").children;
    // for (let i = 0; i < ok4.length; i++) {
    //   ok4[i].classList.add("before")
    // }

    document.getElementById('ok5').remove();
    // let ok5 = document.getElementById("ok5").children;
    // for (let i = 0; i < ok5.length; i++) {
    //   ok5[i].classList.add("before")
    // }

    document.getElementById('ok6').remove();
    // let ok6 = document.getElementById("ok6").children;
    // for (let i = 0; i < ok6.length; i++) {
    //   ok6[i].classList.add("before")
    // }
    document.getElementById("ok7").style.display = 'block';
    document.getElementById("ok8").style.display = 'none';
    document.getElementById("ok9").style.display = 'none';
    document.getElementById("ok10").style.display = 'none';
  }
  if (randomBgIndex === 7){

    document.getElementById('ok1').remove();
    // let ok1 = document.getElementById("ok1").children;
    // for (let i = 0; i < ok1.length; i++) {
    //   ok1[i].classList.add("before")
    // }

    document.getElementById('ok2').remove();
    // let ok2 = document.getElementById("ok2").children;
    // for (let i = 0; i < ok2.length; i++) {
    //   ok2[i].classList.add("before")
    // }

    document.getElementById('ok3').remove();
    // let ok3 = document.getElementById("ok3").children;
    // for (let i = 0; i < ok3.length; i++) {
    //   ok3[i].classList.add("before")
    // }

    document.getElementById('ok4').remove();
    // let ok4 = document.getElementById("ok4").children;
    // for (let i = 0; i < ok4.length; i++) {
    //   ok4[i].classList.add("before")
    // }

    document.getElementById('ok5').remove();
    // let ok5 = document.getElementById("ok5").children;
    // for (let i = 0; i < ok5.length; i++) {
    //   ok5[i].classList.add("before")
    // }

    document.getElementById('ok6').remove();
    // let ok6 = document.getElementById("ok6").children;
    // for (let i = 0; i < ok6.length; i++) {
    //   ok6[i].classList.add("before")
    // }

    document.getElementById('ok7').remove();
    // let ok7 = document.getElementById("ok7").children;
    // for (let i = 0; i < ok7.length; i++) {
    //   ok7[i].classList.add("before")
    // }
    document.getElementById("ok8").style.display = 'block';
    document.getElementById("ok9").style.display = 'none';
    document.getElementById("ok10").style.display = 'none';
  }
  if (randomBgIndex === 8){

    document.getElementById('ok1').remove();
    // let ok1 = document.getElementById("ok1").children;
    // for (let i = 0; i < ok1.length; i++) {
    //   ok1[i].classList.add("before")
    // }

    document.getElementById('ok2').remove();
    // let ok2 = document.getElementById("ok2").children;
    // for (let i = 0; i < ok2.length; i++) {
    //   ok2[i].classList.add("before")
    // }

    document.getElementById('ok3').remove();
    // let ok3 = document.getElementById("ok3").children;
    // for (let i = 0; i < ok3.length; i++) {
    //   ok3[i].classList.add("before")
    // }

    document.getElementById('ok4').remove();
    // let ok4 = document.getElementById("ok4").children;
    // for (let i = 0; i < ok4.length; i++) {
    //   ok4[i].classList.add("before")
    // }

    document.getElementById('ok5').remove();
    // let ok5 = document.getElementById("ok5").children;
    // for (let i = 0; i < ok5.length; i++) {
    //   ok5[i].classList.add("before")
    // }

    document.getElementById('ok6').remove();
    // let ok6 = document.getElementById("ok6").children;
    // for (let i = 0; i < ok6.length; i++) {
    //   ok6[i].classList.add("before")
    // }

    document.getElementById('ok7').remove();
    // let ok7 = document.getElementById("ok7").children;
    // for (let i = 0; i < ok7.length; i++) {
    //   ok7[i].classList.add("before")
    // }

    document.getElementById('ok8').remove();
    // let ok8 = document.getElementById("ok8").children;
    // for (let i = 0; i < ok8.length; i++) {
    //   ok8[i].classList.add("before")
    // }
    document.getElementById("ok9").style.display = 'block';
    document.getElementById("ok10").style.display = 'none';
  }
  if (randomBgIndex === 9){

    document.getElementById('ok1').remove();
    // let ok1 = document.getElementById("ok1").children;
    // for (let i = 0; i < ok1.length; i++) {
    //   ok1[i].classList.add("before")
    // }

    document.getElementById('ok2').remove();
    // let ok2 = document.getElementById("ok2").children;
    // for (let i = 0; i < ok2.length; i++) {
    //   ok2[i].classList.add("before")
    // }

    document.getElementById('ok3').remove();
    // let ok3 = document.getElementById("ok3").children;
    // for (let i = 0; i < ok3.length; i++) {
    //   ok3[i].classList.add("before")
    // }

    document.getElementById('ok4').remove();
    // let ok4 = document.getElementById("ok4").children;
    // for (let i = 0; i < ok4.length; i++) {
    //   ok4[i].classList.add("before")
    // }

    document.getElementById('ok5').remove();
    // let ok5 = document.getElementById("ok5").children;
    // for (let i = 0; i < ok5.length; i++) {
    //   ok5[i].classList.add("before")
    // }

    document.getElementById('ok6').remove();
    // let ok6 = document.getElementById("ok6").children;
    // for (let i = 0; i < ok6.length; i++) {
    //   ok6[i].classList.add("before")
    // }

    document.getElementById('ok7').remove();
    // let ok7 = document.getElementById("ok7").children;
    // for (let i = 0; i < ok7.length; i++) {
    //   ok7[i].classList.add("before")
    // }

    document.getElementById('ok8').remove();
    // let ok8 = document.getElementById("ok8").children;
    // for (let i = 0; i < ok8.length; i++) {
    //   ok8[i].classList.add("before")
    // }

    document.getElementById('ok9').remove();
    // let ok9 = document.getElementById("ok9").children;
    // for (let i = 0; i < ok9.length; i++) {
    //   ok9[i].classList.add("before")
    // }
    document.getElementById("ok10").style.display = 'block';
  }
}

function check1(click) {
  let a = document.querySelectorAll("." + characters[index]);
  for (let i = 0; i < a.length; i++) {
    if ((!(a[i].classList.contains("before")))) {
      a[i].classList.add('checking');
      break;
    }
    else{
      console.log("sdasdasdsad");
    }
  }
  if ((click.classList.contains("checking")) && !(click.classList.contains("before"))) {
    timerForHuntingLetter1(3)

    click.classList.remove("checking");
    let num = click.id.split("r");

    let text = document.querySelectorAll(".elcText");
    for (let i = 0; i < text.length; i++) {
      let beforeItems = text[i].id.split("r");

      if (beforeItems[1] <= num[1]) {
        text[i].classList.add("before");
      }


    //   let b = document.querySelectorAll(".b");
    //   for (let i = 0; i < b.length; i++) {
    //     if (!(b[i].classList.contains("before"))) {
    //       b[i].classList.add('checking');
    //       break;
    //     }
    //   }
    // }
    //
    // //c
    //
    // click.classList.remove("checking");
    //
    // for (let i = 0; i < text.length; i++) {
    //   let beforeItems = text[i].id.split("r");
    //
    //   if (beforeItems[1] <= num[1]) {
    //     text[i].classList.add("before");
    //   }
    //
    //   let c = document.querySelectorAll(".c");
    //   for (let i = 0; i < c.length; i++) {
    //     if (!(c[i].classList.contains("before"))) {
    //       c[i].classList.add('checking1');
    //       break;
    //     }
    //   }
    }
    index++;

    function timerForHuntingLetter1(time) {
      increment();
      let huntingLetter1 = setInterval(function () {
        if (time <= 3 && time > 2) {
          click.classList.add("correct")
          time--;
        } else if (time <= 2 && time > 1) {
          click.classList.remove("correct");
          time--;
        } else if (time <= 1 && time > 0) {
          click.classList.add("correct")
          time--;
        } else if (time <= 0) {
          click.classList.remove("correct");
          clearInterval(huntingLetter1);
          if (level === "1" && index === 3 && counterVal === 30) {
            document.getElementById('fieldset1').style.display = 'none';
            document.getElementById('fieldset2').style.display = 'none';
            document.getElementById('fieldset3').style.display = 'block';
            document.getElementById('fieldset4').style.display = 'none';
            document.getElementById('fieldset5').style.display = 'none';
            index = 0;
            resetCounter();
            subLevel = "B";
            document.getElementById('subLevel').innerHTML="SubLevel : "+ subLevel;
            level = "1";
            document.getElementById('level').innerHTML="Level : "+ level;
            ou1();
          }
          else if (level=== "1" && index === 3 && counterVal !== 30){
            reset();
            resetCounter();
          }
          else if (level === "2" && index === 3 && counterVal === 30){
            document.getElementById('fieldset1').style.display = 'none';
            document.getElementById('fieldset2').style.display = 'none';
            document.getElementById('fieldset3').style.display = 'block';
            document.getElementById('fieldset4').style.display = 'none';
            document.getElementById('fieldset5').style.display = 'none';
            index = 0;
            resetCounter();
            subLevel = "B";
            document.getElementById('subLevel').innerHTML="SubLevel : "+ subLevel;
            level = "2";
            document.getElementById('level').innerHTML="Level : "+ level;
            ou1();
          }
          else if (level=== "2" && index === 3 && counterVal !== 30){
            reset();
            resetCounter();
          }
          else if (level === "2" && subLevel === "A"){
            classColor();
          }
        }
      }, 300)
    }
  }
  else {
    timerForHuntingLetter2(3)

    function timerForHuntingLetter2(time) {
      decrement();
      let huntingLetter2 = setInterval(function () {
        if (time <= 3 && time > 2) {
          click.classList.add("wrong")
          time--;
        } else if (time <= 2 && time > 1) {
          click.classList.remove("wrong");
          time--;
        } else if (time <= 1 && time > 0) {
          click.classList.add("wrong")
          time--;
        } else if (time <= 0) {
          click.classList.remove("wrong");
          clearInterval(huntingLetter2);
        }
      }, 300);
    }
  }
}



<!--
function check2(click1) {
  if ((click1.classList.contains("checking2")) && !(click1.classList.contains("before2"))) {
    timerForHuntingLetter3(3)

    function timerForHuntingLetter3(time) {
      let huntingLetter3 = setInterval(function () {
        if (time <= 3 && time > 2) {
          click1.classList.add("correct")
          time--;
        } else if (time <= 2 && time > 1) {
          click1.classList.remove("correct");
          time--;
        } else if (time <= 1 && time > 0) {
          click1.classList.add("correct")
          time--;
        } else if (time <= 0) {
          click1.classList.remove("correct");
          clearInterval(huntingLetter3);
        }
      }, 1000);
    }
  } else {
    timerForHuntingLetter4(3)

    function timerForHuntingLetter4(time) {
      let huntingLetter4 = setInterval(function () {
        if (time <= 3 && time > 2) {
          click1.classList.add("wrong")
          time--;
        } else if (time <= 2 && time > 1) {
          click1.classList.remove("wrong");
          time--;
        } else if (time <= 1 && time > 0) {
          click1.classList.add("wrong")
          time--;
        } else if (time <= 0) {
          click1.classList.remove("wrong");
          clearInterval(huntingLetter4);
        }
      }, 1000);
    }
  }
}
-->
$(".elcText").on('click', function (e){
  console.log("a")
  let click = e.target;
  check1(click);
});



function ou1(){
  let randomBgIndex1 = Math.floor(Math.random() * 10);
  if (randomBgIndex1 === 0){
    document.getElementById('okb1').style.display = 'block';
    document.getElementById('okb2').style.display = 'none';
    document.getElementById('okb3').style.display = 'none';
    document.getElementById('okb4').style.display = 'none';
    document.getElementById('okb5').style.display = 'none';
    document.getElementById('okb6').style.display = 'none';
    document.getElementById('okb7').style.display = 'none';
    document.getElementById('okb8').style.display = 'none';
    document.getElementById('okb9').style.display = 'none';
    document.getElementById('okb10').style.display = 'none';
  }
  if (randomBgIndex1 === 1){
    document.getElementById('okb1').style.display = 'none';
    document.getElementById('okb1').remove();
    document.getElementById('okb2').style.display = 'block';
    document.getElementById('okb3').style.display = 'none';
    document.getElementById('okb4').style.display = 'none';
    document.getElementById('okb5').style.display = 'none';
    document.getElementById('okb6').style.display = 'none';
    document.getElementById('okb7').style.display = 'none';
    document.getElementById('okb8').style.display = 'none';
    document.getElementById('okb9').style.display = 'none';
    document.getElementById('okb10').style.display = 'none';
  }
  if (randomBgIndex1 === 2){
    document.getElementById('okb1').style.display = 'none';
    document.getElementById('okb1').remove();
    document.getElementById('okb2').style.display = 'none';
    document.getElementById('okb2').remove();
    document.getElementById('okb3').style.display = 'block';
    document.getElementById('okb4').style.display = 'none';
    document.getElementById('okb5').style.display = 'none';
    document.getElementById('okb6').style.display = 'none';
    document.getElementById('okb7').style.display = 'none';
    document.getElementById('okb8').style.display = 'none';
    document.getElementById('okb9').style.display = 'none';
    document.getElementById('okb10').style.display = 'none';
  }
  if (randomBgIndex1 === 3){
    document.getElementById('okb1').style.display = 'none';
    document.getElementById('okb1').remove();
    document.getElementById('okb2').style.display = 'none';
    document.getElementById('okb2').remove();
    document.getElementById('okb3').style.display = 'none';
    document.getElementById('okb3').remove();
    document.getElementById('okb4').style.display = 'block';
    document.getElementById('okb5').style.display = 'none';
    document.getElementById('okb6').style.display = 'none';
    document.getElementById('okb7').style.display = 'none';
    document.getElementById('okb8').style.display = 'none';
    document.getElementById('okb9').style.display = 'none';
    document.getElementById('okb10').style.display = 'none';
  }
  if (randomBgIndex1 === 4){
    document.getElementById('okb1').style.display = 'none';
    document.getElementById('okb1').remove();
    document.getElementById('okb2').style.display = 'none';
    document.getElementById('okb2').remove();
    document.getElementById('okb3').style.display = 'none';
    document.getElementById('okb3').remove();
    document.getElementById('okb4').style.display = 'none';
    document.getElementById('okb4').remove();
    document.getElementById('okb5').style.display = 'block';
    document.getElementById('okb6').style.display = 'none';
    document.getElementById('okb7').style.display = 'none';
    document.getElementById('okb8').style.display = 'none';
    document.getElementById('okb9').style.display = 'none';
    document.getElementById('okb10').style.display = 'none';
  }
  if (randomBgIndex1 === 5){
    document.getElementById('okb1').style.display = 'none';
    document.getElementById('okb1').remove();
    document.getElementById('okb2').style.display = 'none';
    document.getElementById('okb2').remove();
    document.getElementById('okb3').style.display = 'none';
    document.getElementById('okb3').remove();
    document.getElementById('okb4').style.display = 'none';
    document.getElementById('okb4').remove();
    document.getElementById('okb5').style.display = 'none';
    document.getElementById('okb5').remove();
    document.getElementById('okb6').style.display = 'block';
    document.getElementById('okb7').style.display = 'none';
    document.getElementById('okb8').style.display = 'none';
    document.getElementById('okb9').style.display = 'none';
    document.getElementById('okb10').style.display = 'none';
  }
  if (randomBgIndex1 === 6){
    document.getElementById('okb1').style.display = 'none';
    document.getElementById('okb1').remove();
    document.getElementById('okb2').style.display = 'none';
    document.getElementById('okb2').remove();
    document.getElementById('okb3').style.display = 'none';
    document.getElementById('okb3').remove();
    document.getElementById('okb4').style.display = 'none';
    document.getElementById('okb4').remove();
    document.getElementById('okb5').style.display = 'none';
    document.getElementById('okb5').remove();
    document.getElementById('okb6').style.display = 'none';
    document.getElementById('okb6').remove();
    document.getElementById('okb7').style.display = 'block';
    document.getElementById('okb8').style.display = 'none';
    document.getElementById('okb9').style.display = 'none';
    document.getElementById('okb10').style.display = 'none';
  }
  if (randomBgIndex1 === 7){
    document.getElementById('okb1').style.display = 'none';
    document.getElementById('okb1').remove();
    document.getElementById('okb2').style.display = 'none';
    document.getElementById('okb2').remove();
    document.getElementById('okb3').style.display = 'none';
    document.getElementById('okb3').remove();
    document.getElementById('okb4').style.display = 'none';
    document.getElementById('okb4').remove();
    document.getElementById('okb5').style.display = 'none';
    document.getElementById('okb5').remove();
    document.getElementById('okb6').style.display = 'none';
    document.getElementById('okb6').remove();
    document.getElementById('okb7').style.display = 'none';
    document.getElementById('okb7').remove();
    document.getElementById('okb8').style.display = 'block';
    document.getElementById('okb9').style.display = 'none';
    document.getElementById('okb10').style.display = 'none';
  }
  if (randomBgIndex1 === 8){
    document.getElementById('okb1').style.display = 'none';
    document.getElementById('okb1').remove();
    document.getElementById('okb2').style.display = 'none';
    document.getElementById('okb2').remove();
    document.getElementById('okb3').style.display = 'none';
    document.getElementById('okb3').remove();
    document.getElementById('okb4').style.display = 'none';
    document.getElementById('okb4').remove();
    document.getElementById('okb5').style.display = 'none';
    document.getElementById('okb5').remove();
    document.getElementById('okb6').style.display = 'none';
    document.getElementById('okb6').remove();
    document.getElementById('okb7').style.display = 'none';
    document.getElementById('okb7').remove();
    document.getElementById('okb8').style.display = 'none';
    document.getElementById('okb8').remove();
    document.getElementById('okb9').style.display = 'block';
    document.getElementById('okb10').style.display = 'none';
  }
  if (randomBgIndex1 === 9){
    document.getElementById('okb1').style.display = 'none';
    document.getElementById('okb1').remove();
    document.getElementById('okb2').style.display = 'none';
    document.getElementById('okb2').remove();
    document.getElementById('okb3').style.display = 'none';
    document.getElementById('okb3').remove();
    document.getElementById('okb4').style.display = 'none';
    document.getElementById('okb4').remove();
    document.getElementById('okb5').style.display = 'none';
    document.getElementById('okb5').remove();
    document.getElementById('okb6').style.display = 'none';
    document.getElementById('okb6').remove();
    document.getElementById('okb7').style.display = 'none';
    document.getElementById('okb7').remove();
    document.getElementById('okb8').style.display = 'none';
    document.getElementById('okb8').remove();
    document.getElementById('okb9').style.display = 'none';
    document.getElementById('okb9').remove();
    document.getElementById('okb10').style.display = 'block';
  }
}

function check2(click1)
{
  let b = document.querySelectorAll("." + characters1[index]);
  for (let i = 0; i < b.length; i++)
  {
    if (!(b[i].classList.contains("before")))
    {
      b[i].classList.add('checking');
      break;
    }
  }

  if ((click1.classList.contains("checking")) && !(click1.classList.contains("before")))
  {
    timerForHuntingLetter3(3)


    click1.classList.remove("checking");
    let num1 = click1.id.split("r");

    let text1 = document.querySelectorAll(".elcText1");
    for (let i = 0; i < text1.length; i++) {
      let beforeItems1 = text1[i].id.split("r");

      if (beforeItems1[1] <= num1[1]) {
        text1[i].classList.add("before");
      }

      //   let b = document.querySelectorAll(".bb");
      //   for (let i = 0; i < b.length; i++) {
      //     if (!(b[i].classList.contains("before1"))) {
      //       b[i].classList.add('checking2');
      //       break;
      //     }
      //   }
      // }
      //
      // //c
      //
      // click1.classList.remove("checking2");
      //
      // for (let i = 0; i < text1.length; i++)
      // {
      //   let beforeItems = text1[i].id.split("r");
      //
      //   if (beforeItems[1] <= num1[1]){
      //     text1[i].classList.add("before1");
      //   }
      //
      //   let c = document.querySelectorAll(".cc");
      //   for (let i = 0; i < c.length; i++)
      //   {
      //     if (!(c[i].classList.contains("before1")))
      //     {
      //       c[i].classList.add('checking2');
      //       break;
      //     }
      //   }
      // }
      //
      // // d
      //
      // click1.classList.remove("checking2");
      //
      // for (let i = 0; i < text1.length; i++)
      // {
      //   let beforeItems = text1[i].id.split("r");
      //
      //   if (beforeItems[1] <= num1[1]){
      //     text1[i].classList.add("before1");
      //   }
      //
      //   let d = document.querySelectorAll(".dd");
      //   for (let i = 0; i < d.length; i++)
      //   {
      //     if (!(d[i].classList.contains("before1")))
      //     {
      //       d[i].classList.add('checking2');
      //       break;
      //     }
      //   }
      // }
      //
      // // e
      //
      // click1.classList.remove("checking2");
      //
      // for (let i = 0; i < text1.length; i++)
      // {
      //   let beforeItems = text1[i].id.split("r");
      //
      //   if (beforeItems[1] <= num1[1]){
      //     text1[i].classList.add("before1");
      //   }
      //
      //   let e = document.querySelectorAll(".ee");
      //   for (let i = 0; i < e.length; i++)
      //   {
      //     if (!(e[i].classList.contains("before1")))
      //     {
      //       e[i].classList.add('checking2');
      //       break;
      //     }
      //   }
      // }
      //
      // // f
      // click1.classList.remove("checking2");
      //
      // for (let i = 0; i < text1.length; i++)
      // {
      //   let beforeItems = text1[i].id.split("r");
      //
      //   if (beforeItems[1] <= num1[1]){
      //     text1[i].classList.add("before1");
      //   }
      //
      //   let f = document.querySelectorAll(".ff");
      //   for (let i = 0; i < f.length; i++)
      //   {
      //     if (!(f[i].classList.contains("before1")))
      //     {
      //       f[i].classList.add('checking3');
      //       break;
      //     }
      //   }
    }
    index++;

    function timerForHuntingLetter3(time){
      increment();
      let huntingLetter3 = setInterval(function () {
        if (time <= 3 && time > 2) {
          click1.classList.add("correct")
          time--;
        } else if (time <= 2 && time > 1) {
          click1.classList.remove("correct");
          time--;
        } else if (time <= 1 && time > 0) {
          click1.classList.add("correct")
          time--;
        } else if (time <= 0) {
          click1.classList.remove("correct");
          clearInterval(huntingLetter3);
          if (level=== "1" && index === 6 && counterVal === 60){
            document.getElementById('fieldset1').style.display = 'none';
            document.getElementById('fieldset2').style.display = 'none';
            document.getElementById('fieldset3').style.display = 'none';
            document.getElementById('fieldset4').style.display = 'block';
            document.getElementById('fieldset5').style.display = 'none';
            index = 0;
            subLevel="C";
            document.getElementById('subLevel').innerHTML = "SubLevel : " + subLevel;
            resetCounter();
            ou2();
          }
          else if (level=== "2" && index === 6 && counterVal === 60){
            document.getElementById('fieldset1').style.display = 'none';
            document.getElementById('fieldset2').style.display = 'none';
            document.getElementById('fieldset3').style.display = 'none';
            document.getElementById('fieldset4').style.display = 'block';
            document.getElementById('fieldset5').style.display = 'none';
            index = 0;
            subLevel="C";
            document.getElementById('subLevel').innerHTML = "SubLevel : " + subLevel;
            level = "2";
            document.getElementById('level').innerHTML="Level : "+ level;
            resetCounter();
            ou2();
          }
          else if (level=== "1" && index === 6 && counterVal !== 60){
            reset();
            resetCounter();
          }
          else if (level=== "2" && index === 6 && counterVal !== 60){
            reset();
            resetCounter();
          }
          else if (level === "2" && subLevel === "B"){
            classColor();
          }
        }
      },300)
    }
  }
  else
  {
    timerForHuntingLetter4(3)
    function timerForHuntingLetter4(time){
      decrement();
      let huntingLetter4 = setInterval(function () {
        if (time <= 3 && time > 2){
          click1.classList.add("wrong")
          time--;
        }
        else if (time <= 2 && time > 1){
          click1.classList.remove("wrong");
          time--;
        }
        else if (time <= 1 && time > 0){
          click1.classList.add("wrong")
          time--;
        }
        else if (time<=0){
          click1.classList.remove("wrong");
          clearInterval(huntingLetter4);
        }
      },300);
    }
  }
}

$(".elcText1").on('click', function (e){
  console.log("b")
  let click1 = e.target;
  check2(click1);
});



function ou2() {
  let randomBgIndex2 = Math.floor(Math.random() * 10);
  if (randomBgIndex2 === 0){
    document.getElementById('okc1').style.display = 'block';
    document.getElementById('okc2').style.display = 'none';
    document.getElementById('okc3').style.display = 'none';
    document.getElementById('okc4').style.display = 'none';
    document.getElementById('okc5').style.display = 'none';
    document.getElementById('okc6').style.display = 'none';
    document.getElementById('okc7').style.display = 'none';
    document.getElementById('okc8').style.display = 'none';
    document.getElementById('okc9').style.display = 'none';
    document.getElementById('okc10').style.display = 'none';
  }
  if (randomBgIndex2 === 1){
    document.getElementById('okc1').style.display = 'none';
    document.getElementById('okc1').remove();
    document.getElementById('okc2').style.display = 'block';
    document.getElementById('okc3').style.display = 'none';
    document.getElementById('okc4').style.display = 'none';
    document.getElementById('okc5').style.display = 'none';
    document.getElementById('okc6').style.display = 'none';
    document.getElementById('okc7').style.display = 'none';
    document.getElementById('okc8').style.display = 'none';
    document.getElementById('okc9').style.display = 'none';
    document.getElementById('okc10').style.display = 'none';
  }
  if (randomBgIndex2 === 2){
    document.getElementById('okc1').style.display = 'none';
    document.getElementById('okc1').remove();
    document.getElementById('okc2').style.display = 'none';
    document.getElementById('okc2').remove();
    document.getElementById('okc3').style.display = 'block';
    document.getElementById('okc4').style.display = 'none';
    document.getElementById('okc5').style.display = 'none';
    document.getElementById('okc6').style.display = 'none';
    document.getElementById('okc7').style.display = 'none';
    document.getElementById('okc8').style.display = 'none';
    document.getElementById('okc9').style.display = 'none';
    document.getElementById('okc10').style.display = 'none';
  }
  if (randomBgIndex2 === 3){
    document.getElementById('okc1').style.display = 'none';
    document.getElementById('okc1').remove();
    document.getElementById('okc2').style.display = 'none';
    document.getElementById('okc2').remove();
    document.getElementById('okc3').style.display = 'none';
    document.getElementById('okc3').remove();
    document.getElementById('okc4').style.display = 'block';
    document.getElementById('okc5').style.display = 'none';
    document.getElementById('okc6').style.display = 'none';
    document.getElementById('okc7').style.display = 'none';
    document.getElementById('okc8').style.display = 'none';
    document.getElementById('okc9').style.display = 'none';
    document.getElementById('okc10').style.display = 'none';
  }
  if (randomBgIndex2 === 4){
    document.getElementById('okc1').style.display = 'none';
    document.getElementById('okc1').remove();
    document.getElementById('okc2').style.display = 'none';
    document.getElementById('okc2').remove();
    document.getElementById('okc3').style.display = 'none';
    document.getElementById('okc3').remove();
    document.getElementById('okc4').style.display = 'none';
    document.getElementById('okc4').remove();
    document.getElementById('okc5').style.display = 'block';
    document.getElementById('okc6').style.display = 'none';
    document.getElementById('okc7').style.display = 'none';
    document.getElementById('okc8').style.display = 'none';
    document.getElementById('okc9').style.display = 'none';
    document.getElementById('okc10').style.display = 'none';
  }
  if (randomBgIndex2 === 5){
    document.getElementById('okc1').style.display = 'none';
    document.getElementById('okc1').remove();
    document.getElementById('okc2').style.display = 'none';
    document.getElementById('okc2').remove();
    document.getElementById('okc3').style.display = 'none';
    document.getElementById('okc3').remove();
    document.getElementById('okc4').style.display = 'none';
    document.getElementById('okc4').remove();
    document.getElementById('okc5').style.display = 'none';
    document.getElementById('okc5').remove();
    document.getElementById('okc6').style.display = 'block';
    document.getElementById('okc7').style.display = 'none';
    document.getElementById('okc8').style.display = 'none';
    document.getElementById('okc9').style.display = 'none';
    document.getElementById('okc10').style.display = 'none';
  }
  if (randomBgIndex2 === 6){
    document.getElementById('okc1').style.display = 'none';
    document.getElementById('okc1').remove();
    document.getElementById('okc2').style.display = 'none';
    document.getElementById('okc2').remove();
    document.getElementById('okc3').style.display = 'none';
    document.getElementById('okc3').remove();
    document.getElementById('okc4').style.display = 'none';
    document.getElementById('okc4').remove();
    document.getElementById('okc5').style.display = 'none';
    document.getElementById('okc5').remove();
    document.getElementById('okc6').style.display = 'none';
    document.getElementById('okc6').remove();
    document.getElementById('okc7').style.display = 'block';
    document.getElementById('okc8').style.display = 'none';
    document.getElementById('okc9').style.display = 'none';
    document.getElementById('okc10').style.display = 'none';
  }
  if (randomBgIndex2 === 7){
    document.getElementById('okc1').style.display = 'none';
    document.getElementById('okc1').remove();
    document.getElementById('okc2').style.display = 'none';
    document.getElementById('okc2').remove();
    document.getElementById('okc3').style.display = 'none';
    document.getElementById('okc3').remove();
    document.getElementById('okc4').style.display = 'none';
    document.getElementById('okc4').remove();
    document.getElementById('okc5').style.display = 'none';
    document.getElementById('okc5').remove();
    document.getElementById('okc6').style.display = 'none';
    document.getElementById('okc6').remove();
    document.getElementById('okc7').style.display = 'none';
    document.getElementById('okc7').remove();
    document.getElementById('okc8').style.display = 'block';
    document.getElementById('okc9').style.display = 'none';
    document.getElementById('okc10').style.display = 'none';
  }
  if (randomBgIndex2 === 8){
    document.getElementById('okc1').style.display = 'none';
    document.getElementById('okc1').remove();
    document.getElementById('okc2').style.display = 'none';
    document.getElementById('okc2').remove();
    document.getElementById('okc3').style.display = 'none';
    document.getElementById('okc3').remove();
    document.getElementById('okc4').style.display = 'none';
    document.getElementById('okc4').remove();
    document.getElementById('okc5').style.display = 'none';
    document.getElementById('okc5').remove();
    document.getElementById('okc6').style.display = 'none';
    document.getElementById('okc6').remove();
    document.getElementById('okc7').style.display = 'none';
    document.getElementById('okc7').remove();
    document.getElementById('okc8').style.display = 'none';
    document.getElementById('okc8').remove();
    document.getElementById('okc9').style.display = 'block';
    document.getElementById('okc10').style.display = 'none';
  }
  if (randomBgIndex2 === 9){
    document.getElementById('okc1').style.display = 'none';
    document.getElementById('okc1').remove();
    document.getElementById('okc2').style.display = 'none';
    document.getElementById('okc2').remove();
    document.getElementById('okc3').style.display = 'none';
    document.getElementById('okc3').remove();
    document.getElementById('okc4').style.display = 'none';
    document.getElementById('okc4').remove();
    document.getElementById('okc5').style.display = 'none';
    document.getElementById('okc5').remove();
    document.getElementById('okc6').style.display = 'none';
    document.getElementById('okc6').remove();
    document.getElementById('okc7').style.display = 'none';
    document.getElementById('okc7').remove();
    document.getElementById('okc8').style.display = 'none';
    document.getElementById('okc8').remove();
    document.getElementById('okc9').style.display = 'none';
    document.getElementById('okc9').remove();
    document.getElementById('okc10').style.display = 'block';
  }
}

function check3(click2)
{
  let c = document.querySelectorAll("." + characters2[index]);
  for (let i = 0; i < c.length; i++)
  {
    if (!(c[i].classList.contains("before")))
    {
      c[i].classList.add('checking');
      break;
    }
  }

  if ((click2.classList.contains("checking")) && !(click2.classList.contains("before")))
  {
    timerForHuntingLetter5(3)


    click2.classList.remove("checking");
    let num2 = click2.id.split("r");

    let text2 = document.querySelectorAll(".elcText2");
    for (let i = 0; i < text2.length; i++) {
      let beforeItems2 = text2[i].id.split("r");

      if (beforeItems2[1] <= num2[1]) {
        text2[i].classList.add("before");
      }
    }
    index++;

    function timerForHuntingLetter5(time){
      increment();
      let huntingLetter5 = setInterval(function () {
        if (time <= 3 && time > 2) {
          click2.classList.add("correct")
          time--;
        } else if (time <= 2 && time > 1) {
          click2.classList.remove("correct");
          time--;
        } else if (time <= 1 && time > 0) {
          click2.classList.add("correct")
          time--;
        } else if (time <= 0) {
          click2.classList.remove("correct");
          clearInterval(huntingLetter5);
          if (level=== "1" && index === 13 && counterVal === 130){
            document.getElementById('fieldset1').style.display = 'none';
            document.getElementById('fieldset2').style.display = 'none';
            document.getElementById('fieldset3').style.display = 'none';
            document.getElementById('fieldset4').style.display = 'none';
            document.getElementById('fieldset5').style.display = 'block';
            index = 0;
            subLevel="D";
            document.getElementById('subLevel').innerHTML = "SubLevel : " + subLevel;
            resetCounter();
            ou3();
          }
          else if (level=== "2" && index === 13 && counterVal === 130){
            document.getElementById('fieldset1').style.display = 'none';
            document.getElementById('fieldset2').style.display = 'none';
            document.getElementById('fieldset3').style.display = 'none';
            document.getElementById('fieldset4').style.display = 'none';
            document.getElementById('fieldset5').style.display = 'block';
            index = 0;
            subLevel="D";
            document.getElementById('subLevel').innerHTML = "SubLevel : " + subLevel;
            level = "2";
            document.getElementById('level').innerHTML="Level : "+ level;
            resetCounter();
            ou3();
          }
          else if (level=== "1" && index === 13 && counterVal !== 130){
            reset();
            resetCounter();
          }
          else if (level === "2" && subLevel === "C"){
            classColor();
          }
        }
      },300)
    }
  }
  else
  {
    timerForHuntingLetter6(3)
    function timerForHuntingLetter6(time){
      decrement();
      let huntingLetter6 = setInterval(function () {
        if (time <= 3 && time > 2){
          click2.classList.add("wrong")
          time--;
        }
        else if (time <= 2 && time > 1){
          click2.classList.remove("wrong");
          time--;
        }
        else if (time <= 1 && time > 0){
          click2.classList.add("wrong")
          time--;
        }
        else if (time<=0){
          click2.classList.remove("wrong");
          clearInterval(huntingLetter6);
        }
      },300);
    }
  }
}

$(".elcText2").on('click', function (e){
  console.log("c")
  let click2 = e.target;
  check3(click2);
});


function ou3(){
  let randomBgIndex3 = Math.floor(Math.random() * 5);
  if (randomBgIndex3 === 0){
    document.getElementById('okd1').style.display = 'block';
    document.getElementById('okd2').style.display = 'none';
    document.getElementById('okd3').style.display = 'none';
    document.getElementById('okd4').style.display = 'none';
    document.getElementById('okd5').style.display = 'none';
  }
  if (randomBgIndex3 === 1){
    document.getElementById('okd1').remove();
    document.getElementById('okd2').style.display = 'block';
    document.getElementById('okd3').style.display = 'none';
    document.getElementById('okd4').style.display = 'none';
    document.getElementById('okd5').style.display = 'none';
  }
  if (randomBgIndex3 === 2){
    document.getElementById('okd1').remove();
    document.getElementById('okd2').remove();
    document.getElementById('okd3').style.display = 'block';
    document.getElementById('okd4').style.display = 'none';
    document.getElementById('okd5').style.display = 'none';
  }
  if (randomBgIndex3 === 3){
    document.getElementById('okd1').remove();
    document.getElementById('okd2').remove();
    document.getElementById('okd3').remove();
    document.getElementById('okd4').style.display = 'block';
    document.getElementById('okd5').style.display = 'none';
  }
  if (randomBgIndex3 === 4){
    document.getElementById('okd1').remove();
    document.getElementById('okd2').remove();
    document.getElementById('okd3').remove();
    document.getElementById('okd4').remove();
    document.getElementById('okd5').style.display = 'block';
  }
}

function check4(click3)
{
  let d = document.querySelectorAll("." + characters3[index]);
  for (let i = 0; i < d.length; i++)
  {
    if (!(d[i].classList.contains("before")))
    {
      d[i].classList.add('checking');
      break;
    }
  }

  if ((click3.classList.contains("checking")) && !(click3.classList.contains("before")))
  {
    timerForHuntingLetter7(3)


    click3.classList.remove("checking");
    let num3 = click3.id.split("r");

    let text3 = document.querySelectorAll(".elcText3");
    for (let i = 0; i < text3.length; i++) {
      let beforeItems3 = text3[i].id.split("r");

      if (beforeItems3[1] <= num3[1]) {
        text3[i].classList.add("before");
      }
    }
    index++;

    function timerForHuntingLetter7(time){
      let huntingLetter7 = setInterval(function () {
        if (time <= 3 && time > 2) {
          click3.classList.add("correct")
          time--;
        } else if (time <= 2 && time > 1) {
          click3.classList.remove("correct");
          time--;
        } else if (time <= 1 && time > 0) {
          click3.classList.add("correct")
          time--;
        } else if (time <= 0) {
          click3.classList.remove("correct");
          clearInterval(huntingLetter7);
          if (level=== "1" && index === 26 && i >= 1200){
            document.getElementById('fieldset1').style.display = 'none';
            document.getElementById('fieldset2').style.display = 'block';
            document.getElementById('fieldset3').style.display = 'none';
            document.getElementById('fieldset4').style.display = 'none';
            document.getElementById('fieldset5').style.display = 'none';
            index = 0;
            subLevel="A";
            level = "2";
            document.getElementById('subLevel').innerHTML = "SubLevel : " + subLevel;
            document.getElementById('level').innerHTML = "Level : " + level;
            resetCounter();
            ou();
          }
          else if (level=== "2" && index === 26 && i >= 1600){
            document.getElementById('fieldset5').style.display = 'none';
            celebration(1.5);
          }
          else if (level=== "1" && index === 26 && i < 1200){
            reset();
          }
          else if (level=== "2" && index === 26 && i < 1600){
            reset();
          }
          else if (level === "2" && subLevel === "D"){
            classColor();
          }
        }
      },300)
    }
  }
  else
  {
    timerForHuntingLetter8(3)
    function timerForHuntingLetter8(time){
      let huntingLetter8 = setInterval(function () {
        if (time <= 3 && time > 2){
          click3.classList.add("wrong")
          time--;
        }
        else if (time <= 2 && time > 1){
          click3.classList.remove("wrong");
          time--;
        }
        else if (time <= 1 && time > 0){
          click3.classList.add("wrong")
          time--;
        }
        else if (time<=0){
          click3.classList.remove("wrong");
          clearInterval(huntingLetter8);
        }
      },300);
    }
  }
}

function celebration(time) {
  plate.style.display = "inline";
  let celebrate = setInterval(function () {
    if (time <= 1.5 && time > 0) {
      plate.innerHTML = "Congratulations! Good job";
      time--;
    } else if (time <= 0) {
      clearInterval(celebrate);
      plate.style.display = "none";
      document.getElementById('fieldset1').style.display = 'block';
    }
  },300)
}

$(".elcText3").on('click', function (e){
  console.log("c")
  let click3 = e.target;
  check4(click3);
});
