// kyco.cookies brought to you by www.kyco.co.za. Copyright 2013 Cornelius Weidmann. Distributed under the GPL.
// Original idea from http://www.quirksmode.org/js/cookies.html.
// This code does not require jQuery, simply copy and paste to use the functions.
function createCookie(name, value, days) {
    // Creates a cookie with the given name and value. The days attribute is optional.
    // Not setting the days attribute will create a cookie that expires at the end of the session.
    // Setting the days attribute to 0 will create a cookie that expires at the end of the session.
    // Setting the days attribute to -1 will create a cookie that expires immediately, i.e. deletes the cookie.

    // Usage, e.g.: createCookie('newcookie', 'testing', 2);
    // Cookie will hold the following string: newcookie=testing; expires=<2 days from creation>;

    // Manually create a cookie string, e.g.: document.cookie = newcookie=true; expires=Thu May 10 2012 08:27:20 UTC; path=/;
    // Note: appending the UTC in the expires string will automatically add or subtract the hours for the given time zone.

    if (days){
        // Set the expiry date to expire after given amount of days.
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        var expires = '; expires=' + date.toUTCString() + ';';
    }
    else var expires = ''; // Set expiry date to expire upon session close.

    document.cookie = name + '=' + value + expires + 'path=/'; // Create the cookie.
}

function readCookie(name) {
    // Searches for the given name under cookies of current domain.
    // Returns the value of the cookie if found, otherwise, returns null.

    var nameWithEquals = name + '=';
    var cookieArray = document.cookie.split(';');

    for (var i = 0; i < cookieArray.length; i++){
        var cookie = cookieArray[i];
        while (cookie.charAt(0) == ' ') cookie = cookie.substring(1, cookie.length);
        if (cookie.indexOf(nameWithEquals) == 0) return cookie.substring(nameWithEquals.length, cookie.length);
    }

    return null;
}

function deleteCookie(name) {
    // Creates a cookie with expiry set to -1, which will delete the cookie immediately.
    createCookie(name, '', -1);
}