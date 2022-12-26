let characters3 = new Array("a4","b4","c4","d4","e4","f4","g4","h4","i4","j4","k4","l4","m4","n4","o4","p4","q4","r4","s4","t4","u4","v4","w4","x4","y4","z4");

function check4(click3)
{
  let d = document.querySelectorAll("." + characters3[index]);
  for (let i = 0; i < d.length; i++)
  {
    if (!(d[i].classList.contains("before3")))
    {
      d[i].classList.add('checking3');
      break;
    }
  }

  if ((click3.classList.contains("checking3")) && !(click3.classList.contains("before3")))
  {
    timerForHuntingLetter7(3)


    click3.classList.remove("checking2");
    let num3 = click3.id.split("r");

    let text3 = document.querySelectorAll(".elcText3");
    for (let i = 0; i < text3.length; i++) {
      let beforeItems3 = text3[i].id.split("r");

      if (beforeItems3[1] <= num3[1]) {
        text3[i].classList.add("before3");
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
          if (index === 26 && counterVal === 130){
            document.getElementById('fieldset1').style.display = 'none';
            document.getElementById('fieldset2').style.display = 'none';
            document.getElementById('fieldset3').style.display = 'none';
            document.getElementById('fieldset4').style.display = 'none';
            document.getElementById('fieldset5').style.display = 'block';
            index = 0;
            subLevel="D";
            document.getElementById('subLevel').innerHTML = "SubLevel : " + subLevel;
            resetCounter();
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

$(".elcText3").on('click', function (e){
  console.log("c")
  let click3 = e.target;
  check4(click3);
});
