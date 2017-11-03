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
            }

        },
        type: 'GET'
    });

}

document.getElementById('button').addEventListener('click', bookSearch, false);

fetch("https://www.googleapis.com/books/v1/volumes?q=hello")
    .then(function (res) {
        return res.json()
    }).then(function (res) {
        console.log(res)
    });

$.ajax({
    method: 'get',
    url: "https://www.googleapis.com/books/v1/volumes?q=harrypotter",
    success: function(data) {
        for (var i = 0; i < data.items.length; i++) {
        console.log(data);
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
        }
    },
    fail: function (error) {
        console.log("fail", error);
    }
});

