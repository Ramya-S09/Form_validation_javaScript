const form = document.querySelector("#form");
const name1 = document.querySelector("#name");
const email1 = document.querySelector("#email");
const password1 = document.querySelector("#password");
const cpassword1 = document.querySelector("#cpassword");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateinput();
});

function validateinput() {
    const nameval = name1.value.trim();
    const emailval = email1.value.trim();
    const passwordval = password1.value.trim();
    const cpasswordval = cpassword1.value.trim();

    if (nameval === "") {
        setError(name1, 'Username is required');
    } else {
        setSuccess(name1);
    }

    if (emailval === "") {
        setError(email1, 'Email is required');
    } else {
        setSuccess(email1);
    }

    if (passwordval === "") {
        setError(password1, 'Password is required');
    } else if (passwordval.length < 8) {
        setError(password1, 'Password must be at least 8 characters');
    } else {
        setSuccess(password1);
    }

    if (cpasswordval === "") {
        setError(cpassword1, 'Confirm password is required');
    } else if (passwordval !== cpasswordval) {
        setError(cpassword1, 'Passwords do not match');
    } else {
        setSuccess(cpassword1);
    }
}

function setError(element, message) {
    const inputgroup = element.parentElement;
    const errorelement = inputgroup.querySelector('.error');
    errorelement.innerText = message;
    inputgroup.classList.add('error');
    inputgroup.classList.remove('success');
}

function setSuccess(element) {
    const inputgroup = element.parentElement;
    const errorelement = inputgroup.querySelector('.error');
    errorelement.innerText = '';
    inputgroup.classList.add('success');
    inputgroup.classList.remove('error');
}
