var nameError = document.querySelector('#name-error');
var phoneError = document.querySelector('#phone-error');
var emailError = document.querySelector('#email-error');
var passError = document.querySelector('#pass-error');
var submitError = document.querySelector('#submit-error');


function validateName() {
    var name = document.querySelector('#contact-name').value;

    if (name.length == 0) {
        nameError.innerHTML = 'Name is required';
        return false;
    }

    if (!name.match(/^([a-zA-Z ])*\s{1}([a-zA-Z ])*$/)) {
        nameError.innerHTML = 'Your full name!';
        return false;
    }
    nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validatePhone() {
    var phone = document.querySelector('#contact-phone').value;

    if (phone.length == 0) {
        phoneError.innerHTML = 'phone no is required!';
        return false;
    }

    if (phone.length !== 11) {
        phoneError.innerHTML = 'phone no should be 11 digits';
        return false;
    }

    if (!phone.match(/^[0-9]{11}$/)) {
        phoneError.innerHTML = 'phone no is required!';
        return false;
    }
    phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateEmail() {
    var email = document.querySelector('#contact-email').value;

    if (email.length == 0) {
        emailError.innerHTML = 'Email is required';
        return false;
    }

    if (!email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )) {
        emailError.innerHTML = 'Invalid!';
        return false;
    }
    emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validatePassword() {
    var password = document.querySelector('#contact-password').value;

    if (password.length == 0) {
        passError.innerHTML = ' atleast one number and special character';
        return false;
    }

    if (!password.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)) {
        passError.innerHTML = 'atleast 6 character';
        return false;
    }
    passError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validateForm() {
    if (!validateName() || !validatePhone() || !validateEmail() || !validatePassword()) {
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fill all the fields to submit';
        setTimeout(() => {
            submitError.style.display = 'none';
        }, 3000);
        return false;
    }
}