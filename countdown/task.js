let timer = document.getElementById('timer');
let i = 7;
setInterval(() => {
    timer.textContent = i;
    if (i <= 0) {
        alert('You win!', i)
    }
    i--;
}, 1000);