console.log('runVladimir.js');
var groceryCards=document.getElementsByClassName('smallCardImg');
//var win=document.getElementsByName('window');
var modalwrap = document.querySelector('#wrap');
var modalwindow = document.querySelector('#window');
document.body.addEventListener('click', function(event){
    if(event.target.classList.contains('smallCardImg')){
        show(event.target);
    }
})
// Закрытие модального окна при клике на серую область
window.addEventListener('click', function (event) {
    if(event.target.closest(".grocery_card")) {
        let _id = event.target.closest(".grocery_card").querySelector(".add_to_card").id;

        let book = arrayBooks.filter((item, index) => item.id === _id);
        let _book = book[0].volumeInfo;
        modalwindow.querySelector("p").innerHTML = _book.title;
    }
    if(event.target == modalwrap) {
        modalwrap.style.display = "none";
        modalwindow.style.display = 'none';
    }
})
//Функция показа окна
function show(state){
    document.getElementById('window').style.display = 'block';
    document.getElementById('wrap').style.display = 'block';
}
//Функция закрытия окна
function hide(state){
    document.getElementById('window').style.display = 'none';
    document.getElementById('wrap').style.display = 'none';
}
