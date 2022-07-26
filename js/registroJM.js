$(function() {
	
	$('#pasoOne').hide();
	$('#pasoTwo').hide();
	var count = 1
	
	$('.addPaso').on('click',function(){
		if(count == 2){
			$("#pasoTwo").show();
		}
		if(count ==1){
			count ++;
			$('#pasoOne').show();
		}
		
	});

	// implementar boton para cerrar
	$('.cerrar').on('click',function(){
		if(count == 2){
			$("#pasoTwo").hide();
		}
		if(count ==1){
			count ++;
			$('#pasoOne').hide();
		}
	});
});
