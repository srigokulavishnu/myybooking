
    document.getElementById('form').addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent default form submission behavior

        const form = document.getElementById('form');
        const errorElements = document.querySelectorAll('.error');

        // Reset error messages
        errorElements.forEach(function(errorElement) {
            errorElement.innerText = '';
        });

        let isValid = true;

        // Get form inputs
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();
        const cpassword = document.getElementById('cpassword').value.trim();
        const mail = document.getElementById('mail').value.trim();
        const phone = document.getElementById('phone').value.trim();

        
        
        // Validate username
        if (username === '') {
            setError('username', 'Username is required');
            isValid = false;
        }
          // Validate password
        if (password  === '') {
            setError('password', 'required 6 characters');
            isValid = false;
        }
   
        

      
        

        // Validate confirm password
        if (cpassword === '') {
            setError('cpassword', 'Confirm password is required');
            isValid = false;
        } 
        else if (password !== cpassword) {
            setError('cpassword', 'Passwords do not match');
            isValid = false;
        }

        if (mail === '') {
            setError('mail', 'Email is required');
            isValid = false;
        } else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))) { // Remove .value from mail
            setError('mail', 'Email is invalid');
            isValid = false;
        }
        
        // Validate phone number
        if (phone === '') {
            setError('phone', 'Phone number is required');
            isValid = false;
        } else if (!/^\d{10}+$/.test(phone)) { // Add this check for numeric values only
            setError('phone', 'Phone number must contain only (10)digits');
            isValid = false;
        }
       

        // If form is valid, submit the form
        if (isValid) {
            form.submit();
        }
    });

    function setError(inputId, errorMessage) {
        const errorElement = document.getElementById(`${inputId}-error`);
        errorElement.innerText = errorMessage;
    }

