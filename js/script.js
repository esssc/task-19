$(function () {

	//alert("Hello! I am an alert box!!");
	$('#register-form').validate({
		rules:{
			email: {
				required: true,
				email: true
			},
			name: {
				required:true
				
			},
			phone: {
				required:true,
				number:true
			}

		},
		messages: {
			email: {
				required: 'Prasome irašyti elektroninį paštą.',
				email: 'Prasome irašyti <em>teisingą</em> elektroninį paštą.'
			},
			name: {
				required: 'Irasykite savo varda'
			},
			phone: {
				required: 'Telefono numeris',
				number: 'Iveskite numeri'
			}
		}
	});

});