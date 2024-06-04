function validateForm(event) {
    
    // Get form values
    let firstName = document.querySelector('#search-input-fname').value;
    let lastName = document.querySelector('#search-input-lname').value;
    let day = document.querySelector('#dob-day').value;
    let month = document.querySelector('#dob-month').value;
    let year = document.querySelector('#dob-year').value;
    let email = document.querySelector('.search-input-email').value;
    let password = document.querySelector('#search-input-password').value;
    let confirmPassword = document.querySelector('#search-input-cpass').value;

    // Check if all fields are filled
    if (firstName && lastName && day && month && year && email && password && confirmPassword) {
        // Check if passwords match
        if (password === confirmPassword) {
            alert('Register successful!!!');
        } else {
            alert('Passwords do not match.');
            event.preventDefault(); // Prevent form submission  
        }
    }
}