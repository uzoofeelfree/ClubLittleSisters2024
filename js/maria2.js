const mariaContainer = document.getElementById("maria");
const videoElement = document.getElementById("myVideo");
const drawingContainer = document.getElementById("drawing");

// To temporarily disable drawing after centering
let cooldown = false; 

// Setting the initial cursor
//mariaContainer.style.cursor = 'url("../images/maria/new-pen-click.png") 0 12, auto';

// Add a click event listener to the video
drawingContainer.addEventListener("click", () => {
  //console.log("video clicked");
  centerElementInView(videoElement); // Center the video on click
  // Change the cursor after a click
  mariaContainer.style.cursor =
    'url("./images/maria/pennormal.png"), auto';
});

function centerElementInView(element) {
  const rect = element.getBoundingClientRect();
  const scrollX =
    window.scrollX + rect.left - (window.innerWidth - rect.width) / 2;
  const scrollY =
    window.scrollY + rect.top - (window.innerHeight - rect.height) / 2;

  window.scrollTo({
    top: scrollY,
    left: scrollX,
    behavior: "smooth",
  });

  // Activate cooldown to prevent immediate drawing
  cooldown = true;
  setTimeout(() => {
    // Reset lastX and lastY to avoid an unintended line
    const canvasRect = canvas.getBoundingClientRect();
    lastX = window.innerWidth / 2 - canvasRect.left;
    lastY = window.innerHeight / 2 - canvasRect.top;
    // After resetting, allow drawing again
    cooldown = false; 
  }, 500); 
}

//Drawing line effect on Canvas
var canvas = document.getElementById("canvas"),
  ctx = canvas.getContext("2d"),
  painting = false,
  lastX = 0,
  lastY = 0;

// Resize canvas to match window size (or container size)
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Initialize mouseX and mouseY variables
let mouseX, mouseY;

canvas.onmousedown = function (e) {
  //console.log("mouse on canvas");
  if (cooldown) return; // Prevent unintended drawing during cooldown

  // Toggle painting state
  painting = !painting;

  // Reset the drawing position when starting to paint
  if (painting) {
    var rect = canvas.getBoundingClientRect();
    lastX = e.pageX - rect.left; // Get the mouse position relative to the canvas
    lastY = e.pageY - rect.top;
  }

  // if (!painting) { 
  //   painting = true;
  // } else {
  //   painting = false;
  // }
  // var rect = canvas.getBoundingClientRect();
  // lastX = e.pageX - rect.left; // Get the mouse position relative to the canvas
  // lastY = e.pageY - rect.top;
};

canvas.onmousemove = function (e) {
  if (painting) {
    //console.log("drawing");
    var rect = canvas.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;

    //ctx.fillStyle = "rgba(255,255,255,0.0)";
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(mouseX+0.1, mouseY+0.1);
    ctx.stroke();
    ctx.strokeStyle = "white";
    // Semi-transparent white
    //ctx.strokeStyle = "rgba(255, 255, 255, 0.8)";
    ctx.lineWidth = 7;
    ctx.lineCap = "round";
    ctx.lineJoin = "round"; // Smooth connection between lines
    ctx.stroke();
    // Optional: Add blur for smudge effect after drawing
    ctx.filter = "blur(1.5px)"; // Apply a blur effect to simulate smudging

    lastX = mouseX;
    lastY = mouseY;
    //console.log(lastX, lastY, mouseX, mouseY);
  }
};

// Gradual fading effect for the canvas
function fadeOut() {
  ctx.globalCompositeOperation = "destination-out"; // Makes drawing transparent
  //ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
  ctx.fillStyle = "rgba(0, 0, 0, 0.07)"; // Slight black overlay for fading
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Reset the drawing mode to default for normal drawing
  ctx.globalCompositeOperation = "source-over";

  // Call repeatedly to keep fading over time
  //requestAnimationFrame(fadeOut);
  setTimeout(fadeOut, 100);
}

// Start the fade-out effect
fadeOut();



