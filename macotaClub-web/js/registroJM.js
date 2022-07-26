$(function () {
	var count = 1;
	var maxSteps = 5;
	var contentPetForm = '<div class="content-repeat "> \
							<div class="bord-padd" ></div> \
							<div class="closeFormPet"><p>X</p></div> \
							<label class="obl">Tipo de mascota</label> \
							<select name="" id=""> \
								<option value="">- Seleccionar -</option> \
								<option value="">Perro</option> \
								<option value="">Gato</option> \
							</select> \
							<label for="">Nombre de mascota</label> \
							<input type="text"> \
							<div style="height: 84px"> \
								<label class="obl">Fecha de nacimiento</label> \
								<input type="text" style="width: 25%" placeholder="Día"> \
								<select name="" id="" style="width: 46%"> \
									<option value="">Mes</option> \
									<option value="">Enero</option> \
									<option value="">Febrero</option> \
									<option value="">Marzo</option> \
									<option value="">Abril</option> \
									<option value="">Mayo</option> \
									<option value="">Junio</option> \
									<option value="">Julio</option> \
									<option value="">Agosto</option> \
									<option value="">Setiembre</option> \
									<option value="">Octubre</option> \
									<option value="">Noviembre</option> \
									<option value="">Diciembre</option> \
								</select> \
								<input type="text" style="width: 25%" placeholder="Año"> \
							</div> \
						</div>';

	//Se crea el primer formulario, sin opción de cerrar y sin borde
	$("#formsPets").append(contentPetForm);
	if (count == 1) {
		$('.bord-padd').hide();
		$('.closeFormPet').hide();
	}

	//	$.when(column.appendTo($("#container"))).then(function(){
	//    column.removeClass("column-hiding");
	//});
	//	$(".closeFormPet").remove();

	$('.addFormPet').on('click', function () {
		if (count < maxSteps) {
			count++;
			if (count == maxSteps) {
				$('.addFormPet').hide();
			}
			$("#formsPets").append(contentPetForm);
		}
	});

	$(document).on('click', '.closeFormPet', function () {
		count--;
		if (count < maxSteps) {
			$('.addFormPet').show();
		}
		$(this).parent().remove();
	});
});
