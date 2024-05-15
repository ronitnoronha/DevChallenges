// select toggle button
let toggle = document.getElementById("mode");

toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
})




const toggleCheckbox = document.getElementById('mode');
const image = document.getElementById('logo');

toggleCheckbox.addEventListener('change', function() {
    if (this.checked) {
        // Change image source when checkbox is checked
        image.src = 'icon.svg'; 
    } else {
        // Change back to the original image source when checkbox is unchecked
        image.src = 'dicon.svg'; 
    }
});