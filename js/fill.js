let flag = true;

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

function hide() {
	document.getElementById("popup").style.display = 'none';
	flag = true;
}

function autofill() {

}

let testAr = ['Бейлаган','Бронкс','Балакен','Баку'];