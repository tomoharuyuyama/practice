qa = new Array();
qa[0] = ["たかわ","こうわ","たかなわ","正解は「たかなわ」です！", 2];
qa[1] = ["かめど","かめいど","かめと","正解は「かめいど」です！", 1];
qa[2] = ["かゆまち","おかとまち","こうじまち","正解は「こうじまち」です！", 2];
qa[3] = ["おかどもん","おなりもん","ごせいもん","正解は「おなりもん」です！", 1];
qa[4] = ["たたら","たたりき","とどろき","正解は「とどろき」です！", 2];
qa[5] = ["しゃくじい","せきこうい","いじい","正解は「しゃくじい」です！", 0];
qa[6] = ["ざっしき","ざっしょく","ぞうしき","正解は「ぞうしき」です！", ];
qa[7] = ["ごろしちょう","みとちょう","おかちまち","正解は「おかちまち」です！", 2];
qa[8] = ["しこね","ろっこつ","ししぼね","正解は「ししぼね」です！", 2];
qa[9] = ["こぐれ","こしゃく","こばく","正解は「こぐれ」です！", 0];



for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 3; j++) {
        document.getElementById(qa[i][j]).innerHTML = qa[i][j];
    }
}


function yuyama(i, j, k, l){
    var x = document.getElementById(j);
    var y = document.getElementById(k);
    var z = document.getElementById(qa[l][3]);
    x.style.display = 'block';
    if (i == 1) {
        y.innerHTML = "正解！";
        y.style.background = 'linear-gradient(transparent 90%,#08b3f0 0)';
    }else{
        y.innerHTML = "不正解！";
        y.style.background = 'linear-gradient(transparent 90%,#fd6647 0)';
    }
    z.innerHTML = qa[l][3];
    z.style.background = 'none';
}


