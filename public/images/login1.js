function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Basic authentication - you would replace this with your actual authentication process
    if (username === 'yash@5050' && password === '1234') {
        window.location.href = 'index.html';
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('next-form-container').style.display = 'block';
    } else {
        alert('Invalid username or password. Please try again.');
    }
    document.getElementById('questionnaireForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        
        // Get form data
        var interests = document.getElementById('interests').value;
        var skills = document.getElementById('skills').value;
        
        // You can perform further processing or submit the data to a server here
        
        // For simplicity, let's just log the data to the console
        console.log('Interests:', interests);
        console.log('Skills:', skills);
        
        // You can redirect the user to another page or perform additional actions here
    });
    
   

    
}
