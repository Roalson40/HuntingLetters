let characters1 = new Array("a2","b2","c2","d2","e2","f2");

function ou1(){
  let randomBgIndex1 = Math.floor(Math.random() * 4);
  if (randomBgIndex1 === 0){
    document.getElementById('okb1').style.display = 'block';
    document.getElementById('okb2').style.display = 'none';
    document.getElementById('okb3').style.display = 'none';
    document.getElementById('okb4').style.display = 'none';
  }
  if (randomBgIndex1 === 1){
    document.getElementById('okb1').style.display = 'none';
    document.getElementById('okb1').remove();
    document.getElementById('okb2').style.display = 'block';
    document.getElementById('okb3').style.display = 'none';
    document.getElementById('okb4').style.display = 'none';
  }
  if (randomBgIndex1 === 2){
    document.getElementById('okb1').style.display = 'none';
    document.getElementById('okb1').remove();
    document.getElementById('okb2').style.display = 'none';
    document.getElementById('okb2').remove();
    document.getElementById('okb3').style.display = 'block';
    document.getElementById('okb4').style.display = 'none';
  }
  if (randomBgIndex1 === 3){
    document.getElementById('okb1').style.display = 'none';
    document.getElementById('okb1').remove();
    document.getElementById('okb2').style.display = 'none';
    document.getElementById('okb2').remove();
    document.getElementById('okb3').style.display = 'none';
    document.getElementById('okb2').remove();
    document.getElementById('okb4').style.display = 'block';
  }
}

function check2(click1)
{
  let b = document.querySelectorAll("." + characters1[index]);
  for (let i = 0; i < b.length; i++)
  {
    if (!(b[i].classList.contains("before1")))
    {
      b[i].classList.add('checking1');
      break;
    }
  }

  if ((click1.classList.contains("checking1")) && !(click1.classList.contains("before1")))
  {
    timerForHuntingLetter3(3)


    click1.classList.remove("checking1");
    let num1 = click1.id.split("r");

    let text1 = document.querySelectorAll(".elcText1");
    for (let i = 0; i < text1.length; i++) {
      let beforeItems1 = text1[i].id.split("r");

      if (beforeItems1[1] <= num1[1]) {
        text1[i].classList.add("before1");
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
          if (index === 6){
            document.getElementById('fieldset2').style.display = 'none';
            document.getElementById('fieldset3').style.display = 'block';
            index = 0;
            subLevel="C";
            document.getElementById('subLevel').innerHTML = "SubLevel : " + subLevel;
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
  console.log("b")
  let click1 = e.target;
  check2(click1);
});
