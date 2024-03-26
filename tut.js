



function validateInput() {
    const form = document.querySelector("form");
const username = document.querySelector('username');
const password = document.querySelector('password');
const cpassword = document.querySelector('cpassword');
const mail = document.querySelector('mail');
const phone = document.querySelector('phone');
    const usernameval = username.value.trim();
    const passwordval = password.value.trim();
    const cpasswordval = cpassword.value.trim();
    const mailval = mail.value.trim();
    const phoneval = phone.value.trim();

    let valid = true;

    if (usernameval === '') {
        setError(username, 'Username is required');
        valid = false;
    } else {
        setSuccess(username);
    }

    if (mailval === '') {
        setError(mail, 'Email is required');
        valid = false;
    } else if (!validateEmail(mailval)) {
        setError(mail, 'Invalid email format');
        valid = false;
    } else {
        setSuccess(mail);
    }

    if (passwordval === '') {
        setError(password, 'Password is required');
        valid = false;
    } else if (passwordval.length < 6) {
        setError(password, 'Password must be at least 6 characters');
        valid = false;
    } else {
        setSuccess(password);
    }

    if (phoneval === '' || phoneval.length < 10) {
        setError(phone, 'Invalid phone number');
        valid = false;
    } else {
        setSuccess(phone);
    }

    if (cpasswordval === '') {
        setError(cpassword, 'Please confirm your password');
        valid = false;
    } else if (cpasswordval !== passwordval) {
        setError(cpassword, 'Passwords do not match');
        valid = false;
    } else {
        setSuccess(cpassword);
    }

    return valid;
}

function setError(element, msg) {
    const loginele = element.parentElement;
    const errorElement = loginele.querySelector('.error');
    errorElement.innerText = msg;
    loginele.classList.add('error');
    loginele.classList.remove('success');
}

function setSuccess(element) {
    const loginele = element.parentElement;
    const errorElement = loginele.querySelector('.error');
    errorElement.innerText = '';
    loginele.classList.add('success');
    loginele.classList.remove('error');
}

function validateEmail(mail) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
}

