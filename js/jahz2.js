const jahzContainer = document.getElementById("jahz");
const door = document.getElementById("door");
const introText = document.getElementById("introtext");
const jahzText = document.querySelector("#jahztext");
//const scroller = document.getElementById("bodies");
const doorJahz = document.querySelector(".door-opening");
//const doorrectimg = document.getElementById("g");
const doorRect = document.getElementById("doorrect");
const doorHandle = document.getElementById("doorhandle");
const bodies = document.getElementById("bodies");
const arrow1 = document.getElementById("scroll-down1");
const arrow2 = document.getElementById("scroll-down2");

let lastScrollTop = 0; // Tracks the last known scroll position
let hideTimeout; // Tracks the timeout for hiding arrows

bodies.addEventListener("scroll", () => {
  const currentScrollTop = bodies.scrollTop;

  if (currentScrollTop > lastScrollTop) {
    // User is scrolling down
    clearTimeout(hideTimeout); // Clear any existing timeout
    hideTimeout = setTimeout(() => {
      arrow1.style.opacity = "0"; // Fade out arrows
      arrow1.style.visibility = "hidden";
      arrow2.style.opacity = "0";
      arrow2.style.visibility = "hidden";
    }, 1500); // Delay hiding by 1.5 seconds
  } else {
    // User is scrolling up
    clearTimeout(hideTimeout); // Stop the hide action if scrolling up
    arrow1.style.opacity = "1"; // Fade in arrows
    arrow1.style.visibility = "visible";
    arrow2.style.opacity = "1";
    arrow2.style.visibility = "visible";
  }

  // Update the last scroll position
  lastScrollTop = currentScrollTop;
});

// Hide arrows on scroll
// bodies.addEventListener("scroll", () => {
//   setTimeout(() => {
//     arrow1.style.opacity = "0";
//     arrow1.style.visibility = "hidden";
//     arrow2.style.opacity = "0";
//     arrow2.style.visibility = "hidden";
//   }, 1500);
// });

function toggleDoor() {
  door.classList.toggle("dooropened");

  // Hide the #doorrect element with a smooth fade-out
  if (door.classList.contains("dooropened")) {
    door.classList.add("doorvisible");
    doorRect.classList.add("hidden");
    $("#door").css({ visibility: "hidden" });
  } else {
    door.classList.remove("doorvisible");
    doorRect.classList.remove("hidden");
    $("#door").css({ visibility: "visible" });
  }
}

door.addEventListener("click", () => {
  // Scroll to the center of the jahz whole container
  jahzContainer.scrollIntoView({
    behavior: "smooth", // Smooth scrolling animation
    block: "center", // Align the element at the top of the viewport
  });

  $(
    "#textKnockDoorKR1, #textKnockDoorKR2, #textKnockDoorEN1, #textKnockDoorEN2, #textKnockDoorFR1, #textKnockDoorFR2"
  ).hide();

  toggleDoor();

  $("#doorhandle").css({
    opacity: 0, // Smooth fade out
    visibility: "hidden", // Make it non-interactable
  });

  // Show bodies and content after the door opens
  setTimeout(() => {
    $("#bodies").css({
      display: "flex",
      visibility: "visible",
      opacity: 1,
      left: "45.5%",
    });

    $(
      "#introtext, #skeleton, #jahztext, #twobodies1, #twobodies2, #twobodies3"
    ).fadeIn(800);
  }, 600); // Delay content display to match the door animation duration
});

//Click Arrows then move to the main text part
document.getElementById("scrollButton").addEventListener("click", function () {
  // Scroll to the target element
  jahzText.scrollIntoView({
    behavior: "smooth", // Smooth scrolling animation
    block: "start", // Align the element at the top of the viewport
  });
});
