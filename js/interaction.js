//When current (user's) viewport meets a specific section, interaction effects become refresh.

(function ($) {
  $.fn.isVisible = function () {
    var top_of_element = $(this).offset().top;
    var left_of_element = $(this).offset().left;
    var bottom_of_element = $(this).offset().top + $(this).outerHeight();
    var right_of_element = $(this).offset().left + $(this).outerWidth();
    var top_of_screen = $(window).scrollTop();
    var bottom_of_screen = $(window).scrollTop() + $(window).height();
    var left_of_screen = $(window).scrollLeft();
    var right_of_screen = $(window).scrollLeft() + $(window).width();

    if (
      top_of_element < bottom_of_screen &&
      bottom_of_element > top_of_screen &&
      left_of_element < right_of_screen &&
      right_of_element > left_of_screen
    ) {
      // the element is visible, do something
      return true;
    } else {
      // the element is not visible, do something else
      return false;
    }
  };
})(jQuery);

//var mathildeStartState = true; //initial setting not moving enve

$(window).scroll(function () {
  var executedAlready = false;
  if ($("#mathilde").isVisible()) {
    executedAlready = true;
  } else {
    //console.log("mathilde NOT in viewport");
    mathildeRefresh();
  }
});

function mathildeRefresh() {
  if ($("div.none").is(":visible")) {
    $("div.none").hide();
  }
  $("#envelop").show("slow");
  $(
    "#textEnvKR1, #textEnvEN1, #textEnvFR1, #textEnvKR2, #textEnvEN2, #textEnvFR2"
  ).show();

}

$(window).scroll(function () {
  if ($("#jahz").isVisible()) {
    // When #jahz is in the viewport
    restoreJahzState();
  } else {
    // When #jahz leaves the viewport
    setTimeout(jahzRefresh, 1000);
  }
});

// Refresh the state when leaving the #jahz section
function jahzRefresh() {
  // Ensure #bodies is hidden
  $("#bodies").css({
    display: "none",
    visibility: "hidden",
    opacity: 0,
  });

  // Reset door to its initial state (closed and visible)
  const door = document.getElementById("door");
  door.classList.remove("dooropened", "doorvisible");

  // Ensure #doorrect is visible again
  $("#doorrect").removeClass("hidden").css({
    visibility: "visible",
    opacity: 1,
  });

  // Show door handle again
  $("#doorhandle").css({
    opacity: 1, // Smooth fade out
    visibility: "visible", // Make it non-interactable
  });

  // Reset scroll position of #bodies to the top
  const bodies = document.getElementById("bodies");
  bodies.scrollTop = 0;

  // Ensure the door's base element is visible and closed
  $("#door").removeClass("dooropened hide-door");
  doorRect.classList.remove("hidden");

  //Re-show textImplication for knocking door
  $(
    "#textKnockDoorKR1, #textKnockDoorEN1, #textKnockDoorFR1, #textKnockDoorKR2, #textKnockDoorEN2, #textKnockDoorFR2"
  ).show();

  // Restore arrows visibility
  const arrow1 = document.getElementById("scroll-down1");
  const arrow2 = document.getElementById("scroll-down2");
   setTimeout(() => {
     arrow1.style.opacity = "1";
     arrow1.style.visibility = "visible";
     arrow2.style.opacity = "1";
     arrow2.style.visibility = "visible";
   }, 300);
}

// Restore the state when the #jahz section comes into view
function restoreJahzState() {
  // Ensure the #door is set to its initial state
  if (!door.classList.contains("dooropened")) {
    // Make sure the door starts in the closed state
    $("#door").css({ visibility: "visible" });
    $("#doorhandle").css({
      visibility: "visible",
      opacity: 1,
    });
    $("#doorrect").removeClass("hidden").css({
      visibility: "visible",
      opacity: 1,
    });
    door.classList.remove("dooropened", "doorvisible");
  }
}

//Envelop bouncing within the section
//https://jsfiddle.net/He5aQ/2/

var vx = 3;
var vy = 2;

function hitLR(el, bounding) {
  if (el.offsetLeft <= 0 && vx < 0) {
    //console.log("LEFT");
    vx = -1 * vx;
  }
  if (el.offsetLeft + el.offsetWidth >= bounding.offsetWidth) {
    //console.log("RIGHT");
    vx = -1 * vx;
  }
  if (el.offsetTop <= 0 && vy < 0) {
    //console.log("TOP");
    vy = -1 * vy;
  }
  if (el.offsetTop + el.offsetHeight >= bounding.offsetHeight) {
    //console.log("BOTTOM");
    vy = -1 * vy;
  }
}

function mover(el, bounding) {
  hitLR(el, bounding);
  el.style.left = el.offsetLeft + vx + "px";
  el.style.top = el.offsetTop + vy + "px";
  setTimeout(function () {
    mover(el, bounding);
  }, 20);
}

setTimeout(function () {
  mover($("#envelop")[0], $("#mathilde")[0]);
}, 100);

//Oszu//

