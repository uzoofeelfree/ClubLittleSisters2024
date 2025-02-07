gsap.registerPlugin(ScrollTrigger);

/****** Red->Yellow Box ******/
//let triggerYellow = gsap.utils.toArray(".target"); //yellow
const targetYellows = document.querySelectorAll(".target"); //added//
const containerYellow = document.querySelector(".yellowbox"); //added//

// Loop through each parent element (.target paragraph)
targetYellows.forEach((targetYellow, index) => {
  // Get all children of each 'parent' element
  const childrenYellow = targetYellow.children;

  //Timeline
  const tlYellow = gsap.timeline({
    scrollTrigger: {
      scroller: containerYellow,
      trigger: targetYellow,
      //start: "top 30%",
      start: index === 0 ? "bottom 30%" : "top 20%", // For the first target, adjust the starting point (e.g., 100px offset)
      //starts when top of the element hits the center of viewport
      end: "bottom 10%",
      toggleActions: "restart pause resume reverse",
      //end: top bottom means to end the animation when the top of the animated element reaches the bottom of the viewport.
      //markers: true,
      scrub: 6, //can slow down the animation
      pin: "false",
      onUpdate: (self) => {
        // Adjust scale based on scroll progress if needed
        gsap.to(targetYellow, {
          //scale: 0.8 + self.progress, // scale based on scroll progress
          duration: 0.7,
        });
      },
    },
  });

  // Loop through and select only even-indexed children
  for (let i = 2; i < childrenYellow.length; i += 4) {
    //console.log(childrenYellow[i].textContent);
  
    tlYellow.fromTo(
      childrenYellow[i],
      {
        opacity: 1,
        y: 0,
        rotate: 0,
        duration: 2,
        stagger: 0.15,
      },
      {
        opacity: 0,
        y: 200,
        rotate: 0,
        duration: 3,
        stagger: 0.35,
        ease: "power2.out", //빠르게 낙하하게끔
        //ease: "power4.out", //빠르게 낙하하게끔
      }
    );
  } 

}); //End of forEach Yellow
