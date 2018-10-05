$(function() {
    // reg ex to validate email
    function testEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    // function to validate the email and error handling
    function validateParentEmail() {
        if (testEmail(document.getElementById('parentEmail').value)) {
            return true;
        } else {
            alert("You haven't entered a valid e-mail, please try again");
            return false;
        }
    }

    // function to validate the email and error handling
    function validateDaycareEmail() {
        if (testEmail(document.getElementById('daycareEmail').value)) {
            return true;
        } else {
            alert("You haven't entered a valid e-mail for your daycare, please try again");
            return false;
        }
    }

    //OnClick to validate form and error handling 
  $('.letsTalk').on('click', function(e) {
    e.preventDefault();
    if ( $('.parentName').val() === ""
    || $('.parentEmail').val() === ""
    || $('.childName').val() === ""
    || $('.daycareName').val() === ""
    || $('.daycareEmail').val() === ""
    || $('.daycareContact').val() === ""
    || $('.phoneNumber').val() === ""
    || validateDaycareEmail() === false
    || validateParentEmail() === false) {
        alert('Please be sure to fill out all of the required fields!');
        return false;
    } else {
        location.href = '/thankYou.html' 

    }  
  });   

    //hamburger menu functionality
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

