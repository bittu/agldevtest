'use strict';
/**
 *	jsonp: Function
 *	
 *	Params: url, callback
 *	
 * 	Used to make jsonp calls to specific url and 
 *	pass data to provided callback function
 *
 **/
function jsonp(url, callback) {
	var scriptEl = document.createElement('script');

	window.jsonpCallback = function(data) {
		delete window[jsonpCallback];
        document.body.removeChild(scriptEl);
	    callback(data);
	};

	scriptEl.setAttribute('src', url + '?callback=jsonpCallback');
	document.body.appendChild(scriptEl);
}

/* To modify and filter fetched raw data as required */
function filterCats(data) {
	return _(data)
			.groupBy('gender')
			.mapValues(obj => 
				 _(obj)
				  .map(obj1 => 
					_(obj1.pets)
					 .filter({type: 'Cat'})
					 .flatMap('name')
					 .value()
				  )
				  .flatten()
				  .sortBy()
				  .value()
			)
			.value()
}
