let openModalBtn = document.getElementById('openModalBtn');
let modalContainer = document.getElementById('modalContainer');
let closeModalBtn = document.getElementById('closeModalBtn');

    // Event listener to open the modal when the button is clicked
    openModalBtn.addEventListener('click', function() {
        // Show the modal container by adding a class that sets display to "flex"
        modalContainer.classList.add('show-modal');
    });
    
    // Event listener to close the modal when the close icon is clicked
    closeModalBtn.addEventListener('click', function() {
        // Hide the modal container by removing the class that sets display to "flex"
        modalContainer.classList.remove('show-modal');
    });