function validateForm(event) {
    event.preventDefault(); // Prevent form submission
    let firstName = document.querySelector('.search-input-fname').value;
    let lastName = document.querySelector('.search-input-lname').value;
    let day = document.querySelector('#dob-day').value;
    let month = document.querySelector('#dob-month').value;
    let year = document.querySelector('#dob-year').value;
    let email = document.querySelector('.search-input-email').value;
    let password = document.querySelector('.search-input-password').value;
    let confirmPassword = document.querySelector('.search-input-cpass').value;

    if (firstName && lastName && day && month && year && email && password && confirmPassword) {
        if (password === confirmPassword) {
            window.location.href = 'login.html';
        } else {
            alert('Passwords do not match.');
        }
    } else {
        alert('Please fill out all fields.');
    }
}