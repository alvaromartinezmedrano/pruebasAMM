<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">

<html>
<head>
	<title>Ajax Simple</title>
<script src="jquery-1.3.2.min.js" type="text/javascript"></script>	
<script>
$(document).ready(function(){
	$("#enlaceajax").click(function(evento){
		evento.preventDefault();
		$("#destino").load("contenido-ajax.html");
	});
})
</script>
</head>

<body>

<a href="#" id="enlaceajax">Haz clic!</a>
<br>
<div id="destino"></div>

</body>
</html>