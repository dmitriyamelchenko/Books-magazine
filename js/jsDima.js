


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
        // console.log(basket);

        panel[0].appendChild(divBasket);
        divBasket.innerHTML = "<strong>Ура!</strong>";
        nav[0].style.display="none";
        slider[0].style.display="none";
        // console.log(i);
        i++;
    }
    else{
        divBasket.remove();

        nav[0].style.display="inline-block";
        slider[0].style.display="block";
        i--;
    }
};