// JavaScript Document
var countDownDate = new Date("Dec 25, 2024 00:00:00").getTime();


var x = setInterval(function() {


  var now = new Date().getTime();

  
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  
  document.getElementById("demo").innerHTML = days + " ngày " + hours + " giờ "
  + minutes + " phút " + seconds + " giây ";

 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "Canon event";
  }
}, 1000);
        window.page = 'home';
        window.logged_callback = [];
        window.match_detail_loaded = [];
        window.live_data_loaded = [];
        