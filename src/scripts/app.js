$(function() {
    // on click check if the required field are valid
    function testEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    function validateParentEmail() {
        if (testEmail(document.getElementById('parentEmail').value)) {
            return true;
        } else {
            alert("email not valid");
            return false;
        }
    }

    function validateDaycareEmail() {
        if (testEmail(document.getElementById('daycareEmail').value)) {
            return true;
        } else {
            alert("email not valid");
            return false;
        }
    }

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
        alert('Please fill out all of the required fields');
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

