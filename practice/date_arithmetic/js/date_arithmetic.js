function getAge() {
    'use stricrt';
    // 入力値の取得
    var birthday = document.getElementById('birthday').value.split("-");

    // 日付オブジェクトの作成
    var d1 = new Date(birthday[0], birthday[1] - 1, birthday[2]);
    var d2 = new Date();

    //日数、年齢の計算
    var diff = d2.getTime() - d1.getTime();
    var daysPast = Math.floor(diff / (1000 * 60 * 60 * 24));
    var age = Math.floor(daysPast / 365.25);

    //結果の表示
    document.getElementById('daysPast').innerHTML = daysPast;
    document.getElementById('age').innerHTML = age;

}


