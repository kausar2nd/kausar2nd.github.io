// Get the modal and the modal image element
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("imgInModal");
var span = document.getElementsByClassName("close")[0];

// Get all images with class 'myImage'
var images = document.getElementsByClassName("view");

// Loop through each image and add an onclick event
for (var i = 0; i < images.length; i++) {
    images[i].onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src; // Set the modal image to clicked image's source
    }
}

// Close the modal when 'X' is clicked
span.onclick = function () {
    modal.style.display = "none";
}

// Optionally, close the modal if clicked outside the image
modal.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
