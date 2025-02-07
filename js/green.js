gsap.registerPlugin(ScrollTrigger);

/****** Red->Yellow Box ******/
//let triggerYellow = gsap.utils.toArray(".target"); //yellow
const targetGreens = document.querySelectorAll(".targetgreen"); //added//
const containerGreen = document.querySelector(".greenbox"); //added//

// Loop through each parent element (.target paragraph)
targetGreens.forEach((targetGreen, index) => {
  // Get all children of each 'parent' element
  const childrenGreen = targetGreen.children;

  //Timeline
  const tlGreen = gsap.timeline({
    scrollTrigger: {
      scroller: containerGreen,
      trigger: targetGreen,
      start: index === 0 ? "bottom 70%" : "top 70%", // For the first target, adjust the starting point (e.g., 100px offset)
      //start: "top 30%",
      //starts when top of the element hits the center of viewport
      end: "bottom 20%",
      toggleActions: "restart pause resume reverse",
      //end: top bottom means to end the animation when the top of the animated element reaches the bottom of the viewport.
      //markers: true,
      scrub: 3, //can slow down the animation
      pin: "false",
      onUpdate: (self) => {
        // Adjust scale based on scroll progress if needed
        gsap.to(targetGreen, {
          //scale: 0.8 + self.progress, // scale based on scroll progress
          duration: 0.7,
        });
      },
    },
  });

  // Loop through and select only even-indexed children
  for (let i = 2; i < childrenGreen.length; i += 4) {
    //console.log(childrenGreen[i].textContent);
    tlGreen.fromTo(
      childrenGreen[i],
      {
        opacity: 1,
        y: 0,
        rotate: 0,
        //scale: 0.5,
        duration: 2,
        stagger: 0.15,
      },
      {
        opacity: 0.1,
        //scale: 1,
        scale: 0.5,
        y: -100,
        rotate: -40,
        duration: 1.5,
        stagger: 0.15,
      }
    );
  }
}); //End of forEach Yellow
