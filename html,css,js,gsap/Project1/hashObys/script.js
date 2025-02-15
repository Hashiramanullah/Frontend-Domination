let loader = document.querySelector("#loader");
let main = document.querySelector(".main");

function Counter() {
    let counter = document.querySelector("#count");
    let count = 0; // Initialize count to 0
    
    // Display the initial count
    counter.innerHTML = count;
   
    const interval = setInterval(() => {
        if (count >= 100) {
            clearInterval(interval); // Stop the interval
            main.style.display = 'block'; // Show the main content
            loader.style.display = 'none'; // Hide the loader
        } else {
            count++;
            counter.innerHTML = count; // Update the count display
        }
        console.log(count);
    }, 100);
}

Counter(); // Initialize the counter
