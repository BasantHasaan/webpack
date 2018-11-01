// import logMessage from './js/logger'
import './css/style.css'
// import 'jquery-countdown';
import  'jquery';
// require('jquery-countdown');
// $(document).ready(function () {
//     //your code here

    // $('#getting-started').countdown('2019/01/01', function(event) {
    //     $(this).html(event.strftime('%M:%S'));
    //   });
  //});
  function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text(minutes + ":" + seconds);

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

jQuery(function ($) {
    var fiveMinutes = 60 * 5,
        display = $('#getting-started');
    startTimer(fiveMinutes, display);
});

// import '2048-master/2048.js';

// Log message to console
logMessage('Welcome to Expack!')