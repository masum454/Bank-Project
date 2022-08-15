document.getElementById('submit-btn').addEventListener('click', function () {
    const emailField = document.getElementById('user-mail');
    const email = emailField.value;


    const passField = document.getElementById('user-pass');
    const pass = passField.value;

    if (email === 'masum@gmail.com' && pass === '0011') {
        window.location.href = 'bank.html'
    }
    else {
        alert('Invalid Password !!')
    }

    emailField.value = '';
    passField.value = '';
})