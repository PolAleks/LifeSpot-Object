﻿
document.addEventListener("DOMContentLoaded", function () {
    let images = document.querySelectorAll(".item");
    let buttons = document.querySelector("#buttons");
    buttons.addEventListener("click", showNextImage);

    function showNextImage(e) {
        let step = Number(e.target.dataset.step);

        let currentIndex = Number(e.target.parentElement.dataset.visibleImage);
        let nextIndex = currentIndex + step;

        if (nextIndex >= (images.length - 1) || nextIndex <= 0) {
            e.target.classList.add("end");
        } else {
            next.classList.remove("end");
            prev.classList.remove("end");
        }

        if (images[nextIndex]) {
            images[currentIndex].classList.remove("show");
            images[nextIndex].classList.add("show");
            e.target.parentElement.dataset.visibleImage = nextIndex;

        }
    }
});




//function getReview() {
//    // Сохраним свойство имени
//    this.userName = prompt("Как вас зовут ?")
//    if(this.userName == null){
//        return
//    }
//    // Сохраним текст отзыва
//    this.comment = prompt("Напишите свой отзыв")
//    if(this.comment == null){
//        return
//    }
//    // Сохраним текущее время
//    this.date = new Date().toLocaleString()

//    if (confirm("Хотите, что-бы ваш отзыв могли оценить другие пользователи?")) {
//        let feedback = Object.create(this);
//        feedback.rate = 0;
//        writeReview(feedback);
//    } else {
//        writeReview(this);
//    }
//}

// Функция конструктор объекта Comment
function Comment() {
    this.userName = prompt("Как вас зовут?");
    if (this.userName == null) {
        this.empty = true;
        return;
    }
    this.comment = prompt("Напишите свой отзыв")
    if (this.comment == null) {
        this.empty = true;
        return;
    }
    this.date = new Date().toLocaleString()
}

function addComment() {
    let comment = new Comment();
    if (comment.empty)
        return;

    if (confirm("Хотите, что-бы ваш отзыв могли оценить другие пользователи?")) {
        let feedback = Object.create(comment);
        feedback.rate = 0;
        writeReview(feedback);
    } else {
        writeReview(comment);
    }
}

// Добавление отзыва на страницу 

const writeReview = review => {
    let rating = "";
    if (review.hasOwnProperty("rate")) {
        let currentId = Math.floor(Math.random() * 1000);
        rating = `<button id ="${currentId}" onclick=addLike(this.id)>❤️ 0</button>`;
    }
    document.getElementsByClassName('reviews')[0].innerHTML += '    <div class="review-text">\n' +
        `<p> <i> <b>${review.userName}</b>  ${review.date}</i> ${rating}</p>` +
        `<p>${review.comment}</p>` +
        '</div>';
}

function addLike(id) {
    let like = document.getElementById(id);
    let rate = Number(like.innerText.slice(2));
    like.innerText = `❤️ ${++rate}`;
}


