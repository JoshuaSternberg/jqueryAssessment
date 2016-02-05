$(document).ready(function(){
	var counter = 0;

	$('.generate').on('click', function() {
		counter++;
		$('.clicked').text(counter);
		$('.container').append('<div class="yellow"></div>');
		$('.container').children().last().append('<button class="delete">Delete</button>');
		$('.container').children().last().append('<button class="change">Change</button>');
		//$(this).parent().css('background-color', 'red');
	});

	$('.container').on('click', '.delete', function(){
		$(this).parent().remove();
	});

	$('.container').on('click', '.change', function(){
		$(this).parent().toggleClass('red');
				//$(this).parent().add().class('.changeColor');
	});




});