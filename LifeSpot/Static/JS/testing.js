// Слайдер с прокруткой
let offset = 0;
let images = document.querySelector(".images");
const beginningLastImageImage = (images.childElementCount - 1) * 1000;

let btn = document.querySelector(".buttons");
btn.addEventListener("click", move);

function move(e) {
    let step = Number(e.target.dataset.offset);
    offset += step;

    if (offset < 0) offset = beginningLastImageImage;

    if (offset > beginningLastImageImage) offset = 0;
    images.style.left = -offset + "px";
}

// Создаем объект Map
let myMap = new Map();
myMap.set("Германия", "Берлин")
myMap.set("Швеция", "Стокгольм")
myMap.set(1, "Москва")

let newArray = [];
// Перебор Map в цикле for
for (let result of myMap){
    newArray.push(result);
}
console.log(newArray);

let newArrayOfStrings = [];
// Перебор Map с помощью Array.from
// Позволяет на лету выполнять операции с парой ключ-значение
Array.from(myMap, ([key,value]) => newArrayOfStrings.push(`${key} - ${value}`) );
console.log(newArrayOfStrings);

function clickHandler() {
    let currentInput = document.getElementsByTagName('input')[0].value.toLowerCase();

    alert(`Последний ввод: ${this.lastInput}\n
           Текущий ввод: ${currentInput}`);
    this.lastInput = currentInput;
}