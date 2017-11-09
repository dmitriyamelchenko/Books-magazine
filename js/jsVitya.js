function bookSearch() {
    var search = document.getElementById('search').value;
    document.getElementById('result').innerHTML = '';
    console.log(search);

    $.ajax({
        url: "https://www.googleapis.com/books/v1/volumes?q=" + search,
        dataType: "json",

        success: function (data) {
            for (var i = 0; i < data.items.length; i++) {

                var div = document.createElement('div');
                var h4 = document.createElement('h4');
                var p = document.createElement('p');
                var divImg = document.createElement('div');
                divImg.className = 'smallCardImg';
                var span = document.createElement('span');
                var sell = document.createElement('button');

                p.innerHTML = data.items[i].volumeInfo.authors;
                h4.innerHTML = data.items[i].volumeInfo.title;
                divImg.style.backgroundImage = 'url("'+data.items[i].volumeInfo.imageLinks.thumbnail+'")';
                // img.src = data.items[i].volumeInfo.imageLinks.thumbnail;
                span.innerHTML = data.items[i].saleInfo.listPrice ? data.items[i].saleInfo.listPrice.amount + ' ' + data.items[i].saleInfo.listPrice.currencyCode : 'not available';
                sell.innerHTML = 'Add to Card';
                div.appendChild(divImg);
                div.appendChild(h4);
                div.appendChild(p);
                div.appendChild(span);
                div.appendChild(sell);
                button.classList.add('buy_button');
                result.appendChild(div);
                div.classList.add('grocery_card');
              //  divImg.classList.add('myButton');//Делаем картинку кликабельной
            }

        },
        type: 'GET'
    });

}

document.getElementById('button').addEventListener('click', bookSearch, false);
var countBooks = 0;
var booksLength = 10;
// console.log(countBooks);
// console.log(booksLength);

let URL = `https://www.googleapis.com/books/v1/volumes?q=poppular&maxResults=${booksLength}&startIndex=${countBooks}`;
$.ajax({
    method: 'get',
    url: URL,

    success: function(data) {
        for (var i = 0; i < data.items.length; i++) {

        // console.log(data.items.length);

            var div = document.createElement('div');
            var h4 = document.createElement('h4');
            var p = document.createElement('p');
            var divImg = document.createElement('div');
            divImg.className = 'smallCardImg';
            divImg.setAttribute('data-id',JSON.stringify(data.items[i]));
            var span = document.createElement('span');
            var sell = document.createElement('button');
        // console.log(data);
            p.innerHTML = (data.items[i].volumeInfo ?data.items[i].volumeInfo.authors : 'author HZ');
            h4.innerHTML = data.items[i].volumeInfo.title;
            var poster = (data.items[i].volumeInfo.imageLinks ? data.items[i].volumeInfo.imageLinks.thumbnail : 'img/Not image.jpg');
            divImg.style.backgroundImage = 'url("'+poster+'")';
            span.innerHTML = data.items[i].saleInfo.listPrice ? data.items[i].saleInfo.listPrice.amount + ' ' + data.items[i].saleInfo.listPrice.currencyCode : 'not available';
            sell.innerHTML = 'Add to Card';
            div.appendChild(divImg);
            div.appendChild(h4);
            div.appendChild(p);
            div.appendChild(span);
            div.appendChild(sell);
            button.classList.add('buy_button');
            result.appendChild(div);
            div.classList.add('grocery_card');
            //divImg.classList.add('myButton');//Делаем картинку кликабельной
            countBooks++;
            booksLength+=10;
        }
    },
    fail: function (error) {
        console.log("fail", error);
    }
});
show();
