document.addEventListener('DOMContentLoaded', function() {
    const enrollButtons = document.querySelectorAll('.enroll-button');
  
    enrollButtons.forEach(button => {
      button.addEventListener('click', function() {
        enroll(this.parentNode);
      });
    });
  
    function enroll(course) {
      const courseTitle = course.querySelector('h3').textContent;
      const coursePrice = course.querySelector('p:last-of-type').textContent;
  
    alert(`Enrolled in "${courseTitle}" for ${coursePrice}`);
    }
  });
  
  