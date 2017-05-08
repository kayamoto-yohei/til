function getResult() {
    'use stricrt';
    // 現在時刻とターゲットの時刻の差を算出
    var target = new Date(2017, 11, 17, 19, 0, 0).getTime();
    var now = Date.now();
    var diff = (target - now) / 1000;
    // console.log(target, now, diff)

    // 残り日数や時間を計算
    var d = Math.floor(diff / 60 / 60 / 24);
    diff = diff - 60 * 60 * 24 * d;
    var h = Math.floor(diff / 60 / 60);
    diff = diff - 60 * 60 * h;
    var m = Math.floor(diff / 60);
    diff = diff - 60 * m;
    var s = Math.floor(diff);
    // console.log(d,h,m,s);

    // 結果を表示
    document.getElementById('remainingDays').innerHTML = d;
    document.getElementById('remainingTime').innerHTML = padZero(h) + ':' + padZero(m) + ':' + padZero(s);

    // 繰り返し処理
    setTimeout(function() {
        getResult();
    }, 200);
}
getResult();

function padZero(n) {
    'use stricrt';
    return (n < 10) ? '0' + n : n;
}