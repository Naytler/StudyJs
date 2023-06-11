const spr = document.querySelectorAll('.spr');

for(let i = 0; i < spr.length; i++){
    let num = spr[i].textContent = i + 3;
    num.innerHtml = '1';
    console.log(num);
}