$(document).ready(function () {
  $("#fog1").hover(
    function () {
      $("#tx1").addClass("active");
      $("#tx1 img").removeClass("reset-animation"); // Ensure animation runs
    },
    function () {
      $("#tx1").removeClass("active");
      // Temporarily disable animation by adding `reset-animation` class
      $("#tx1 img").addClass("reset-animation");
      // Remove the `reset-animation` class after a brief timeout to reset
      setTimeout(function () {
        $("#tx1 img").removeClass("reset-animation");
      }, 50); // Adjust delay as needed to ensure reset
    }
  );
});

$(document).ready(function () {
  $("#fog2").hover(
    function () {
      $("#tx2").addClass("active");
      $("#tx2 img").removeClass("reset-animation"); // Ensure animation runs
    },
    function () {
      $("#tx2").removeClass("active");
      // Temporarily disable animation by adding `reset-animation` class
      $("#tx2 img").addClass("reset-animation");

      // Remove the `reset-animation` class after a brief timeout to reset
      setTimeout(function () {
        $("#tx2 img").removeClass("reset-animation");
      }, 50); // Adjust delay as needed to ensure reset
    }
  );
});

$(document).ready(function () {
  $("#fog3").hover(
    function () {
      $("#tx3").addClass("active");
      $("#tx3 img").removeClass("reset-animation"); // Ensure animation runs
    },
    function () {
      $("#tx3").removeClass("active");
      // Temporarily disable animation by adding `reset-animation` class
      $("#tx3 img").addClass("reset-animation");

      // Remove the `reset-animation` class after a brief timeout to reset
      setTimeout(function () {
        $("#tx3 img").removeClass("reset-animation");
      }, 50); // Adjust delay as needed to ensure reset
    }
  );
});

$(document).ready(function () {
  $("#fog4").hover(
    function () {
      $("#tx4").addClass("active");
      $("#tx4 img").removeClass("reset-animation"); // Ensure animation runs
    },
    function () {
      $("#tx4").removeClass("active");
      // Temporarily disable animation by adding `reset-animation` class
      $("#tx4 img").addClass("reset-animation");

      // Remove the `reset-animation` class after a brief timeout to reset
      setTimeout(function () {
        $("#tx4 img").removeClass("reset-animation");
      }, 50); // Adjust delay as needed to ensure reset
    }
  );
});

$(document).ready(function () {
  $("#fog5").hover(
    function () {
      $("#tx5").addClass("active");
      $("#tx5 img").removeClass("reset-animation"); // Ensure animation runs
    },
    function () {
      $("#tx5").removeClass("active");
      // Temporarily disable animation by adding `reset-animation` class
      $("#tx5 img").addClass("reset-animation");

      // Remove the `reset-animation` class after a brief timeout to reset
      setTimeout(function () {
        $("#tx5 img").removeClass("reset-animation");
      }, 50); // Adjust delay as needed to ensure reset
    }
  );
});

$(document).ready(function () {
  $("#fog6").hover(
    function () {
      $("#tx6").addClass("active");
      $("#tx6 img").removeClass("reset-animation"); // Ensure animation runs
    },
    function () {
      $("#tx6").removeClass("active");
      // Temporarily disable animation by adding `reset-animation` class
      $("#tx6 img").addClass("reset-animation");

      // Remove the `reset-animation` class after a brief timeout to reset
      setTimeout(function () {
        $("#tx6 img").removeClass("reset-animation");
      }, 50); // Adjust delay as needed to ensure reset
    }
  );
});

$(document).ready(function () {
  $("#fog7").hover(
    function () {
      $("#tx7").addClass("active");
      $("#tx7 img").removeClass("reset-animation"); // Ensure animation runs
    },
    function () {
      $("#tx7").removeClass("active");
      // Temporarily disable animation by adding `reset-animation` class
      $("#tx7 img").addClass("reset-animation");

      // Remove the `reset-animation` class after a brief timeout to reset
      setTimeout(function () {
        $("#tx7 img").removeClass("reset-animation");
      }, 50); // Adjust delay as needed to ensure reset
    }
  );
});

//Mathilde//

$("#envelop").on("click", function () {
  // Get the position of #m1 relative to the viewport
  const mathildeRect = document.querySelector("#mathilde").getBoundingClientRect();
  const m1Rect = document.querySelector("#m1").getBoundingClientRect();

  // Calculate the absolute position of #m1 relative to the document
  const scrollToX = window.scrollX + mathildeRect.left + m1Rect.left;
  const scrollToY = window.scrollY + mathildeRect.top + m1Rect.top;

  // Smoothly scroll the viewport to the calculated position
  window.scrollTo({
    top: scrollToY,
    left: scrollToX,
    behavior: "smooth",
  });

  $("#m1").show("slow", function () {
    // Animation complete.
    $("#envelop").hide();
    $(
      "#textEnvKR1, #textEnvKR2, #textEnvKR3, #textEnvEN1, #textEnvEN2, #textEnvEN3, #textEnvFR1, #textEnvFR2, #textEnvFR3"
    ).hide();
  });
});

