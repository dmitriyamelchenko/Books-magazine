


var basket = document.getElementById('basket');
var panel = document.getElementsByClassName('panel');
// console.log(basket);
var nav = document.getElementsByClassName('nav');
var slider = document.getElementsByClassName('slider');
var i = 0;
var divBasket = document.createElement('div');
basket.onclick = function () {
    if(i==0){
        console.log(basket);
        divBasket.className = "basketPanel";
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
