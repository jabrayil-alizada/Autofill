let flag = true;

// Функция для показа блока popup
function show() {
	if(flag){
		document.getElementById("popup").style.display = 'block';
		flag = false;
	}
	else{
		document.getElementById("popup").style.display = 'none';
		flag = true;
	}
}

// функция для скрытия блока popup
function hide() {
	document.getElementById("popup").style.display = 'none';
	flag = true;
}

// Тестовые данные
let testJSON =  '{ "cities": ['+
								'{"city" : "Бейлаган"},'+
								'{"city" : "Бронкс"},'+
								'{"city" : "Балакен"},'+
								'{"city" : "Баку"}] }';

// Конвертируем в JSON
testJSON = JSON.parse(testJSON);

// Функция поиска JSON
function autofill() {

	let str = "<ul>";
	
	let inputed = document.getElementById("autofillinput").value.toLowerCase();
	
	let inputedLength = inputed.length;

	for(let i = 0; i < testJSON.cities.length ; i++){
		let fromAr = testJSON.cities[i].city.substr(0,inputedLength).toLowerCase();

		if (fromAr == inputed)
		{
			str += "<li id='data" + i + "' class='data' onclick='selected(this)' >" + testJSON.cities[i].city + "</li>";
		}

	}

	str += "<ul>";

	document.getElementById("dropdown").innerHTML = str;

	if (document.getElementById("autofillinput").value == '') {
		document.getElementById("dropdown").innerHTML = '';
	}

}

// Функция которая по нажатию на элемент из выпадающего списка изменяет значение
function selected(obj){
	document.getElementById("parent").innerHTML = obj.innerHTML + " &darr;";
	document.getElementById("dropdown").innerHTML = '';
	document.getElementById("autofillinput").value = '';
}



