<!DOCTYPE html>
<html>
<head>
	<title>Autofill by Jabrayil Alizada</title>
	<link rel="stylesheet" type="text/css" href="index.css">
	<meta charset="utf-8">
	<script src="js/fill.js"></script>

</head>
<body>
<!-- Главный блок -->
<div class="main">
	<!-- Кнопка куда нажимаешь -->
	<div id="parent" class="parent" onclick="show()"> Test &darr;</div>
	<!-- Кнопка куда нажимаешь -->

	<!-- Убираем обтекание -->
	<div class="clr"></div>
	<!-- Убираем обтекание -->

	<!-- Блок всплывающий по нажатию -->
	<div id="popup" class="popup">
		<a id="exit" href="#" onclick="hide()">X</a>
		<p> Выберите свой населенный пункт</p>
		<ul>
			<li><a id="baku" href="#" onclick="selected(this)" >Баку</a></li>
			<li><a id="ganja" href="#" onclick="selected(this)">Гянджа</a></li>
			<li><a id="shirvan" href="#" onclick="selected(this)">Ширван</a></li>
		</ul>
		<p> Или выберите другой</p>
		<form>
			<input id="autofillinput" type="text" name="search" oninput="autofill()">
		</form>

		<!-- Результаты выводятся здесь -->
		<div id="dropdown" class="dropdown"></div>
		<!-- Результаты выводятся здесь -->

	</div>
	<!-- Блок всплывающий по нажатию -->
</div>
<!-- Главный блок -->
</body>
</html>