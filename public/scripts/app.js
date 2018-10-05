(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

$(function () {
  // reg ex to validate email
  function testEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  } // function to validate the email and error handling


  function validateParentEmail() {
    if (testEmail(document.getElementById('parentEmail').value)) {
      return true;
    } else {
      alert("You haven't entered a valid e-mail, please try again");
      return false;
    }
  } // function to validate the email and error handling


  function validateDaycareEmail() {
    if (testEmail(document.getElementById('daycareEmail').value)) {
      return true;
    } else {
      alert("You haven't entered a valid e-mail for your daycare, please try again");
      return false;
    }
  } //OnClick to validate form and error handling 


  $('.letsTalk').on('click', function (e) {
    e.preventDefault();

    if ($('.parentName').val() === "" || $('.parentEmail').val() === "" || $('.childName').val() === "" || $('.daycareName').val() === "" || $('.daycareEmail').val() === "" || $('.daycareContact').val() === "" || $('.phoneNumber').val() === "" || validateDaycareEmail() === false || validateParentEmail() === false) {
      alert('Please be sure to fill out all of the required fields!');
      return false;
    } else {
      location.href = '/thankYou.html';
    }
  }); //hamburger menu functionality

  $('.hamburger').on('click', function () {
    $('.menu').fadeIn("slow");
  });
  $('.exit').on('click', function () {
    $('.menu').fadeOut("slow");
  });
  $('.navMobile.a').on('click', function () {
    $('.menu').fadeOut("slow");
  });
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLENBQUMsQ0FBQyxZQUFXO0FBQ1Q7QUFDQSxXQUFTLFNBQVQsQ0FBbUIsS0FBbkIsRUFBMEI7QUFDdEIsUUFBTSxFQUFFLEdBQUcsMkpBQVg7QUFDQSxXQUFPLEVBQUUsQ0FBQyxJQUFILENBQVEsS0FBUixDQUFQO0FBQ0gsR0FMUSxDQU9UOzs7QUFDQSxXQUFTLG1CQUFULEdBQStCO0FBQzNCLFFBQUksU0FBUyxDQUFDLFFBQVEsQ0FBQyxjQUFULENBQXdCLGFBQXhCLEVBQXVDLEtBQXhDLENBQWIsRUFBNkQ7QUFDekQsYUFBTyxJQUFQO0FBQ0gsS0FGRCxNQUVPO0FBQ0gsTUFBQSxLQUFLLENBQUMsc0RBQUQsQ0FBTDtBQUNBLGFBQU8sS0FBUDtBQUNIO0FBQ0osR0FmUSxDQWlCVDs7O0FBQ0EsV0FBUyxvQkFBVCxHQUFnQztBQUM1QixRQUFJLFNBQVMsQ0FBQyxRQUFRLENBQUMsY0FBVCxDQUF3QixjQUF4QixFQUF3QyxLQUF6QyxDQUFiLEVBQThEO0FBQzFELGFBQU8sSUFBUDtBQUNILEtBRkQsTUFFTztBQUNILE1BQUEsS0FBSyxDQUFDLHVFQUFELENBQUw7QUFDQSxhQUFPLEtBQVA7QUFDSDtBQUNKLEdBekJRLENBMkJUOzs7QUFDRixFQUFBLENBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZSxFQUFmLENBQWtCLE9BQWxCLEVBQTJCLFVBQVMsQ0FBVCxFQUFZO0FBQ3JDLElBQUEsQ0FBQyxDQUFDLGNBQUY7O0FBQ0EsUUFBSyxDQUFDLENBQUMsYUFBRCxDQUFELENBQWlCLEdBQWpCLE9BQTJCLEVBQTNCLElBQ0YsQ0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQixHQUFsQixPQUE0QixFQUQxQixJQUVGLENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0IsR0FBaEIsT0FBMEIsRUFGeEIsSUFHRixDQUFDLENBQUMsY0FBRCxDQUFELENBQWtCLEdBQWxCLE9BQTRCLEVBSDFCLElBSUYsQ0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQixHQUFuQixPQUE2QixFQUozQixJQUtGLENBQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCLEdBQXJCLE9BQStCLEVBTDdCLElBTUYsQ0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQixHQUFsQixPQUE0QixFQU4xQixJQU9GLG9CQUFvQixPQUFPLEtBUHpCLElBUUYsbUJBQW1CLE9BQU8sS0FSN0IsRUFRb0M7QUFDaEMsTUFBQSxLQUFLLENBQUMsd0RBQUQsQ0FBTDtBQUNBLGFBQU8sS0FBUDtBQUNILEtBWEQsTUFXTztBQUNILE1BQUEsUUFBUSxDQUFDLElBQVQsR0FBZ0IsZ0JBQWhCO0FBRUg7QUFDRixHQWpCRCxFQTVCVyxDQStDVDs7QUFDQSxFQUFBLENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0IsRUFBaEIsQ0FBbUIsT0FBbkIsRUFBNEIsWUFBWTtBQUNwQyxJQUFBLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBVyxNQUFYLENBQWtCLE1BQWxCO0FBQ0gsR0FGRDtBQUdBLEVBQUEsQ0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXLEVBQVgsQ0FBYyxPQUFkLEVBQXVCLFlBQVk7QUFDL0IsSUFBQSxDQUFDLENBQUMsT0FBRCxDQUFELENBQVcsT0FBWCxDQUFtQixNQUFuQjtBQUNILEdBRkQ7QUFHQSxFQUFBLENBQUMsQ0FBQyxjQUFELENBQUQsQ0FBa0IsRUFBbEIsQ0FBcUIsT0FBckIsRUFBOEIsWUFBWTtBQUN0QyxJQUFBLENBQUMsQ0FBQyxPQUFELENBQUQsQ0FBVyxPQUFYLENBQW1CLE1BQW5CO0FBQ0gsR0FGRDtBQUdILENBekRBLENBQUQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIkKGZ1bmN0aW9uKCkge1xuICAgIC8vIHJlZyBleCB0byB2YWxpZGF0ZSBlbWFpbFxuICAgIGZ1bmN0aW9uIHRlc3RFbWFpbChlbWFpbCkge1xuICAgICAgICBjb25zdCByZSA9IC9eKChbXjw+KClbXFxdXFxcXC4sOzpcXHNAXFxcIl0rKFxcLltePD4oKVtcXF1cXFxcLiw7Olxcc0BcXFwiXSspKil8KFxcXCIuK1xcXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXF0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xuICAgICAgICByZXR1cm4gcmUudGVzdChlbWFpbCk7XG4gICAgfVxuXG4gICAgLy8gZnVuY3Rpb24gdG8gdmFsaWRhdGUgdGhlIGVtYWlsIGFuZCBlcnJvciBoYW5kbGluZ1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlUGFyZW50RW1haWwoKSB7XG4gICAgICAgIGlmICh0ZXN0RW1haWwoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhcmVudEVtYWlsJykudmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiWW91IGhhdmVuJ3QgZW50ZXJlZCBhIHZhbGlkIGUtbWFpbCwgcGxlYXNlIHRyeSBhZ2FpblwiKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGZ1bmN0aW9uIHRvIHZhbGlkYXRlIHRoZSBlbWFpbCBhbmQgZXJyb3IgaGFuZGxpbmdcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZURheWNhcmVFbWFpbCgpIHtcbiAgICAgICAgaWYgKHRlc3RFbWFpbChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF5Y2FyZUVtYWlsJykudmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiWW91IGhhdmVuJ3QgZW50ZXJlZCBhIHZhbGlkIGUtbWFpbCBmb3IgeW91ciBkYXljYXJlLCBwbGVhc2UgdHJ5IGFnYWluXCIpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy9PbkNsaWNrIHRvIHZhbGlkYXRlIGZvcm0gYW5kIGVycm9yIGhhbmRsaW5nIFxuICAkKCcubGV0c1RhbGsnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICggJCgnLnBhcmVudE5hbWUnKS52YWwoKSA9PT0gXCJcIlxuICAgIHx8ICQoJy5wYXJlbnRFbWFpbCcpLnZhbCgpID09PSBcIlwiXG4gICAgfHwgJCgnLmNoaWxkTmFtZScpLnZhbCgpID09PSBcIlwiXG4gICAgfHwgJCgnLmRheWNhcmVOYW1lJykudmFsKCkgPT09IFwiXCJcbiAgICB8fCAkKCcuZGF5Y2FyZUVtYWlsJykudmFsKCkgPT09IFwiXCJcbiAgICB8fCAkKCcuZGF5Y2FyZUNvbnRhY3QnKS52YWwoKSA9PT0gXCJcIlxuICAgIHx8ICQoJy5waG9uZU51bWJlcicpLnZhbCgpID09PSBcIlwiXG4gICAgfHwgdmFsaWRhdGVEYXljYXJlRW1haWwoKSA9PT0gZmFsc2VcbiAgICB8fCB2YWxpZGF0ZVBhcmVudEVtYWlsKCkgPT09IGZhbHNlKSB7XG4gICAgICAgIGFsZXJ0KCdQbGVhc2UgYmUgc3VyZSB0byBmaWxsIG91dCBhbGwgb2YgdGhlIHJlcXVpcmVkIGZpZWxkcyEnKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGxvY2F0aW9uLmhyZWYgPSAnL3RoYW5rWW91Lmh0bWwnIFxuXG4gICAgfSAgXG4gIH0pOyAgIFxuXG4gICAgLy9oYW1idXJnZXIgbWVudSBmdW5jdGlvbmFsaXR5XG4gICAgJCgnLmhhbWJ1cmdlcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLm1lbnUnKS5mYWRlSW4oXCJzbG93XCIpO1xuICAgIH0pO1xuICAgICQoJy5leGl0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcubWVudScpLmZhZGVPdXQoXCJzbG93XCIpO1xuICAgIH0pO1xuICAgICQoJy5uYXZNb2JpbGUuYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLm1lbnUnKS5mYWRlT3V0KFwic2xvd1wiKTtcbiAgICB9KTsgICAgXG59KTtcblxuIl19
