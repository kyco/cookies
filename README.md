Cookies
=======
#### Version: 1.1.0

A simple script to create, read, update and/or delete cookies with JavaScript.

How to install
--------------

    Download or clone the repo

Include the minified JS file in your head:

  <script src="kyco.cookies.min.js"></script>

Call the functions anywhere to create, read, update or delete cookies:

  <script>
    // Create a cookie named 'foo' with value 'bar' which will expire in 5 days.
    createCookie('foo', 'bar', 5)

    console.log(readCookie('foo')) // returns 'bar'

    // Update 'foo' to 'newbar' which will expire in 365 days.
    updateCookie('foo', 'newbar', 365)

    deleteCookie('foo') // deletes 'foo'
  </script>


Original idea from: [http://www.quirksmode.org/js/cookies.html](http://www.quirksmode.org/js/cookies.html)


Support
-------

For bugs or improvements please use the [issues tab](https://github.com/kyco/cookies/issues) or email [support@kyco.io](mailto:support@kyco.io).