$("#m1").on("click", function () {
  $("#m2").show("slow", function () {
    // Animation complete.
  });
});

$("#m2").on("click", function () {
  $("#m3").show("slow", function () {
    // Animation complete.
  });
});

$("#m3").on("click", function () {
  $("#m4").show("slow", function () {
    // Animation complete.
  });
});
$("#m4").on("click", function () {
  $("#m5").show("slow", function () {
    // Animation complete.
  });
});
$("#m5").on("click", function () {
  $("#m6").show("slow", function () {
    // Animation complete.
  });
});
$("#m6").on("click", function () {
  $("#m7").show("slow", function () {
    // Animation complete.
  });
});
$("#m7").on("click", function () {
  $("#m8").show("slow", function () {
    // Animation complete.
  });
});
$("#m8").on("click", function () {
  $("#m9").show("slow", function () {
    // Animation complete.
  });
});
$("#m9").on("click", function () {
  $("#m10").show("slow", function () {
    // Animation complete.
  });
});
$("#m10").on("click", function () {
  $("#m11").show("slow", function () {
    // Animation complete.
  });
});
$("#m11").on("click", function () {
  $("#m12").show("slow", function () {
    // Animation complete.
  });
});
$("#m12").on("click", function () {
  $("#m13").show("slow", function () {
    // Animation complete.
  });
});
$("#m13").on("click", function () {
  $("#m14").show("slow", function () {
    // Animation complete.
  });
});
$("#m14").on("click", function () {
  $("#m15").show("slow", function () {
    // Animation complete.
  });
});
$("#m15").on("click", function () {
  $("#m16").show("slow", function () {
    // Animation complete.
  });
});
$("#m16").on("click", function () {
  $("#m17").show("slow", function () {
    // Animation complete.
  });
});
$("#m17").on("click", function () {
  $("#m18").show("slow", function () {
    // Animation complete.
  });
});
$("#m18").on("click", function () {
  $("#m19").show("slow", function () {
    // Animation complete.
  });
});

$("#m19").on("click", function () {
  $("#m20").show("slow", function () {
    // Animation complete.
  });
});
$("#m20").on("click", function () {
  $("#m21").show("slow", function () {
    // Animation complete.
  });
});
$("#m21").on("click", function () {
  $("#m22").show("slow", function () {
    // Animation complete.
  });
});
$("#m22").on("click", function () {
  $("#m23").show("slow", function () {
    // Animation complete.
  });
});
$("#m23").on("click", function () {
  $("#m24").show("slow", function () {
    // Animation complete.
  });
});
$("#m24").on("click", function () {
  $("#m25").show("slow", function () {
    // Animation complete.
  });
});
$("#m25").on("click", function () {
  $("#m26").show("slow", function () {
    // Animation complete.
  });
});
$("#m26").on("click", function () {
  $("#m27").show("slow", function () {
    // Animation complete.
  });
});
$("#m27").on("click", function () {
  $("#m28").show("slow", function () {
    // Animation complete.
  });
});
$("#m28").on("click", function () {
  $("#m29").show("slow", function () {
    // Animation complete.
  });
});
$("#m29").on("click", function () {
  $("#m30").show("slow", function () {
    // Animation complete.
  });
});
$("#m30").on("click", function () {
  $("#m31").show("slow", function () {
    // Animation complete.
  });
});
$("#m31").on("click", function () {
  $("#m32").show("slow", function () {
    // Animation complete.
  });
});
$("#m32").on("click", function () {
  $("#m33").show("slow", function () {
    // Animation complete.
  });
});
$("#m33").on("click", function () {
  $("#m34").show("slow", function () {
    // Animation complete.
  });
});
$("#m34").on("click", function () {
  $("#m35").show("slow", function () {
    // Animation complete.
  });
});
$("#m35").on("click", function () {
  $("#m36").show("slow", function () {
    // Animation complete.
  });
});
$("#m36").on("click", function () {
  $("#m37").show("slow", function () {
    // Animation complete.
  });
});
$("#m37").on("click", function () {
  $("#m38").show("slow", function () {
    // Animation complete.
  });
});
$("#m38").on("click", function () {
  $("#m39").show("slow", function () {
    // Animation complete.
  });
});
$("#m39").on("click", function () {
  $("#m40").show("slow", function () {
    // Animation complete.
  });
});
$("#m40").on("click", function () {
  $("#m41").show("slow", function () {
    // Animation complete.
  });
});
$("#m41").on("click", function () {
  $("#m42").show("slow", function () {
    // Animation complete.
  });
});

// Colorful figure (Background) head images toggle 
    const head1 = document.getElementById('colorful-figure-head1');
    const head2 = document.getElementById('colorful-figure-head2');

    // Toggle function
    function toggleHeads() {
        if (head1.style.display === 'none') {
            head1.style.display = 'block';
            head2.style.display = 'none';
        } else {
            head1.style.display = 'none';
            head2.style.display = 'block';
        }
    }

    // Start the toggle every second
    setInterval(toggleHeads, 1000);