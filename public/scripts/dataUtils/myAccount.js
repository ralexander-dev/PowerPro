//checking if the user is logged in 
const userLoggedIn = sessionStorage.getItem('user');  

if (!userLoggedIn) {
    alert("You must be logged in to access your account settings.");
    window.location.href = "/login"; // Redirect to login page
}

// Assuming user data is stored and passed in session or as a response from the backend
function displayUserInfo(username) {
    // Fetch user info 
    fetch(`/api/user-info?username=${username}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('fullNameDisplay').textContent = data.fullName;
            document.getElementById('emailDisplay').textContent = data.email;
            document.getElementById('addressDisplay').textContent = data.address;
        });
}

if (userLoggedIn) {
    displayUserInfo(userLoggedIn);
}

function signOut() {
    // Implement sign out by clearing the session or cookie
    sessionStorage.removeItem('user');
    window.location.href = '/login';  // Redirect to login page
}