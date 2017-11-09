
window.onload = function () {
    //--------------basket-----
var basket = document.getElementById('basket');
var panel = document.getElementsByClassName('nav_hidden');
console.log(basket);
var nav = document.getElementsByClassName('nav_menu');
var slider = document.getElementsByClassName('slider');
var i = 0;
var divBasket = document.createElement('div');
divBasket.id = "basketPanel";
basket.onclick = function () {
    if(i==0){
        console.log(basket);

        panel[0].appendChild(divBasket);
        divBasket.innerHTML = "<strong>Ура!</strong>";
        nav[0].style.display="none";
        slider[0].style.display="none";
        console.log(i);
        i++;
    }
    else{
        divBasket.remove();
        nav[0].style.display="inline-block";
        slider[0].style.display="block";
        i--;
    }
}

// ----category

var category = document.getElementsByClassName('category');
for(let i = 0; i<category.length; i++){
    category[i].onclick = function(){
        // console.log(this.id);
        bookSearch(this);
    }
}
document.getElementById('button').addEventListener('click', bookSearch(this), true);
// var search = document.getElementById('button');
// search.onclick = function () {
//     bookSearch(this);
// }
// -------Функция для поиска и формирования списка книг по категориям---
function bookSearch(x) {
    var search = '';
    if(x.className=="category"){
        search =  x.id; //для категорий
    }
    else{
        search = document.getElementById('search').value; //для поиска
    }
    document.getElementById('result').innerHTML = '';
    // console.log(search);

    $.ajax({
        url: "https://www.googleapis.com/books/v1/volumes?q=" + search,
        dataType: "json",

        success: function (data) {
            for (let i = 0; i < data.items.length; i++) {
                // console.dir(data.items[i]);
                var div = document.createElement('div');
                var h4 = document.createElement('h4');
                var p = document.createElement('p');
                var divImg = document.createElement('div');
                divImg.className = 'smallCardImg';
                var span = document.createElement('span');
                var sell = document.createElement('button');
                sell.className = 'add_to_card';
                $(sell).on('click', addToCard);
                p.innerHTML = data.items[i].volumeInfo.authors;
                h4.innerHTML = data.items[i].volumeInfo.title;
                var poster = (data.items[i].volumeInfo.imageLinks ? data.items[i].volumeInfo.imageLinks.thumbnail : 'img/notPoster.jpeg');
                divImg.style.backgroundImage = 'url("'+poster+'")';
                // divImg.style.backgroundImage = 'url("' + data.items[i].volumeInfo.imageLinks.thumbnail + '")';
                span.innerHTML = data.items[i].saleInfo.listPrice ? data.items[i].saleInfo.listPrice.amount + ' ' + data.items[i].saleInfo.listPrice.currencyCode : 'not available';
                sell.id = data.items[i].id;
                sell.innerHTML = 'Add to Card';
                div.appendChild(divImg);
                div.appendChild(h4);
                div.appendChild(p);
                div.appendChild(span);
                div.appendChild(sell);
                button.classList.add('buy_button');
                result.appendChild(div);
                div.classList.add('grocery_card');
            }

        },
        type: 'GET'
    });

}

var wish_list = document.getElementsByClassName('wish_list');
    wish_list[0].onclick = function () {
        var mainBlock = document.getElementsByClassName('mainBlock');
        mainBlock.remove;

    }



};


