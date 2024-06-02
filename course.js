document.addEventListener("DOMContentLoaded", function() {
    var images = document.querySelectorAll(".course-image");
    images.forEach(function(image) {
        image.addEventListener("click", function() {
            showImageModal(this);
        });
    });
});

function showImageModal(imgElement) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImage");

    modal.style.display = "block";
    modalImg.src = imgElement.src;
}

function closeImageModal() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none";
}
