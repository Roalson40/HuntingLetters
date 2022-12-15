let characters2 = new Array("a3","b3","c3","d3","e3","f3","g3","h3","i3","j3","k3","l3","m3");

function check3(click2)
{
  let c = document.querySelectorAll("." + characters2[index]);
  for (let i = 0; i < c.length; i++)
  {
    if (!(c[i].classList.contains("before2")))
    {
      c[i].classList.add('checking2');
      break;
    }
  }

  if ((click2.classList.contains("checking2")) && !(click2.classList.contains("before2")))
  {
    timerForHuntingLetter5(3)


    click2.classList.remove("checking2");
    let num2 = click2.id.split("r");

    let text2 = document.querySelectorAll(".elcText2");
    for (let i = 0; i < text2.length; i++) {
      let beforeItems2 = text2[i].id.split("r");

      if (beforeItems2[1] <= num2[1]) {
        text2[i].classList.add("before2");
      }
    }
    index++;

    function timerForHuntingLetter5(time){
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
          if (index === 13){
            document.getElementById('fieldset3').style.display = 'none';
            document.getElementById('fieldset4').style.display = 'block';
            index = 0;
            subLevel="D";
            document.getElementById('subLevel').innerHTML = "SubLevel : " + subLevel;
          }
        }
      },300)
    }
  }
  else
  {
    timerForHuntingLetter6(3)
    function timerForHuntingLetter6(time){
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
