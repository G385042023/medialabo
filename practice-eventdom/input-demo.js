function greeting() {
    let i = document.querySelector('input[name="shimei"]');
    let shimei = i.value;
    let aisatsu = "こんにちは、" + shimei + "さん";
    let p = document.querySelector('#message');
    p.textContent = aisatsu;
  }
  let b = document.querySelector('button#print');
  b.addEventListener('click', greeting);
  