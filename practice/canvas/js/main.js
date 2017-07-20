window.onload = function() {
    'use strict';
    if (!window.HTMLCanvasElement) return;
    var canvas = document.querySelector('#canvas-container');
    var ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.arc(100, 100, 40, 0, 2 * Math.PI, false);
    ctx.fillStyle='#d0a869';
    ctx.fill();
}

window.requestAnimationFrame = (function(){
    return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (callback) {
        window.setTimeout(callback, 1000 / 60);
    }
})();

function drawCircle(x, y, scale, color) {
    ctx.beginPath();
    ctx.arc(x, y, scale, 0, 2*Math.PI, false);
    ctx.fillStyle = color;
    ctx.fill();
}

var speed = 2;    //移動速度
var x = 0;      //X軸の位置

// ループ処理
// function loop() {
//     requestAnimFrame(loop);
//     ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height);
//     // ループ毎にxを加算
//     x += speed;
//     // 円を描画
//     drawCircle(x, 100, 20, '#D0A869');
// }
// loop();