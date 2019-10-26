let cookies = document.getElementById('cookies'), 
text = document.getElementById('text'),
i = 0;
cookies.onclick = () => {
    i++;
    text.textContent = 'Всего кликов ' + i;
    cookies.width = 200 + 20 * (i % 2);
}