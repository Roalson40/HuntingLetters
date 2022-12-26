let subLevel = "A";
let characters = new Array("a","b","c");
let index = 0;
let symbol1 = "Which eye : Right eye";
let eye1 = document.getElementById('eye');
let counterVal = 0;

window.onload = function (){
  read();
  if (subLevel === "A"){
    countdown();
  }
  else if (subLevel === "B"){
    countdown();
    document.getElementById('fieldset2').style.display = 'none';
    document.getElementById('fieldset3').style.display = 'block';
    ou1();
  }
}

function fresh(){
  timeout = 150;
  refreshTime0();
  clearInterval(countdownTimer);
  subLevel = "A";
  document.getElementById('subLevel').innerHTML="SubLevel : "+subLevel;
  document.getElementById('fieldset1').style.display = 'block';
  document.getElementById('fieldset2').style.display = 'none';
  document.getElementById('fieldset3').style.display = 'none';
  document.getElementById('fieldset4').style.display = 'none';
  document.getElementById('fieldset5').style.display = 'none';
}

function change(){
  if (symbol1 === "Which eye : Right eye"){
    symbol1 = "Which eye : Left eye"
    eye1.innerHTML = symbol1;
  }
  else if (symbol1 === "Which eye : Left eye"){
    symbol1 = "Which eye : Right eye"
    eye1.innerHTML = symbol1;
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
  localStorage.setItem("A",subLevel)
  localStorage.setItem("t",timeout)
}

function read(){
  document.getElementById("subLevel").innerHTML = 'SubLevel : ' + localStorage.getItem("A");
  document.getElementById("time").innerHTML = 'Time : ' + localStorage.getItem("t");
  timeout=localStorage.getItem("t");
  subLevel=localStorage.getItem("A");
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

  // let randomBgIndex = Math.floor( Math.random() * 10 );
  let randomBgIndex = 3;
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
    document.getElementById("ok1").style.display = 'none';
    let ok1 = document.getElementById("ok1").children;
    for (let i = 0; i < ok1.length; i++) {
      ok1[i].classList.add("before")
    }
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
    document.getElementById("ok1").style.display = 'none';
    let ok1 = document.getElementById("ok1").children;
    for (let i = 0; i < ok1.length; i++) {
      ok1[i].classList.add("before")
    }
    document.getElementById("ok2").style.display = 'none';
    let ok2 = document.getElementById("ok2").children;
    for (let i = 0; i < ok2.length; i++) {
      ok2[i].classList.add("before")
    }
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
    document.getElementById("ok1").style.display = 'none';
    let ok1 = document.getElementById("ok1").children;
    for (let i = 0; i < ok1.length; i++) {
      ok1[i].classList.add("before")
    }
    document.getElementById("ok2").style.display = 'none';
    let ok2 = document.getElementById("ok2").children;
    for (let i = 0; i < ok2.length; i++) {
      ok2[i].classList.add("before")
    }
    document.getElementById("ok3").style.display = 'none';
    let ok3 = document.getElementById("ok3").children;
    for (let i = 0; i < ok3.length; i++) {
      ok3[i].classList.add("before")
    }
    document.getElementById("ok4").style.display = 'block';
    document.getElementById("ok5").style.display = 'none';
    document.getElementById("ok6").style.display = 'none';
    document.getElementById("ok7").style.display = 'none';
    document.getElementById("ok8").style.display = 'none';
    document.getElementById("ok9").style.display = 'none';
    document.getElementById("ok10").style.display = 'none';
  }
  if (randomBgIndex === 4){
    document.getElementById("ok1").style.display = 'none';
    let ok1 = document.getElementById("ok1").children;
    for (let i = 0; i < ok1.length; i++) {
      ok1[i].classList.add("before")
    }
    document.getElementById("ok2").style.display = 'none';
    let ok2 = document.getElementById("ok2").children;
    for (let i = 0; i < ok2.length; i++) {
      ok2[i].classList.add("before")
    }
    document.getElementById("ok3").style.display = 'none';
    let ok3 = document.getElementById("ok3").children;
    for (let i = 0; i < ok3.length; i++) {
      ok3[i].classList.add("before")
    }
    document.getElementById("ok4").style.display = 'none';
    let ok4 = document.getElementById("ok4").children;
    for (let i = 0; i < ok4.length; i++) {
      ok4[i].classList.add("before")
    }
    document.getElementById("ok5").style.display = 'block';
    document.getElementById("ok6").style.display = 'none';
    document.getElementById("ok7").style.display = 'none';
    document.getElementById("ok8").style.display = 'none';
    document.getElementById("ok9").style.display = 'none';
    document.getElementById("ok10").style.display = 'none';
  }
  if (randomBgIndex === 5){
    document.getElementById("ok1").style.display = 'none';
    let ok1 = document.getElementById("ok1").children;
    for (let i = 0; i < ok1.length; i++) {
      ok1[i].classList.add("before")
    }
    document.getElementById("ok2").style.display = 'none';
    let ok2 = document.getElementById("ok2").children;
    for (let i = 0; i < ok2.length; i++) {
      ok2[i].classList.add("before")
    }
    document.getElementById("ok3").style.display = 'none';
    let ok3 = document.getElementById("ok3").children;
    for (let i = 0; i < ok3.length; i++) {
      ok3[i].classList.add("before")
    }
    document.getElementById("ok4").style.display = 'none';
    let ok4 = document.getElementById("ok4").children;
    for (let i = 0; i < ok4.length; i++) {
      ok4[i].classList.add("before")
    }
    document.getElementById("ok5").style.display = 'none';
    let ok5 = document.getElementById("ok5").children;
    for (let i = 0; i < ok5.length; i++) {
      ok5[i].classList.add("before")
    }
    document.getElementById("ok6").style.display = 'block';
    document.getElementById("ok7").style.display = 'none';
    document.getElementById("ok8").style.display = 'none';
    document.getElementById("ok9").style.display = 'none';
    document.getElementById("ok10").style.display = 'none';
  }
  if (randomBgIndex === 6){
    document.getElementById("ok1").style.display = 'none';
    let ok1 = document.getElementById("ok1").children;
    for (let i = 0; i < ok1.length; i++) {
      ok1[i].classList.add("before")
    }
    document.getElementById("ok2").style.display = 'none';
    let ok2 = document.getElementById("ok2").children;
    for (let i = 0; i < ok2.length; i++) {
      ok2[i].classList.add("before")
    }
    document.getElementById("ok3").style.display = 'none';
    let ok3 = document.getElementById("ok3").children;
    for (let i = 0; i < ok3.length; i++) {
      ok3[i].classList.add("before")
    }
    document.getElementById("ok4").style.display = 'none';
    let ok4 = document.getElementById("ok4").children;
    for (let i = 0; i < ok4.length; i++) {
      ok4[i].classList.add("before")
    }
    document.getElementById("ok5").style.display = 'none';
    let ok5 = document.getElementById("ok5").children;
    for (let i = 0; i < ok5.length; i++) {
      ok5[i].classList.add("before")
    }
    document.getElementById("ok6").style.display = 'none';
    let ok6 = document.getElementById("ok6").children;
    for (let i = 0; i < ok6.length; i++) {
      ok6[i].classList.add("before")
    }
    document.getElementById("ok7").style.display = 'block';
    document.getElementById("ok8").style.display = 'none';
    document.getElementById("ok9").style.display = 'none';
    document.getElementById("ok10").style.display = 'none';
  }
  if (randomBgIndex === 7){
    document.getElementById("ok1").style.display = 'none';
    let ok1 = document.getElementById("ok1").children;
    for (let i = 0; i < ok1.length; i++) {
      ok1[i].classList.add("before")
    }
    document.getElementById("ok2").style.display = 'none';
    let ok2 = document.getElementById("ok2").children;
    for (let i = 0; i < ok2.length; i++) {
      ok2[i].classList.add("before")
    }
    document.getElementById("ok3").style.display = 'none';
    let ok3 = document.getElementById("ok3").children;
    for (let i = 0; i < ok3.length; i++) {
      ok3[i].classList.add("before")
    }
    document.getElementById("ok4").style.display = 'none';
    let ok4 = document.getElementById("ok4").children;
    for (let i = 0; i < ok4.length; i++) {
      ok4[i].classList.add("before")
    }
    document.getElementById("ok5").style.display = 'none';
    let ok5 = document.getElementById("ok5").children;
    for (let i = 0; i < ok5.length; i++) {
      ok5[i].classList.add("before")
    }
    document.getElementById("ok6").style.display = 'none';
    let ok6 = document.getElementById("ok6").children;
    for (let i = 0; i < ok6.length; i++) {
      ok6[i].classList.add("before")
    }
    document.getElementById("ok7").style.display = 'none';
    let ok7 = document.getElementById("ok7").children;
    for (let i = 0; i < ok7.length; i++) {
      ok7[i].classList.add("before")
    }
    document.getElementById("ok8").style.display = 'block';
    document.getElementById("ok9").style.display = 'none';
    document.getElementById("ok10").style.display = 'none';
  }
  if (randomBgIndex === 8){
    document.getElementById("ok1").style.display = 'none';
    let ok1 = document.getElementById("ok1").children;
    for (let i = 0; i < ok1.length; i++) {
      ok1[i].classList.add("before")
    }
    document.getElementById("ok2").style.display = 'none';
    let ok2 = document.getElementById("ok2").children;
    for (let i = 0; i < ok2.length; i++) {
      ok2[i].classList.add("before")
    }
    document.getElementById("ok3").style.display = 'none';
    let ok3 = document.getElementById("ok3").children;
    for (let i = 0; i < ok3.length; i++) {
      ok3[i].classList.add("before")
    }
    document.getElementById("ok4").style.display = 'none';
    let ok4 = document.getElementById("ok4").children;
    for (let i = 0; i < ok4.length; i++) {
      ok4[i].classList.add("before")
    }
    document.getElementById("ok5").style.display = 'none';
    let ok5 = document.getElementById("ok5").children;
    for (let i = 0; i < ok5.length; i++) {
      ok5[i].classList.add("before")
    }
    document.getElementById("ok6").style.display = 'none';
    let ok6 = document.getElementById("ok6").children;
    for (let i = 0; i < ok6.length; i++) {
      ok6[i].classList.add("before")
    }
    document.getElementById("ok7").style.display = 'none';
    let ok7 = document.getElementById("ok7").children;
    for (let i = 0; i < ok7.length; i++) {
      ok7[i].classList.add("before")
    }
    document.getElementById("ok8").style.display = 'none';
    let ok8 = document.getElementById("ok8").children;
    for (let i = 0; i < ok8.length; i++) {
      ok8[i].classList.add("before")
    }
    document.getElementById("ok9").style.display = 'block';
    document.getElementById("ok10").style.display = 'none';
  }
  if (randomBgIndex === 9){
    document.getElementById("ok1").style.display = 'none';
    let ok1 = document.getElementById("ok1").children;
    for (let i = 0; i < ok1.length; i++) {
      ok1[i].classList.add("before")
    }
    document.getElementById("ok2").style.display = 'none';
    let ok2 = document.getElementById("ok2").children;
    for (let i = 0; i < ok2.length; i++) {
      ok2[i].classList.add("before")
    }
    document.getElementById("ok3").style.display = 'none';
    let ok3 = document.getElementById("ok3").children;
    for (let i = 0; i < ok3.length; i++) {
      ok3[i].classList.add("before")
    }
    document.getElementById("ok4").style.display = 'none';
    let ok4 = document.getElementById("ok4").children;
    for (let i = 0; i < ok4.length; i++) {
      ok4[i].classList.add("before")
    }
    document.getElementById("ok5").style.display = 'none';
    let ok5 = document.getElementById("ok5").children;
    for (let i = 0; i < ok5.length; i++) {
      ok5[i].classList.add("before")
    }
    document.getElementById("ok6").style.display = 'none';
    let ok6 = document.getElementById("ok6").children;
    for (let i = 0; i < ok6.length; i++) {
      ok6[i].classList.add("before")
    }
    document.getElementById("ok7").style.display = 'none';
    let ok7 = document.getElementById("ok7").children;
    for (let i = 0; i < ok7.length; i++) {
      ok7[i].classList.add("before")
    }
    document.getElementById("ok8").style.display = 'none';
    let ok8 = document.getElementById("ok8").children;
    for (let i = 0; i < ok8.length; i++) {
      ok8[i].classList.add("before")
    }
    document.getElementById("ok9").style.display = 'none';
    let ok9 = document.getElementById("ok9").children;
    for (let i = 0; i < ok9.length; i++) {
      ok9[i].classList.add("before")
    }
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
    if (index === 3 && counterVal === 30) {
      document.getElementById('fieldset1').style.display = 'none';
      document.getElementById('fieldset2').style.display = 'none';
      document.getElementById('fieldset3').style.display = 'block';
      document.getElementById('fieldset4').style.display = 'none';
      document.getElementById('fieldset5').style.display = 'none';
      index = 0;
      subLevel="B";
      document.getElementById('subLevel').innerHTML = "SubLevel : " + subLevel;
      resetCounter();
      ou1();
    }
    if (index === 3 && counterVal !== 30){
      reset();
      resetCounter();
    }
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
