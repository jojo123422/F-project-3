document.addEventListener("DOMContentLoaded", function() { // Ensure the DOM is fully loaded
    const ideasContainer = document.querySelectorAll('.card');
    ideasContainer.forEach(container => {
        let scrollAmount = 0;
        const step = 2; // Adjust this value to change the speed
        const delay = 30; // Adjust this value for the interval between each scroll step

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