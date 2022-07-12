// Modal

function abrirModal(){
    document.getElementById('main__modal-background').style.visibility = 'visible';
}

function fecharModal(){
    document.getElementById('main__modal-background').style.visibility = 'hidden';
}

// Countdown

var countDownDate = new Date("Dec 16, 2022 13:37:25").getTime();

var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();
  
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
  
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    // Display the result in the element with id="demo"
    document.getElementById("main__countdown-days").innerHTML = (`${days}`);
    document.getElementById("main__countdown-hours").innerHTML = (`${hours}`).padStart(2, '0');
    document.getElementById("main__countdown-minutes").innerHTML = (`${minutes}`).padStart(2, '0');
    document.getElementById("main__countdown-seconds").innerHTML = (`${seconds}`).padStart(2, '0');
  
    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("main__countdown").innerHTML = "EXPIRED";
    }
  }, 1000);