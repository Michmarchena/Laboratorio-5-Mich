document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.toggle-btn');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.dataset.target;
            const targetDiv = document.getElementById(targetId);

            if (targetDiv.style.display === 'none' || targetDiv.style.display === '') {
                targetDiv.style.display = 'block';
            } else {
                targetDiv.style.display = 'none';
            }
        });
    });
});