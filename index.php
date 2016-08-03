<!DOCTYPE html>
<html>
<head>
	<title>Autofill by Jabrayil Alizada</title>
	<link rel="stylesheet" type="text/css" href="index.css">
	<meta charset="utf-8">
	<script src="js/fill.js"></script>

</head>
<body>
<div class="main">

	<div class="parent" onclick="show()"> Test &darr;</div>
	<div class="clr"></div>
	<div id="popup" class="popup">
		<a id="exit" href="#" onclick="hide()">X</a>
		<p> Выберите свой населенный пункт</p>
		<ul>
			<li><a id="baku" href="#">Баку</a></li>
			<li><a id="ganja" href="#">Гянджа</a></li>
			<li><a id="shirvan" href="#">Ширван</a></li>
		</ul>
		<p> Или выберите другой</p>
		<form>
			<input id="autofillinput" type="text" name="search" oninput="autofill()">
		</form>
		<div id="dropdown" class="dropdown"></div>
	</div>

</div>
</body>
</html>