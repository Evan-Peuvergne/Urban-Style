



	/**
	*
	*	SWITCH|JS
	*	------------------
	*	DESC | Switchs interactions scripts
	*	LOCATION | > scripts > modules > controls > switch.js
	*
	*/






	/*----------  INTERACTIONS  ----------*/



	// Click
	
	$('.switch').on('click', function (e)
	{

		// Elem
		var elem = $(this);

		// Toggle
		elem.toggleClass('active-left').toggleClass('active-right');

		// Value
		var value = null;
		if(elem.hasClass('active-left')){ value = elem.find('.switch-label-left').attr('data-value'); }
		else{ value = elem.find('.switch-label-right').attr('data-value'); }
		elem.find('.switch-value').val(value);

	});
	
	