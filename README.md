Cookies
=======

A simple script to create, read, update or delete cookies with javascript.


How to install
--------------

Download the js file and include it in your head (no jquery required):

	<script src="kyco.cookies.min.js"></script>

Call the functions anywhere to create, read, update or delete cookies:

	<script>
		createCookie('foo', 'bar', 5);
		// creates a cookie named 'foo' with value 'bar' which will expire in 5 days
		
		console.log(readCookie('foo'));
		// returns 'bar'

		updateCookie('foo', 'newbar', 365);
		// updates 'foo' to 'newbar' which will expire in 365 days
		
		deleteCookie('foo');
		// deletes 'foo'
	</script>


Support
-------

For bugs or improvements please email info@kyco.co.za.
