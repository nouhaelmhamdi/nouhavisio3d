document.addEventListener('DOMContentLoaded', function() {
document.querySelector('.cardi').addEventListener('mouseover', function() {
   document.getElementById('cardiContent').style.height = '150px'; // Choose an appropriate height
  });
  
  document.querySelector('.cardi').addEventListener('mouseout', function() {
   document.getElementById('cardiContent').style.height = 'auto'; // This will return the height to its original value
  });
});