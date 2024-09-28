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

// for sticky navbar
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        // If we scroll down 50px or more, apply the "solid" class
        navbar.classList.add("solid");
        navbar.classList.remove("transparent");
    } else {
        // If we are at the top of the page, make it transparent again
        navbar.classList.add("transparent");
        navbar.classList.remove("solid");
    }
});

// Make sure the navbar starts as transparent
document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
    navbar.classList.add("transparent");
});
