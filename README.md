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

kyco.cookies.js contains three functions: createCookie(), readCookie() and deleteCookie().

    createCookie(<em><name></em>, <em><value></em>, <em><expiry in days></em>)

NOTE: expiry is optional
e.g. createCookie('myNewCookie', true, 5) // expires in 5 days
e.g. createCookie('anotherCookie', 'username') // expires at end of session

    readCookie(<em><name></em>)

e.g. readCookie('myNewCookie') // returns <em>true</em>
e.g. readCookie('doesNotExistCookie') // returns <em>null</em>

    deleteCookie(<em><name></em>)

e.g. deleteCookie('myNewCookie') // deletes <em>myNewCookie</em>


Support
-------

For bugs or improvements please email info@kyco.co.za.