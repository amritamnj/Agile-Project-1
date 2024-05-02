document.addEventListener('DOMContentLoaded', function() {
  // Function to show the modal
  function showModal(modalId) {
    var modal = document.querySelector(modalId);
    modal.style.display = "block";
  }

  // Function to close the modal and stop the video
  function closeModal(modal) {
    modal.style.display = "none";

    // Find the iframe within the modal and stop the video
    var iframe = modal.querySelector('iframe');
    if (iframe !== null) {
      var iframeSrc = iframe.src;
      iframe.src = iframeSrc; 
    }
  }

  // Select all elements with the class "timeline-card" and attach a click event listener to each one so that it pops up when the timeline card is clicked
  document.querySelectorAll(".timeline-card").forEach(function(card, index) {
    card.addEventListener('click', function() {
      var modalId = "#myModal" + (index + 1); 
      showModal(modalId); 
    });
  });

  // Adding an event listener to close buttons within each modal
  document.querySelectorAll("[data-dismiss='modal']").forEach(function(button) {
    button.addEventListener('click', function() {
      var modal = button.closest('.modal');
      closeModal(modal); 
    });
  });

  // Close modal even if the user clicks outside of it
  window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
      closeModal(event.target); 
    }
  });
});
