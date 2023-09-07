
function sessionHandler(logger, cheker) {
    if (!window.sessionStorage.getItem("startDate")) {
        window.sessionStorage.setItem("startDate", new Date().toLocaleString());
    }

    if (!window.sessionStorage.getItem("userAgent")) {
        window.sessionStorage.setItem("userAgent", window.navigator.userAgent);
    }

    if (window.sessionStorage.userAge == undefined) {
        window.sessionStorage.userAge = +prompt("Пожалуйста, введите ваш возраст?");

        cheker(true);
    } else {
        cheker(false);
    }

    logger();
}

function checkAge(flag) {
    if (window.sessionStorage.userAge >= 18) {
        if (flag) alert("Приветствуем на LifeSpot! " + '\n' + "Текущее время: " + new Date().toLocaleString());
    }
    else {
        alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
        window.location.href = "http://www.google.com"
    }
}



/*
* Вывод данных сессии в консоль
* 
* */
let sessionLog = function () {
    console.log(`Начало сессии: ${window.sessionStorage.getItem("startDate")}`);
    console.log(`Данные клиента: ${window.sessionStorage.getItem("userAgent")}`);
    console.log(`Возраст пользователя: ${window.sessionStorage.getItem("userAge")}`);
}

/*
* Функция для фильтраци контента
* Будет вызываться благодаря атрибуту oninput на index.html
* 
* */

function filterContent() {
    let elements = document.getElementsByClassName('video-container');

    for (let i = 0; i <= elements.length; i++) {
        let videoText = elements[i].getElementsByTagName('h3')[0].innerText;

        if (!videoText.toLowerCase().includes(inputParseFunction().toLowerCase())) {
            elements[i].style.display = 'none';
        } else {
            elements[i].style.display = 'inline-block';
        }
    }
}

/*
* Всплывающее окно будет показано по таймауту
*
* */
// setTimeout(() =>
//     alert("Нравится LifeSpot? " + '\n' +  "Подпишитесь на наш Instagram @lifespot999!" ),
// 7000);




