function Calculator() {

    let l = document.querySelector('#left').value;
    let r = document.querySelector('#right').value;
  
    let left = Number(l);
    let right = Number(r);
  
    let result = left + right;
  
    document.querySelector('#answer').textContent = result;
  }
let btn = document.querySelector('#calc');
btn.addEventListener('click', Calculator)
