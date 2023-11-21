document.addEventListener("DOMContentLoaded", function() { // Ensure the DOM is fully loaded
          const ideasContainer = document.querySelectorAll('.ideas');
      
          ideasContainer.forEach(container => {
              let scrollAmount = 0;
              const step = -2; // Adjust this value to change the speed
              const delay = 90; // Adjust this value for the interval between each scroll step
      
              function scrollContainer() {
                  if (scrollAmount < container.scrollWidth - container.clientWidth) {
                      container.scrollLeft += step;
                      scrollAmount += step;
                  } else {
                      container.scrollLeft = 0; // Reset scroll when it reaches the end
                      scrollAmount = 0;
                  }
              }
      
              setInterval(scrollContainer, delay);
          });
      });
    //   for the chart
    const ideaSellingData = [2, 0, 1, 0, 3, 1, 0, 2, 1, 0, 0, 0];
        const months = [
            'يناير', 'فبراير ', 'مارس ', 'أبريل ', 'مايو ', 'يونيو ',
            'يوليو ', 'أغسطس ', 'سبتمبر ', 'أكتوبر ', 'نوفمبر ', 'ديسمبر'
        ];

        // Get the current month
        const currentDate = new Date();
        const currentMonth = currentDate.getMonth();

        // Check if the current month is after September
        const isAfterSeptember = currentMonth > 8; 

        // Generate labels for the chart
        const chartLabels = isAfterSeptember ? months.slice(0, 9) : months;

        // Generate data for the chart
        const chartData = isAfterSeptember ? [...ideaSellingData.slice(0, 9), null, null] : ideaSellingData;

        // Create a chart using Chart.js
       // Create a chart using Chart.js
const ctx = document.getElementById('ideaSellingChart').getContext('2d');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: chartLabels,
        datasets: [{
            label: 'الافكار الي بيعت',
            data: chartData,
            backgroundColor: 'rgba(52, 152, 219, 0.7)',
        }],
    },
    options: {
        scales: {
            y: {
                beginAtZero: false, // Set this to false
                min: 1, // Set the minimum value to 1
                stepSize: 1, // Set the step size to 1
            },
        },
        plugins: {
            legend: {
                display: false,
            },
        },
    },
});


        // Display a message for months after September
        if (isAfterSeptember) {
            alert("Sorry, you haven't reached this month yet.");
        }