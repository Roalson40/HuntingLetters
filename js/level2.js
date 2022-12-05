

function check2(click1)
{
  let a = document.querySelectorAll(".aa");
  for (let i = 0; i < a.length; i++)
  {
    if (!(a[i].classList.contains("before1")))
    {
      a[i].classList.add('checking2');
      break;
    }
  }

  if (((click1.classList.contains("checking2")) && !(click1.classList.contains("before1"))) || (click1.classList.contains("checking3") && !(click1.classList.contains("before1"))))
  {
    timerForHuntingLetter3(3)


    click1.classList.remove("checking2");
    let num1 = click1.id.split("r");

    let text1 = document.querySelectorAll(".elcText1");
    for (let i = 0; i < text1.length; i++) {
      let beforeItems = text1[i].id.split("r");

      if (beforeItems[1] <= num1[1]) {
        text1[i].classList.add("before1");
      }

      let b = document.querySelectorAll(".bb");
      for (let i = 0; i < b.length; i++) {
        if (!(b[i].classList.contains("before1"))) {
          b[i].classList.add('checking2');
          break;
        }
      }
    }

    //c

    click1.classList.remove("checking2");

    for (let i = 0; i < text1.length; i++)
    {
      let beforeItems = text1[i].id.split("r");

      if (beforeItems[1] <= num1[1]){
        text1[i].classList.add("before1");
      }

      let c = document.querySelectorAll(".cc");
      for (let i = 0; i < c.length; i++)
      {
        if (!(c[i].classList.contains("before1")))
        {
          c[i].classList.add('checking2');
          break;
        }
      }
    }

    // d

    click1.classList.remove("checking2");

    for (let i = 0; i < text1.length; i++)
    {
      let beforeItems = text1[i].id.split("r");

      if (beforeItems[1] <= num1[1]){
        text1[i].classList.add("before1");
      }

      let d = document.querySelectorAll(".dd");
      for (let i = 0; i < d.length; i++)
      {
        if (!(d[i].classList.contains("before1")))
        {
          d[i].classList.add('checking2');
          break;
        }
      }
    }

    // e

    click1.classList.remove("checking2");

    for (let i = 0; i < text1.length; i++)
    {
      let beforeItems = text1[i].id.split("r");

      if (beforeItems[1] <= num1[1]){
        text1[i].classList.add("before1");
      }

      let e = document.querySelectorAll(".ee");
      for (let i = 0; i < e.length; i++)
      {
        if (!(e[i].classList.contains("before1")))
        {
          e[i].classList.add('checking2');
          break;
        }
      }
    }

    // f
    click1.classList.remove("checking2");

    for (let i = 0; i < text1.length; i++)
    {
      let beforeItems = text1[i].id.split("r");

      if (beforeItems[1] <= num1[1]){
        text1[i].classList.add("before1");
      }

      let f = document.querySelectorAll(".ff");
      for (let i = 0; i < f.length; i++)
      {
        if (!(f[i].classList.contains("before1")))
        {
          f[i].classList.add('checking3');
          break;
        }
      }
    }

    function timerForHuntingLetter3(time){
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
          if (click1.classList.contains("checking3")){
            document.getElementById('fieldset2').style.display = 'none';
            document.getElementById('fieldset3').style.display = 'block';
          }
        }
      },300)
    }
  }
  else
  {
    timerForHuntingLetter4(3)
    function timerForHuntingLetter4(time){
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
  console.log("a")
  let click1 = e.target;
  check2(click1);
});
