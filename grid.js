$(document).ready(function() {
	
	populate(16);

$('#reset').on('click', function () {
	reset();
})

$('#random_color').on('click', function () {
	randomize();
})

});

function populate(size) {   // populate grid with a proper amount of squares

		var s_size = (960 / size);

		if($('.square')[0]) {

			$('.square').remove();  // empty the grid if there are squares already

		}	

		for(var i = 0; i < (size*size); i++) {

			$('.wrapper').append("<div class='square'>&nbsp;</div>");

		}

		$('.square').width(s_size);
		$('.square').height(s_size);

		sketch();

	}

function sketch() {
	$('.square').hover(function(){
			$(this).css('background-color', 'black');  // change div color to black on hover
	});		
}

function reset() {
	var	new_size = prompt('Enter a new amount of squares in a row');
	populate(new_size);
}

function randomize() {
	$('.square').hover(function() {
   var randomColorChange = '#'+(Math.random()*0xFFFFFF<<0).toString(16); // generate random div colors on hover
    $(this).css('background-color', randomColorChange);
    });
}

