function toggleDropdown() {
  const menu = document.getElementById("dropdownMenu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

function changePeriod(period) {
  document.getElementById("selected-period").innerText = period;
  document.getElementById("dropdownMenu").style.display = "none";
  // ใส่ฟังก์ชันเปลี่ยนข้อมูลตรงนี้ได้ เช่นโหลดข้อมูลใหม่ตามช่วงเวลา
}

// ปิด dropdown ถ้าคลิกที่อื่น
window.onclick = function (e) {
  if (!e.target.matches('#selected-period')) {
    const dropdowns = document.getElementsByClassName("dropdown-menu");
    for (let i = 0; i < dropdowns.length; i++) {
      dropdowns[i].style.display = "none";
    }
  }
};


// Gender Chart Initialization
window.addEventListener('DOMContentLoaded', function() {
    const genderCtx = document.getElementById('genderChart').getContext('2d');
    const genderChart = new Chart(genderCtx, {
        type: 'doughnut',
        data: {
            labels: ['Other', 'Female', 'Non-Binary', 'Male'],
            datasets: [{
                data: [10, 32, 11, 47],
                backgroundColor: [
                    '#fce762', // Yellow for Other
                    '#4ade80', // Green for Female
                    '#ff5d5d', // Red for Non-Binary
                    '#5bc0eb'  // Blue for Male
                ],
                borderWidth: 0,
                cutout: '60%'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.label + ': ' + context.raw + '%';
                        }
                    }
                }
            }
        }
    });
});

// Close dropdown when clicking elsewhere
window.addEventListener('click', function(event) {
    if (!event.target.matches('#selected-period') && !event.target.matches('#selected-period img')) {
        document.getElementById('dropdownMenu').style.display = 'none';
    }
});

//search


document.addEventListener('DOMContentLoaded', function() {
  // Get modal elements
  const addEventModal = document.getElementById('addEventModal');
  const openAddEventModalBtn = document.getElementById('openAddEventModal');
  const closeAddEventModalBtn = document.getElementById('closeAddEventModal');
  const addEventBtn = document.getElementById('addEventBtn');
  
  // Open modal
  openAddEventModalBtn.addEventListener('click', function() {
    addEventModal.style.display = 'flex';
  });
  
  // Close modal
  closeAddEventModalBtn.addEventListener('click', function() {
    addEventModal.style.display = 'none';
  });
  
  // Close modal when clicking outside
  addEventModal.addEventListener('click', function(e) {
    if (e.target === addEventModal) {
      addEventModal.style.display = 'none';
    }
  });
  
  // Add event button logic
  addEventBtn.addEventListener('click', function() {
    const eventName = document.getElementById('eventName').value;
    const eventLocation = document.getElementById('eventLocation').value;
    const startDate = document.getElementById('startDate').value;
    const startTime = document.getElementById('startTime').value;
    const endDate = document.getElementById('endDate').value;
    const endTime = document.getElementById('endTime').value;
    const eventDetails = document.getElementById('eventDetails').value;
    
    // Validate inputs
    if (!eventName || !eventLocation || !startDate || !startTime || !endDate || !endTime) {
      alert('Please fill in all required fields');
      return;
    }
    
    // Here you would typically send data to a server
    console.log('Event created:', {
      name: eventName,
      location: eventLocation,
      startDate: startDate,
      startTime: startTime,
      endDate: endDate,
      endTime: endTime,
      details: eventDetails
    });
    
    // Close the modal
    addEventModal.style.display = 'none';
    
    // Reset form
    document.getElementById('eventName').value = '';
    document.getElementById('eventLocation').value = '';
    document.getElementById('startDate').value = '';
    document.getElementById('startTime').value = '';
    document.getElementById('endDate').value = '';
    document.getElementById('endTime').value = '';
    document.getElementById('eventDetails').value = '';
  });
  
  // Image upload functionality
  const eventImageUpload = document.getElementById('eventImageUpload');
  eventImageUpload.addEventListener('click', function() {
    // Create a file input element
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    
    // Trigger click event on the file input
    fileInput.click();
    
    // Handle file selection
    fileInput.addEventListener('change', function() {
      if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
          // Change the upload area to show the selected image
          eventImageUpload.innerHTML = `<img src="${e.target.result}" style="max-width: 100%; max-height: 120px;">`;
        };
        
        reader.readAsDataURL(fileInput.files[0]);
      }
    });
  });
});


