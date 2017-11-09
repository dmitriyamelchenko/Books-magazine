console.log('runVladimir.js');
var groceryCards=document.getElementsByClassName('smallCardImg');

document.body.addEventListener('click', function(event){
		if(event.target.classList.contains('smallCardImg')){
			show(event.target);
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
			
