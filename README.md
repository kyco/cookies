kyco.cookies
============

A simple script to create, read and delete cookies with javascript.


How to install
--------------

Download the js file and include it in your head (no jquery required):

    <script src="jquery.kyco.cookies.min.js" />

Call the functions like this:

    <script>
        createCookie('myNewCookie', 'newValue', 5);
        // creates a cookie named 'myNewCookie' with value 'newValue' which will expire in 5 days
        
        console.log(readCookie('myNewCookie'));
        // returns 'newValue'
        
        deleteCookie('myNewCookie');
        // deletes the cookie
    </script>


Configuration
-------------

kyco.cookies.js contains three functions:

###createCookie(<name>, <value>, <expiry in days>)

    createCookie('myNewCookie', true, 5) // expires in 5 days
    createCookie('anotherCookie', 'username') // expires at end of session

NOTE: expiry is optional.

###readCookie(<em><name></em>)

    readCookie('myNewCookie') // returns true
    readCookie('doesNotExistCookie') // returns null

###deleteCookie(<em><name></em>)

    deleteCookie('myNewCookie') // deletes <em>myNewCookie</em>


Support
-------

For bugs or improvements please email info@kyco.co.za.