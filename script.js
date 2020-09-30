const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    chekInputs();
});

function chekInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();

    if(usernameValue === '') {
        setErrorFor(username, 'username cannot be blank');
    } else {
        setSuccessFor(username);
    }
    if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;   
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}