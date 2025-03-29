function moveButton() {
    const movelButton = document.getElementById('movel');
    const maxX = window.innerWidth - movelButton.offsetWidth;
    const maxY = window.innerHeight - movelButton.offsetHeight;
    
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    movelButton.style.left = randomX + 'px';
    movelButton.style.top = randomY + 'px';
}

function fla(){
    alert("bem vindo a nação!!!");
}