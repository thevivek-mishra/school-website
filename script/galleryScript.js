
        // Placeholder image URLs
const imagesSection1 = [
    'image/img1.jpeg',
    'image/img2.jpeg',
    'image/img3.jpeg',
    'image/img4.jpeg',
    'image/img5.jpeg',
    'image/img6.jpeg',
    'image/img7.jpeg',
    'image/img8.jpeg',
    'image/img9.jpeg',
    'image/img10.jpeg',
    
   
];

const imagesSection2 = [
    'image/img13.jpeg',
    'image/img14.jpeg',
    'image/img15.jpeg',
];

const imagesSection3 = [
    'image/img10.jpeg',
    'image/img11.jpeg',
    'image/img12.jpeg',
];

// Function to populate the gallery for a section
function populateGallery(sectionId, images) {
    const gallery = document.getElementById(sectionId);
    images.forEach((imageUrl, index) => {
        const imgElement = document.createElement('img');
        imgElement.src = imageUrl;
        imgElement.setAttribute('data-index', index);
        imgElement.addEventListener('click', openLightbox);
        gallery.appendChild(imgElement);
    });
}

// Populating galleries with images
populateGallery('gallery1', imagesSection1);
populateGallery('gallery2', imagesSection2);
populateGallery('gallery3', imagesSection3);

// Lightbox functionality
function openLightbox(event) {
    const index = parseInt(event.target.getAttribute('data-index'), 10);
    // lightbox.open(index);
}


// script for model 

// Get the modal
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("modal-img");
var images = document.querySelectorAll(".gallery img");
var currentIndex = 0;

// Open the modal and display the clicked image
function openModal(index) {
  modal.style.display = "block";
  modalImg.src = images[index].src;
  currentIndex = index;
}

// Close the modal
document.querySelector(".close").addEventListener("click", function() {
  modal.style.display = "none";
});

// Function to display next image
function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  modalImg.src = images[currentIndex].src;
}

// Function to display previous image
function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  modalImg.src = images[currentIndex].src;
}

// Attach event listeners to images
images.forEach(function(image, index) {
  image.addEventListener("click", function() {
    openModal(index);
  });
});