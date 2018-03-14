$(function () {

	alert("Hello! I am an alert box!!");
	$('#register-form').validate({
		rules:{
			email: {
				required: true,
				email: true
			},
			
		},
		messages: {
			email: {
				required: 'Prasome irašyti elektroninį paštą.',
				email: 'Prasome irašyti <em>teisingą</em> elektroninį paštą.'
			}
		}
	});

});