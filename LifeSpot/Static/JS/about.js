/*
* Запросим пользовательский ввод
* и сохраним отзыв в объект
* 
* */
function getReview() {
    // Создадим объект
    let review = {}
    
    // Сохраним свойство имени
    review["userName"] = prompt("Как вас зовут ?")
    if(review["userName"] == null){
        return
    }
    
    // Сохраним текст отзыва
    review["comment"] = prompt("Напишите свой отзыв")
    if(review["comment"] == null){
        return
    }
    
    // Сохраним текущее время
    review["date"] = new Date().toLocaleString()

    if (confirm("Хотите, что-бы ваш отзыв могли оценить другие пользователи?")) {
        let feedback = Object.create(review);
        feedback.rate = 0;
        writeReview(feedback);
    } else {
        writeReview(review);
    }

}

/*
* Запишем отзыв на страницу 
* 
* */
const writeReview = review => {
    let rating = "";
    if (review.hasOwnProperty("rate")) {
        rating = `<p>Рейтинг отзыва: ${review.rate}</p>`;
    }
    document.getElementsByClassName('reviews')[0].innerHTML += '    <div class="review-text">\n' +
        `<p> <i> <b>${review.userName}</b>  ${review.date}</i></p>` +
        `<p>${review.comment}</p>`  + rating
        '</div>';
}
