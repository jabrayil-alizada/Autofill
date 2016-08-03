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

let testAr = ['Бейлаган','Бронкс','Балакен','Баку'];
let testArStr = testAr.toString();

function autofill() {

	let str = "<ul>";
	
	let inputed = document.getElementById("autofillinput").value.toLowerCase();
	
	let inputedLength = inputed.length;

	for(let i = 0; i < testAr.length ; i++){
		let fromAr = testAr[i].substr(0,inputedLength).toLowerCase();

		if (fromAr == inputed)
		{
			str += "<li id='data" + i + "' >" + testAr[i] + "</li>";
		}
	}

	str += "<ul>";

	document.getElementById("dropdown").innerHTML = str;

	
	if (document.getElementById("autofillinput").value == '') {
		document.getElementById("dropdown").innerHTML = '';
	}

}
