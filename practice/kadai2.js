'use strict'
const qa = new Array();
qa[0] = ["たかなわ","こうわ","たかわ","takanawa"];
qa[1] = ["かめいど","かめど","かめと","kameido"];
qa[2] = ["こうじまち","おかとまち","かゆまち","koujimati"];
qa[3] = ["おなりもん","おかどもん","ごせいもん","onarimon"];
qa[4] = ["とどろき","たたりき","たたら","todoroki"];
qa[5] = ["しゃくじい","せきこうい","いじい","syakujii"];
qa[6] = ["ぞうしき","ざっしょく","ざっしき","zousiki"];
qa[7] = ["おかちまち","みとちょう","ごろしちょう","okatimati"];
qa[8] = ["ししぼね","ろっこつ","しこね","sisibone"];
qa[9] = ["こぐれ","こしゃく","こばく","kogure"];



/////////////////////////////////////////////////////////////////////////////////関数ゾーン↓
function shuffle(arr) {
    for (let i = arr.length -1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [aar[j], arr[i]] = [aar[i], arr[j]] 
    }
    return arr;
}
/////////////////////////////////////////////////////////////////////////////////問題番号ゾーン↓

for (let dex = 0; dex < qa.length; dex++) {
    // div要素を生成
    var h1 = document.createElement('h1');
    // h1要素にテキストを追加
    h1.textContent = (dex+1) + '. この地名はなんて読む？';
    // 生成したdiv要素を追加する
    document.getElementById('wrapper').appendChild(h1);
    
    /////////////////////////////////////////////////////////////////////////////////画像表示ゾーン↓
    
        // div要素を生成
        var div = document.createElement('div');
        // classを追加
        div.className = 'img';
        
        // img要素を生成
        var img = document.createElement('img');
        // 画像パスを追加
        img.src = 'imgbox/'+ qa[dex][3] +'.png';
        // altを追加
        img.alt = qa[dex][0];
        
        // img要素をdiv要素の子要素に追加
        div.appendChild(img);
        
        // 生成したdiv要素を追加する
        document.getElementById('wrapper').appendChild(div);
        
        /////////////////////////////////////////////////////////////////////////////////選択肢ゾーン↓ 


        // ul要素を生成
        var ul = document.createElement('ul');
        for (let i = 0; i < 3; i++) {
            // li要素を生成
            const li = document.createElement('li');
            // classを追加
            li.classList.add('choice');
            // button要素を生成
            const input = document.createElement('input');
            // classを追加
            input.id = 'choice' + (i+(dex*3));
            input.type = 'button';
            input.value = qa[dex][i];
            
            // button要素をli要素の子要素に追加
            li.appendChild(input);
            // li要素をul要素の子要素に追加
            ul.appendChild(li);
        };
        // 生成したul要素を追加する
        document.getElementById('wrapper').appendChild(ul);
        
        
        
    }
    /////////////////////////////////////////////////////////////////////////////////回答表示ゾーン↓
        for (let dex = 0; dex < qa.length; dex++) {
        
        document.getElementById('choice'+(0+(dex*3))).addEventListener('click', () => {
            // li要素を生成
            const li = document.createElement('li');
            // classを追加
            li.classList.add('judge');
            // li要素に正解テキストを追加
            li.innerHTML = '<p><span class="good">正解！</span></p><br><p>正解は' + qa[dex][0] + 'です！</p>'
            document.getElementById('choice'+(0+(dex*3))).parentNode.style.backgroundColor = '#08b3f0';
            document.getElementById('choice'+(0+(dex*3))).parentNode.style.color = '#fff';
            ul.insertBefore(li, document.getElementById('choice2').nextSibling);
            // ul.appendChild(li);
            document.getElementById('wrapper').appendChild(ul);
            
            document.getElementById('choice'+(0+(dex*3))).setAttribute("disabled", true);
            document.getElementById('choice'+(1+(dex*3))).setAttribute("disabled", true);
            document.getElementById('choice'+(2+(dex*3))).setAttribute("disabled", true);
        });
        document.getElementById('choice'+(1+(dex*3))).addEventListener('click', () => {
            // li要素を生成
            const li = document.createElement('li');
            // classを追加
            li.classList.add('judge');
            // li要素に正解テキストを追加
            li.innerHTML = '<p><span class="bad">不正解！</span></p><br><p>正解は' + qa[dex][0] + 'です！</p>'
            document.getElementById('choice'+(0+(dex*3))).parentNode.style.backgroundColor = '#08b3f0';
            document.getElementById('choice'+(0+(dex*3))).parentNode.style.color = '#fff';
            document.getElementById('choice'+(1+(dex*3))).parentNode.style.backgroundColor = '#fd6647';
            document.getElementById('choice'+(1+(dex*3))).parentNode.style.color = '#fff';
            ul.appendChild(li);
            document.getElementById('wrapper').appendChild(ul);
            
            document.getElementById('choice'+(0+(dex*3))).setAttribute("disabled", true);
            document.getElementById('choice'+(1+(dex*3))).setAttribute("disabled", true);
            document.getElementById('choice'+(2+(dex*3))).setAttribute("disabled", true);
        });
        document.getElementById('choice'+(2+(dex*3))).addEventListener('click', () => {
            // li要素を生成
            const li = document.createElement('li');
            // classを追加
            li.classList.add('judge');
            // li要素に正解テキストを追加
            li.innerHTML = '<p><span class="bad">不正解！</span></p><br><p>正解は' + qa[dex][0] + 'です！</p>'
            document.getElementById('choice'+(0+(dex*3))).parentNode.style.backgroundColor = '#08b3f0';
            document.getElementById('choice'+(0+(dex*3))).parentNode.style.color = '#fff';
            document.getElementById('choice'+(2+(dex*3))).parentNode.style.backgroundColor = '#fd6647';
            document.getElementById('choice'+(2+(dex*3))).parentNode.style.color = '#fff';
            ul.appendChild(li);
            document.getElementById('wrapper').appendChild(ul);

            document.getElementById('choice'+(0+(dex*3))).setAttribute("disabled", true);
            document.getElementById('choice'+(1+(dex*3))).setAttribute("disabled", true);
            document.getElementById('choice'+(2+(dex*3))).setAttribute("disabled", true);
        });

    }
