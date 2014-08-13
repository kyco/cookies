/*********************************************\

	kyco.cookies
	v1.1.0

	Brought to you by http://www.kycosoftware.com
	Copyright 2013 Cornelius Weidmann

	Distributed under the GPL

	Original idea from:
	http://www.quirksmode.org/js/cookies.html

	This code does not require jQuery,
	simply copy and paste to use functions.

\*********************************************/

function createCookie(name, value, days, path) {
	// Creates a cookie with the given name and value.
	// The days and path parameters are optional.

	/*
	**	Not setting the days parameter or passing in zero will
	**	create a cookie which expires at the end of the session.
	**	Setting the days parameter to -1 will create a cookie
	**	which expires immediately, i.e. deletes the cookie.
	**
	**	Manually creating a cookie string looks something like this, e.g.:
	**
	**	document.cookie = 'foo=bar; expires=Thu May 10 2012 08:27:20 UTC; path=/';
	**
	**	Note: appending the "UTC" in the expires string will automatically
	**	add or subtract the hours for the given time zone.
	*/

	if (name === undefined) {
		return;
	}

	days = days || 0;
	path = path || '/';

	if (days != 0) {
		// Set expiry date to UTC Date/Time string for days parameter
		var date = new Date();

		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));

		days = date.toUTCString();
	} else {
		// Set expiry date to expire upon session close
		days = '';
	}

	// Create the cookie
	document.cookie = name + '=' + value + '; expires=' + days + '; path=' + path + ';';
}

function readCookie(name) {
	// Searches for the given name under cookies of current domain.
	// Returns the value of the cookie if found, otherwise, returns null.

	if (name === undefined) {
		return;
	}

	var cookies = document.cookie.split(';');

	for (var i = 0, n = cookies.length; i < n; i++) {
		var cookie = cookies[i];
		var len    = cookie.length;

		while (cookie.charAt(0) === ' ') {
			cookie = cookie.substring(1, len);
		}

		if (cookie.indexOf(name) === 0) {
			return cookie.substring(name.length + 1, len);
		}
	}

	return null;
}

function updateCookie(name, value, days, path) {
	// Updates a cookie with new value and optional
	// days and path parameter.

	createCookie(name, value, days, path);
}

function deleteCookie(name, path) {
	// Creates a cookie with expiry set to -1,
	// i.e. which deletes the cookie immediately.

	createCookie(name, '', -1, path);
}
