function handleImageUpload(event, cardNumber) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.getElementById('img' + cardNumber);
            const placeholder = document.getElementById('image' + cardNumber);
            
            img.src = e.target.result;
            img.style.display = 'block';
            placeholder.classList.add('has-image');
        }
        reader.readAsDataURL(file);
    }
}

function logout() {
    if (confirm('Are you sure you want to logout?')) {
        alert('Logging out...');
        // In a real application, redirect to login page
        window.location.href = 'login.html';
    }
    return false;
}
