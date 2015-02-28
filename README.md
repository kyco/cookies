kyco Cookies
============

How to install
--------------

Download the js file and include it in your head (no jquery required):

	<script src="kyco.cookies.min.js"></script>

Call the functions anywhere to create, read, update or delete cookies:

	<script>
		// Create a cookie named 'foo' with value 'bar' which will expire in 5 days.
		createCookie('foo', 'bar', 5);

		console.log(readCookie('foo')); // returns 'bar'

		// Update 'foo' to 'newbar' which will expire in 365 days.
		updateCookie('foo', 'newbar', 365);

		deleteCookie('foo'); // deletes 'foo'
	</script>


Support
-------

For bugs or improvements please use the [issues tab](https://github.com/kyco/cookies/issues)
or email [support@kycosoftware.com](mailto:support@kycosoftware.com).
