var cardAdded = JSON.parse(localStorage.getItem("cardAdded")) || [];

function bookSearch() {
    var search = document.getElementById('search').value;
    document.getElementById('result').innerHTML = '';

    $.ajax({
        url: "https://www.googleapis.com/books/v1/volumes?q=" + search,
        dataType: "json",

        success: function (data) {
            for (var i = 0; i < data.items.length; i++) {
                var div = document.createElement('div');
                var details = document.createElement('div');
                var price_and_over = document.createElement('div');
                var h4 = document.createElement('h4');
                var p = document.createElement('p');
                var divImg = document.createElement('img');
                divImg.className = 'smallCardImg';
                var span = document.createElement('span');
                var sell = document.createElement('button');
                sell.className = 'add_to_card';
                $(sell).on('click', addToCard);
                var averageRating = document.createElement('div');
                averageRating.innerHTML = (data.items[i].volumeInfo && data.items[i].volumeInfo.averageRating ? data.items[i].volumeInfo.averageRating + ' rating' : 'no');
                // console.log(averageRating);
                p.innerHTML = data.items[i].volumeInfo.authors;
                h4.innerHTML = data.items[i].volumeInfo.title;
                var poster = (data.items[i].volumeInfo.imageLinks ? data.items[i].volumeInfo.imageLinks.thumbnail : 'img/notPoster.jpeg');
                //
                divImg.src=poster;
                //
                span.innerHTML = data.items[i].saleInfo.listPrice ? data.items[i].saleInfo.listPrice.amount + ' ' + data.items[i].saleInfo.listPrice.currencyCode : 'not available';
                sell.id = data.items[i].id;
                sell.innerHTML = 'Add to Card';
                //
                div.appendChild(divImg);
                //
                details.appendChild(h4);
                details.appendChild(p);
                details.classList.add('details');
                div.appendChild(details);
                price_and_over.appendChild(span);
                price_and_over.appendChild(sell);
                price_and_over.appendChild(averageRating);
                price_and_over.classList.add('price_and_over');
                div.appendChild(price_and_over);
                button.classList.add('buy_button');
                result.appendChild(div);
                div.classList.add('grocery_card');

            }

        },
        type: 'GET'

    });

}

document.getElementById('button').addEventListener('click', bookSearch, false);

function addToCard(event) {

    console.dir($(event.target).parent().parent().find(".smallCardImg")[0].src);
    // var imgLocal = $(event.target).parent().parent().find(".smallCardImg")[0].src);


    // Add book to Card
    var image = $(event.target).parent().parent().find(".smallCardImg")[0].src;
    console.log(image);
    var title = $(event.target).parent().parent().find(".details h4")[0].innerHTML;
    var author = $(event.target).parent().parent().find(".details p")[0].innerHTML;
    // var src = $(event.target).parent().parent().


    var articul = $(this).attr('id');

    // cardAdded.push({ title: title, author: author, image: image });
    cardAdded.push({title: title, author: author, image: image});


    localStorage.setItem('cardAdded', JSON.stringify(cardAdded));


    showCard();

    console.log("CARD >>>> ", cardAdded);
}


function showCard() {
    $('#basketPanel').html("");
    var result = document.createElement("div");
    for (var index in cardAdded) {
        // Create block to add Cards
        var cardItem = document.createElement("div");
        cardItem.className = 'cardItem';
        // console.log(cardItem);
        result.appendChild(cardItem);

        // Create small image of a card
        var cardImg = document.createElement("img");
        cardImg.className = 'smallCardImg';


        // console.log(cardImg);
        cardImg.src = cardAdded[index].image;
        cardItem.appendChild(cardImg);


        // Create teg with title
        var cardTitle = document.createElement("p");
        // console.log(cardTitle);
        cardTitle.innerHTML = cardAdded[index].title;
        cardItem.appendChild(cardTitle);

        // Create teg with author
        var cardAuthor = document.createElement('p');
        // console.log(cardAuthor);
        cardAuthor.innerHTML = cardAdded[index].author;

        cardItem.appendChild(cardAuthor);

    }
    $('#basketPanel').append(result);

}

