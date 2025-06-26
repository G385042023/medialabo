let kotae = Math.floor(Math.random() * 10) + 1;
console.log("答え（デバッグ用）：" + kotae);

let kaisu = 0;
let finish = false;  

document.querySelector('#hantei').addEventListener('click', hantei);

function hantei() {
  let yoso = Number(document.querySelector('#input').value);
  kaisu++;

  document.querySelector('#kaisu').textContent = kaisu;
  document.querySelector('#answer').textContent = yoso;

  let result = '';

  if (finish) {
  
    result = '答えは ' + kotae + ' でした。すでにゲームは終わっています。';
  } else if (yoso === kotae) {
    result = '正解です！おめでとう！';
    finish = true;  
  } else if (kaisu === 3) {
    result = 'まちがい。残念でした。答えは ' + kotae + ' です。';
    finish = true;  
  } else if (yoso < kotae) {
    result = 'まちがい。答えはもっと大きいです。';
  } else {
    result = 'まちがい。答えはもっと小さいです。';
  }

  document.querySelector('#result').textContent = result;
}
