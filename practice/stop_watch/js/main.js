(function() {
    'use strict';
    var startTime,timerId;
    var elapsedTime = 0;
    var isRunning = false;

    var startButton = document.getElementById('start');
    var stopButton = document.getElementById('stop');
    var resetButton = document.getElementById('reset');
    var timerText = document.getElementById('timerText');

    function setButtonState (start, stop, reset) {
        startButton.className = start ? 'btn active' : 'btn inactive';
        stopButton.className = stop ? 'btn active' : 'btn inactive';
        resetButton.className = reset ? 'btn active' : 'btn inactive';
    }

    setButtonState(true, false, false);

    startButton.addEventListener('click', function () {
        if (isRunning) return;
        isRunning = true;
        startTime = Date.now(); // 1970/1/1 00:00:00:00 からの経過ミリ秒
        updateTimerText();
        setButtonState(false, true, false);
    });

    stopButton.addEventListener('click', function () {
        if (!isRunning) return;
        isRunning = false;
        elapsedTime += Date.now() - startTime;
        clearTimeout(timerId);
        setButtonState(true, false, true);
    });

    resetButton.addEventListener('click', function () {
        if (isRunning) return;
        timerText.innerHTML = '0.00';
        elapsedTime = 0;
        setButtonState(true, false, false);
    });

    function updateTimerText () {
        timerId = setTimeout(function () {
            var t = Date.now() - startTime + elapsedTime;
            timerText.innerHTML = (t / 1000).toFixed(2);
            updateTimerText();
        }, 10);
    }
})();