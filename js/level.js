let subLevel = "A";
let characters = new Array("a","b","c");
let index = 0;

window.onload = function (){
  ou();
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
    document.getElementById("ok1").style.display = 'none';
    document.getElementById("ok1").remove();
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
    document.getElementById("ok1").remove();
    document.getElementById("ok2").style.display = 'none';
    document.getElementById("ok2").remove();
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
    document.getElementById("ok1").remove();
    document.getElementById("ok2").style.display = 'none';
    document.getElementById("ok2").remove();
    document.getElementById("ok3").style.display = 'none';
    document.getElementById("ok3").remove();
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
    document.getElementById("ok1").remove();
    document.getElementById("ok2").style.display = 'none';
    document.getElementById("ok2").remove();
    document.getElementById("ok3").style.display = 'none';
    document.getElementById("ok3").remove();
    document.getElementById("ok4").style.display = 'none';
    document.getElementById("ok4").remove();
    document.getElementById("ok5").style.display = 'block';
    document.getElementById("ok6").style.display = 'none';
    document.getElementById("ok7").style.display = 'none';
    document.getElementById("ok8").style.display = 'none';
    document.getElementById("ok9").style.display = 'none';
    document.getElementById("ok10").style.display = 'none';
  }
  if (randomBgIndex === 5){
    document.getElementById("ok1").style.display = 'none';
    document.getElementById("ok1").remove();
    document.getElementById("ok2").style.display = 'none';
    document.getElementById("ok2").remove();
    document.getElementById("ok3").style.display = 'none';
    document.getElementById("ok3").remove();
    document.getElementById("ok4").style.display = 'none';
    document.getElementById("ok4").remove();
    document.getElementById("ok5").style.display = 'none';
    document.getElementById("ok5").remove();
    document.getElementById("ok6").style.display = 'block';
    document.getElementById("ok7").style.display = 'none';
    document.getElementById("ok8").style.display = 'none';
    document.getElementById("ok9").style.display = 'none';
    document.getElementById("ok10").style.display = 'none';
  }
  if (randomBgIndex === 6){
    document.getElementById("ok1").style.display = 'none';
    document.getElementById("ok1").remove();
    document.getElementById("ok2").style.display = 'none';
    document.getElementById("ok2").remove();
    document.getElementById("ok3").style.display = 'none';
    document.getElementById("ok3").remove();
    document.getElementById("ok4").style.display = 'none';
    document.getElementById("ok4").remove();
    document.getElementById("ok5").style.display = 'none';
    document.getElementById("ok5").remove();
    document.getElementById("ok6").style.display = 'none';
    document.getElementById("ok6").remove();
    document.getElementById("ok7").style.display = 'block';
    document.getElementById("ok8").style.display = 'none';
    document.getElementById("ok9").style.display = 'none';
    document.getElementById("ok10").style.display = 'none';
  }
  if (randomBgIndex === 7){
    document.getElementById("ok1").style.display = 'none';
    document.getElementById("ok1").remove();
    document.getElementById("ok2").style.display = 'none';
    document.getElementById("ok2").remove();
    document.getElementById("ok3").style.display = 'none';
    document.getElementById("ok3").remove();
    document.getElementById("ok4").style.display = 'none';
    document.getElementById("ok4").remove();
    document.getElementById("ok5").style.display = 'none';
    document.getElementById("ok5").remove();
    document.getElementById("ok6").style.display = 'none';
    document.getElementById("ok6").remove();
    document.getElementById("ok7").style.display = 'none';
    document.getElementById("ok7").remove();
    document.getElementById("ok8").style.display = 'block';
    document.getElementById("ok9").style.display = 'none';
    document.getElementById("ok10").style.display = 'none';
  }
  if (randomBgIndex === 8){
    document.getElementById("ok1").style.display = 'none';
    document.getElementById("ok1").remove();
    document.getElementById("ok2").style.display = 'none';
    document.getElementById("ok2").remove();
    document.getElementById("ok3").style.display = 'none';
    document.getElementById("ok3").remove();
    document.getElementById("ok4").style.display = 'none';
    document.getElementById("ok4").remove();
    document.getElementById("ok5").style.display = 'none';
    document.getElementById("ok5").remove();
    document.getElementById("ok6").style.display = 'none';
    document.getElementById("ok6").remove();
    document.getElementById("ok7").style.display = 'none';
    document.getElementById("ok7").remove();
    document.getElementById("ok8").style.display = 'none';
    document.getElementById("ok8").remove();
    document.getElementById("ok9").style.display = 'block';
    document.getElementById("ok10").style.display = 'none';
  }
  if (randomBgIndex === 9){
    document.getElementById("ok1").style.display = 'none';
    document.getElementById("ok1").remove();
    document.getElementById("ok2").style.display = 'none';
    document.getElementById("ok2").remove();
    document.getElementById("ok3").style.display = 'none';
    document.getElementById("ok3").remove();
    document.getElementById("ok4").style.display = 'none';
    document.getElementById("ok4").remove();
    document.getElementById("ok5").style.display = 'none';
    document.getElementById("ok5").remove();
    document.getElementById("ok6").style.display = 'none';
    document.getElementById("ok6").remove();
    document.getElementById("ok7").style.display = 'none';
    document.getElementById("ok7").remove();
    document.getElementById("ok8").style.display = 'none';
    document.getElementById("ok8").remove();
    document.getElementById("ok9").style.display = 'none';
    document.getElementById("ok9").remove();
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
          if (index === 3) {
            document.getElementById('fieldset1').style.display = 'none';
            document.getElementById('fieldset2').style.display = 'none';
            document.getElementById('fieldset3').style.display = 'block';
            document.getElementById('fieldset4').style.display = 'none';
            document.getElementById('fieldset5').style.display = 'none';
            index = 0;
            subLevel="B";
            document.getElementById('subLevel').innerHTML = "SubLevel : " + subLevel;
           ou1();
          }
        }
      }, 300)
    }
  }
  else {
    timerForHuntingLetter2(3)

    function timerForHuntingLetter2(time) {
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
