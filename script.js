function changeColor() {
    var submit = document.getElementById('color1');
    submit.style.color = 'violet';  
}

function backChange() {
    var names = document.getElementById('color1');
    names.innerHTML = 'Alicia';
}

function changeBack() {
    var other = document.getElementById('color2');
    other.style.color = 'red';
}

function changeNormal() {
    var normal = document.getElementById('color2');
    normal.style.color = 'black';
}

function alice() {
    var alicia = document.getElementById('color2');
    alicia.style.textShadow = '4px 1px green';
}
