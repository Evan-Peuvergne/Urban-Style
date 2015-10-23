



	/**
	*
	*	DROPDOWN|JS
	*	------------------
	*	DESC | Dropdown interactions script definition
	*	LOCATION | > scripts > modules > controls > dropdown.js
	*
	*/








	/*----------  INTERACTIONS  ----------*/



	// Click
	
	$('.dropdown').on('click', function (e)
	{

		// Default behavior
		e.preventDefault();

		// State
		var elem = $(this);
		if(elem.hasClass('open')){ elem.addClass('close').removeClass('open'); }
		else{ elem.addClass('open').removeClass('close'); }

	});
	

