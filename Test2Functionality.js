/**
 * Created by Katrina on 7/18/2017.
 */
var btnStartStop = document.getElementById("start");
var imgRobot = document.getElementById("robot");
var leftpos = 0;
var stop;



btnStartStop.addEventListener("click", function () {
    if (stop == false) {
        btnStartStop.innerHTML = "Start";
        stop = true;
    }
    else {
        btnStartStop.innerHTML = "Stop";
        requestAnimationFrame(runAcross);
        stop = false;
    }
});

function runAcross() {
    if (stop != true) {
        leftpos += 5;
        imgRobot.style.left = leftpos + 'px';
        if (leftpos >= window.innerWidth) {
            imgRobot.style.right = 100 + 'px';
            leftpos = 0;
        }
        requestAnimationFrame(runAcross);

    }
}