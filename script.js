const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you for your message!');
    });
}

document.addEventListener("DOMContentLoaded", function() {
    fetch('footer.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to load footer: ' + response.statusText);
            }
            return response.text();
        })
        .then(data => {
            // Masukkan konten footer.html ke elemen footer
            document.querySelector('footer').innerHTML = data;
        })
        .catch(error => console.error(error));
});
