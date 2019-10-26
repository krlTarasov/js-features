let hole1 = document.getElementById('hole1'),
hole2 = document.getElementById('hole2'),
hole3 = document.getElementById('hole3'),
hole4 = document.getElementById('hole4'),
hole5 = document.getElementById('hole5'),
hole6 = document.getElementById('hole6'),
hole7 = document.getElementById('hole7'),
hole8 = document.getElementById('hole8'),
hole9 = document.getElementById('hole9'),
lost = document.getElementById('lost'), dead = document.getElementById('dead')
i = 0, k = 0;

function checkWinOrLoss() {
    if (i >= 10) {
        alert('you win');
        i = 0;
        k = 0;

        dead.textContent = 0;
        lost.textContent = k;
    }
    if (k >= 5) {
        alert('you lost');
        i = 0;
        k = 0;

        dead.textContent = 0;
        lost.textContent = k;
    }
} 

hole1.onclick = () => {
    if (hole1.className == 'hole hole_has-mole') {
        i++;
        dead.textContent = i;
    } else {
        k++;
        lost.textContent = k;
    }

    checkWinOrLoss()
}

hole2.onclick = () => {
    if (hole2.className == 'hole hole_has-mole') {
        i++;
        dead.textContent = i;
    } else {
        k++;
        lost.textContent = k;
    }

    checkWinOrLoss()
}

hole3.onclick = () => {
    if (hole3.className == 'hole hole_has-mole') {
        i++;
        dead.textContent = i;
    } else {
        k++;
        lost.textContent = k;
    }

    checkWinOrLoss()
}

hole4.onclick = () => {
    if (hole4.className == 'hole hole_has-mole') {
        i++;
        dead.textContent = i;
    } else {
        k++;
        lost.textContent = k;
    }

    checkWinOrLoss()
}

hole5.onclick = () => {
    if (hole5.className == 'hole hole_has-mole') {
        i++;
        dead.textContent = i;
    } else {
        k++;
        lost.textContent = k;
    }

    checkWinOrLoss()
}

hole6.onclick = () => {
    if (hole6.className == 'hole hole_has-mole') {
        i++;
        dead.textContent = i;
    } else {
        k++;
        lost.textContent = k;
    }

    checkWinOrLoss()
}

hole7.onclick = () => {
    if (hole7.className == 'hole hole_has-mole') {
        i++;
        dead.textContent = i;
    } else {
        k++;
        lost.textContent = k;
    }

    checkWinOrLoss()
}

hole8.onclick = () => {
    if (hole8.className == 'hole hole_has-mole') {
        i++;
        dead.textContent = i;
    } else {
        k++;
        lost.textContent = k;
    }

    checkWinOrLoss()
}

hole9.onclick = () => {
    if (hole9.className == 'hole hole_has-mole') {
        i++;
        dead.textContent = i;
    } else {
        k++;
        lost.textContent = k;
    }

    checkWinOrLoss()
}