gsap.registerPlugin(ScrollTrigger);

/*******Red box******/

  const targetReds = document.querySelectorAll(".targetred"); //added//
  const containerRed = document.querySelector(".redbox"); //added//
  // Loop through each parent element
  targetReds.forEach((targetRed) => {
    // Get all children of each 'parent' element
    const childrenRed = targetRed.children;

    //Timeline
    const tlRed = gsap.timeline({
      scrollTrigger: {
        scroller: containerRed,
        trigger: childrenRed,
        start: "top 80%",
        end: "bottom top",
        toggleActions: "restart pause resume reverse",
        //end: top bottom means to end the animation when the top of the animated element reaches the bottom of the viewport.
        //markers: true,
        scrub: 1,
        // pin: "true",
        // onUpdate: (self) => {
        //   // Adjust scale based on scroll progress if needed
        //   gsap.to(targetRed, {
        //     scale: 0.8 + self.progress, // scale based on scroll progress
        //     duration: 0.7,
        //   });
        // },
      },
    });

    const soliContainer = document.getElementById("#soli");
    const swingRadius = gsap.getProperty(soliContainer, "--radius"); // gets the radius var from CSS... useful for this example's flexability.

    const transformOriginValue = "50% -" + swingRadius + "vh"; 


    // Loop through and select only even-indexed children
    for (let i = 2; i < childrenRed.length; i += 4) {
      const tween = gsap.from(childrenRed[i], {
        duration: 2,
        rotation: "-10deg",
        transformOrigin: transformOriginValue,
        ease: "elastic.out( 3, 0.1)",
        //repeat: -1,
        delay: 0,
        stagger: 0.1,
        paused: true,
      });

      //console.log(childrenRed[i].textContent);
      tlRed.from(childrenRed[i], {
        duration: 1,
        rotation: "0deg",
        //transformOrigin: transformOriginValue,
        //ease: "elastic.out( 3, 0.1)",
        //repeat: -1,
        delay: 2,
        onComplete: () => {
          tween.play();
        },
      });
    }
  }); //End of forEach Red