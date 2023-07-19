


  function hello(){
    var desc = document.getElementById('getInput').value;

    console.log(desc);
    if(desc=='clear sky'||desc=='few clouds'|| desc=='overcast clouds')
    {
      console.log("Lol1");
      document.body.style.backgroundImage = "url('css/Images/WhatsApp Image 2023-04-27 at 03.43.30.jpg')";
      document.body.style.backgroundSize = "100%";
      document.querySelectorAll('.sats').forEach((item)=>{
        item.style.color="rgb(90 5 6)";
        item.style.backgroundImage="linear-gradient(to top right,#ffbf46,39%,#F9484A,64%,#ffbf46,#F9484A)";
      });
      document.querySelectorAll('.stats2').forEach((item)=>{
        item.style.color="white";
      });

      document.querySelectorAll('.hName').forEach((item)=>{
        item.style.backgroundImage = "linear-gradient(319deg, rgb(177 47 13) 21%, rgb(254, 127, 45) 50%, rgb(255, 191, 70) 85%)";
      });
      document.querySelectorAll('.out-but').forEach((item)=>{
        item.addEventListener("mouseover",function(){
          item.style.background = "#F9484A";
          item.style.color = "white";
          item.style.borderColor = "white";
        })
        item.style.borderColor = "#F9484A";
        item.style.backgroundImage = "linear-gradient(to top right,#ffbf46,39%,#F9484A,64%,#ffbf46,#F9484A)";
      });
      document.querySelectorAll('.out-but').forEach((item)=>{
        item.addEventListener("mouseout",function(){
          item.style.backgroundImage = "linear-gradient(to top right,#ffbf46,39%,#F9484A,64%,#ffbf46,#F9484A)";
          item.style.borderColor = "#F9484A";
        })
      })
      document.querySelector('.description').innerHTML='The Sky is clear!!!Go out, plan a picnic';

    }



    else if(desc=='haze'||desc=='mist')
    {
      console.log("Lol2");
      document.body.style.backgroundImage = "url('css/Images/Fog2.jpg')";
      document.body.style.backgroundSize = "100%";
      document.querySelectorAll('.sats').forEach((item)=>{
        item.style.color="rgb(45 37 21)";
        item.style.backgroundImage="linear-gradient(to right top, rgb(255 255 255), 26%, rgb(146 114 79), 76%, rgb(255 255 255), rgb(146 114 79))";
      });
      document.querySelectorAll('.stats2').forEach((item)=>{
        item.style.color="#f9f9f9de";
      });
      document.querySelectorAll('.hName').forEach((item)=>{
        item.style.backgroundImage = "linear-gradient(315deg, #772f1a 0%, #f2a65a 74%)";
      });
      document.querySelectorAll('.out-but').forEach((item)=>{
        item.addEventListener("mouseover",function(){
          item.style.background = "#772f1a ";
          item.style.color = "white";
          item.style.borderColor = "white";
        })
        item.style.color="rgb(45 37 21)";
        item.style.backgroundImage="linear-gradient(to right top, rgb(255 255 255), 26%, rgb(146 114 79), 76%, rgb(255 255 255), rgb(146 114 79))";
        item.style.borderColor = "black";
      });
      document.querySelectorAll('.out-but').forEach((item)=>{
        item.addEventListener("mouseout",function(){
          item.style.color="rgb(45 37 21)";
          item.style.backgroundImage="linear-gradient(to right top, rgb(255 255 255), 26%, rgb(146 114 79), 76%, rgb(255 255 255), rgb(146 114 79))";
          item.style.borderColor = "black";
        })
      })
      document.querySelector('.description').innerHTML='The Sky is foggy!!!Get your goggles and watch out';


    }




    else if(desc=='scattered clouds' || desc=='broken clouds')
    {
      document.body.style.backgroundImage = "url('css/Images/cloud.jpg')";
      document.body.style.backgroundSize = "100%";
      document.querySelectorAll('.sats').forEach((item)=>{
        item.style.color="#2A2A72";
        item.style.backgroundImage="linear-gradient(to top right,white,18%,rgb(14 107 164),75%,white,rgb(14 107 164))";
      });

      document.querySelectorAll('.stats2').forEach((item)=>{
        item.style.color="#b9e6ff";
      });

      document.querySelectorAll('.hName').forEach((item)=>{
        item.style.backgroundImage = "linear-gradient(45deg, #2a2a72 0%, #009ffd 74%)";
      });
      document.querySelectorAll('.out-but').forEach((item)=>{
        item.addEventListener("mouseover",function(){
          item.style.background = "white";
          item.style.color = "#274060";
          item.style.borderColor = "#274060";
        })
        item.style.color="#2A2A72";
        item.style.backgroundImage="linear-gradient(to top right,white,18%,rgb(14 107 164),75%,white,rgb(14 107 164))";
      });
      document.querySelectorAll('.out-but').forEach((item)=>{
        item.addEventListener("mouseout",function(){
          item.style.color="#2A2A72";
          item.style.backgroundImage="linear-gradient(to top right,white,18%,rgb(14 107 164),75%,white,rgb(14 107 164))";
        })
      })
        document.querySelector('.box-1').style.margin = "6% auto";
        document.querySelector('.description').innerHTML='The Sky is cloudy☁️Its peaceful out there';
    }

    else if( desc=='rain'|| desc=='light rain'|| desc=='moderate rain')
    {
      console.log("Lol1");
      document.body.style.backgroundImage = "url('css/Images/rain4.jpg')";
      document.body.style.backgroundSize = "100%";
      document.querySelectorAll('.sats').forEach((item)=>{
        item.style.color="white";
        item.style.backgroundImage="linear-gradient(to top right,white,18%,#274060,75%,white,#274060)";
      });
      document.querySelectorAll('.stats2').forEach((item)=>{
        item.style.color="white";
      });

      document.querySelectorAll('.hName').forEach((item)=>{
        item.style.backgroundImage = " linear-gradient(45deg, rgb(113 186 218) 0%, #dbe7fc 74%)";
      });
      document.querySelectorAll('.out-but').forEach((item)=>{
        item.addEventListener("mouseover",function(){
          item.style.background = "white";
          item.style.color = "#274060";
          item.style.borderColor = "#274060";
        })
        item.style.borderColor = "white";
        item.style.backgroundImage="linear-gradient(to top right,white,18%,#274060,75%,white,#274060)";
      });
      document.querySelectorAll('.out-but').forEach((item)=>{
        item.addEventListener("mouseout",function(){
            item.style.backgroundImage="linear-gradient(to top right,white,18%,#274060,75%,white,#274060)";
          item.style.borderColor = "white";
          item.style.color = "white";
        })
      })
      document.querySelector('.description').innerHTML='Ah! Its raining out there, get your Umbrellas';
    }
    else if(desc=='thunderstorm'|| desc=='thunderstorm with rain' )
    {
      console.log("Lol4");
      document.body.style.backgroundImage = "url('css/Images/Thunder.jpg')";
      document.body.style.backgroundSize = "100%";
      document.querySelectorAll('.sats').forEach((item)=>{
        item.style.color="rgb(0 0 0)";
        item.style.backgroundImage="linear-gradient(to top right,#bdc3c7,26%,#2c3e50,76%,#bdc3c7,#2c3e50)";
      });
      document.querySelectorAll('.stats2').forEach((item)=>{
        item.style.color="#f9f9f9de";
      });
      document.querySelectorAll('.hName').forEach((item)=>{
        item.style.backgroundImage = "linear-gradient(to left bottom, rgb(54 51 51), rgb(255 255 255), 232%, rgb(27 32 36) )";
      });
      document.querySelectorAll('.out-but').forEach((item)=>{
        item.addEventListener("mouseover",function(){
          item.style.background = "#2c3e50";
          item.style.color = "white";
          item.style.borderColor = "white";
        })
        item.style.borderColor = "black";
        item.style.backgroundImage = "linear-gradient(to top right,#bdc3c7,26%,#2c3e50,76%,#bdc3c7,#2c3e50)";
      });
      document.querySelectorAll('.out-but').forEach((item)=>{
        item.addEventListener("mouseout",function(){
          item.style.backgroundImage = "linear-gradient(to top right,#bdc3c7,26%,#2c3e50,76%,#bdc3c7,#2c3e50)";
          item.style.borderColor = "black";
        })
      })
      if(desc=='thunderstorm'|| desc=='thunderstorm with rain')
      {
        document.querySelector('.description').innerHTML='Alert!!! A Thunderstorm, please be safe';
      }
      else{
        document.querySelector('.description').innerHTML='Prediction of a Thunderstorm!!! Please take caution';
      }
      // document.querySelector('.vName').style.backgroundImage = "linear-gradient(to left bottom, rgb(54 51 51), rgb(255 255 255), 232%, rgb(27 32 36))";
    }
    else if(desc=='snow')
    {
      console.log("Lol5");
      document.body.style.background = "blue";
      document.querySelectorAll('.sats').forEach((item)=>{
        item.style.color="red";
      });
    }
    else
    {
      console.log("Lol6");
      document.body.style.background = "orange";
      document.querySelectorAll('.sats').forEach((item)=>{
        item.style.color="grey";
      });
    }
  }
var x = document.getElementById("myAudio");
  function playMusic(name){
    // console.log("Hello");
    // // var name=document.querySelector('.text1').innerText;
    // console.log(name);
    var sc = "css/audio/"+name+".mp3";
    console.log(sc);
    document.getElementById("myAudio").setAttribute('src',sc);
    if(x.paused){
      x.play();
    }




  }
  function pauseMusic(name){
    // console.log("Hello");
    // // var name=document.querySelector('.text1').innerText;
    // console.log(name);
    var sc = "css/audio/"+name+".mp3";
    console.log(sc);
    document.getElementById("myAudio").setAttribute('src',sc);
    x.pause();




  }