showCard();


// var countBooks = 0;
// var booksLength = 10;
//
//
// let URL = `https://www.googleapis.com/books/v1/volumes?q=poppular&maxResults=${booksLength}&startIndex=${countBooks}`;
// $.ajax({
//     method: 'get',
//     url: URL,
//
//     success: function(data) {
//         for (var i = 0; i < data.items.length; i++) {
//
//         // console.log(data.items.length);
//
//             var div = document.createElement('div');
//             var details = document.createElement('div');
//             var price_and_over = document.createElement('div');
//             var h4 = document.createElement('h4');
//             var p = document.createElement('p');
//             var divImg = document.createElement('div');
//             divImg.className = 'smallCardImg';
//             var span = document.createElement('span');
//             var sell = document.createElement('button');
//             sell.className = 'add_to_card';
//             $('button.add_to_card').on('click', addToCard);
//             p.innerHTML = (data.items[i].volumeInfo ?data.items[i].volumeInfo.authors : 'author HZ');
//             h4.innerHTML = data.items[i].volumeInfo.title;
//             var poster = (data.items[i].volumeInfo.imageLinks ? data.items[i].volumeInfo.imageLinks.thumbnail : 'img/notPoster.jpeg');
//             divImg.style.backgroundImage = 'url("'+poster+'")';
//             span.innerHTML = data.items[i].saleInfo.listPrice ? data.items[i].saleInfo.listPrice.amount + ' ' + data.items[i].saleInfo.listPrice.currencyCode : 'not available';
//             sell.innerHTML = 'Add to Card';
//             div.appendChild(divImg);
//             details.appendChild(h4);
//             details.appendChild(p);
//             details.classList.add('details');
//             div.appendChild(details);
//             price_and_over.appendChild(span);
//             price_and_over.appendChild(sell);
//             price_and_over.classList.add('price_and_over');
//             div.appendChild(price_and_over);
//             button.classList.add('buy_button');
//             result.appendChild(div);
//             div.classList.add('grocery_card');
//             countBooks++;
//             booksLength+=10;
//         }
//         // console.log(data);
//
//     },
//     fail: function (error) {
//         console.log("fail", error);
//     }
// });
//
//
//
// function searchCategory() {
//     document.getElementById('result').innerHTML = '';
//
//
//     $.ajax({
//         url: "https://www.googleapis.com/books/v1/volumes?q=poetry",
//         dataType: "json",
//
//         success: function (data) {
//             for (var i = 0; i < data.items.length; i++) {
//
//                 var div = document.createElement('div');
//                 var h4 = document.createElement('h4');
//                 var p = document.createElement('p');
//                 var divImg = document.createElement('div');
//                 var poster = (data.items[i].volumeInfo.imageLinks ? data.items[i].volumeInfo.imageLinks.thumbnail : 'img/notPoster.jpeg');
//                 divImg.className = 'smallCardImg';
//                 divImg.style.backgroundImage = 'url("'+poster+'")';
//                 var span = document.createElement('span');
//                 var sell = document.createElement('button');
//
//                 p.innerHTML = data.items[i].volumeInfo.authors;
//                 h4.innerHTML = data.items[i].volumeInfo.title;
//                 divImg.style.backgroundImage = 'url("'+data.items[i].volumeInfo.imageLinks.thumbnail+'")';
//                 span.innerHTML = data.items[i].saleInfo.listPrice ? data.items[i].saleInfo.listPrice.amount + ' ' + data.items[i].saleInfo.listPrice.currencyCode : 'not available';
//                 sell.innerHTML = 'Add to Card';
//                 div.appendChild(divImg);
//                 div.appendChild(h4);
//                 div.appendChild(p);
//                 div.appendChild(span);
//                 div.appendChild(sell);
//                 button.classList.add('buy_button');
//                 result.appendChild(div);
//                 div.classList.add('grocery_card');
//             }
//
//         },
//         type: 'GET'
//     });
//
// }
//
//
//
// document.getElementById('poetry').addEventListener('click', searchCategory, false);