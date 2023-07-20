// rush.js

// Function to switch between Leonardo and Vincent CVs
function switchCV() {
    const leonardoCV = document.getElementById('leonardo-cv');
    const vincentCV = document.getElementById('vincent-cv');
    const switchBtn = document.getElementById('switchBtn');
  
    // Toggle display of CVs based on their current visibility
    if (leonardoCV.style.display === 'none') {
      leonardoCV.style.display = 'block';
      vincentCV.style.display = 'none';
      switchBtn.innerText = 'Switch CVs';
    } else {
      leonardoCV.style.display = 'none';
      vincentCV.style.display = 'block';
      switchBtn.innerText = 'Switch CVs';
    }
  }
  
  // Event listener for the "Switch CVs" button
  document.getElementById('switchBtn').addEventListener('click', switchCV);
  
