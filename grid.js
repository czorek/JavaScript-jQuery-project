$(document).ready(function() {
	
	populate(16);

$('#reset').on('click', function () {
	reset();
})

$('#random_color').on('click', function () {
	randomize();
})

$('#gradient').on('click', function () {
	opacity();
})

});

function populate(size) {

		var s_size = (960 / size);

		if($('.square')[0]) {

			$('.square').remove();

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
			$(this).css('background-color', 'black');
	});		
}

function reset() {
	var	new_size = prompt('Enter a new amount of squares in a row');
	populate(new_size);
}

function randomize() {
	$('.square').hover(function() {
   var randomColorChange = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    $(this).css('background-color', randomColorChange);
    });
}

 function opacity() {       // decrease opacity of square by 10% with each pass of the mouse
     
     $(".square").mouseenter(
         
         function() {
         
         var currentOpacity = $(this).css("opacity");
         
         if(!(currentOpacity === 0)) {
         
         $(this).css("opacity", currentOpacity + 0.1);
         
     }
         
                            
     });
     
 }
