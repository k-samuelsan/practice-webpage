alert("Hello World!");

var changeMessageText = function() {
	var name = $('#name').val();
	var text = "Hello " + name + "!";
	if(!name) {
		text = "Hello World!";
	}
	$('#message').text(text);
}

$('#submit-name').on('click', changeMessageText)