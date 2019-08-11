

const view = document.querySelector('.view');

const buttons = document.querySelectorAll('.btn');

buttons.forEach(item => {
    item.addEventListener('click', () => {
       if (item.innerText == "C"){
           view.innerText = '';
       } else if (item.innerText == "="){
           view.innerText = +eval(view.innerText).toFixed(11);
       } else {
           view.innerText += item.innerText; 
       }
    });
});





setInterval( function() {
    const time = new Date;
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();
    console.log(s);
    if (h < 10) {
        h = `0${h}`;
    } if (m < 10) {
        m = `0${m}`;
    } if (s < 10) {
        s = `0${s}`;
    }
    const clock = document.querySelector('.clock');
    clock.innerText = `${h}:${m}:${s}`;
},1000);
