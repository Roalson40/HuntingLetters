let characters3 = new Array("a4","b4","c4","d4","e4","f4","g4","h4","i4","j4","k4","l4","m4","n4","o4","p4","q4","r4","s4","t4","u4","v4","w4","x4","y4","z4");

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
