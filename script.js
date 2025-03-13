const white = document.querySelector(".white");
const white2 = document.querySelector(".i2");
const black = document.querySelector(".i4");
const ptani = document.querySelector(".i3");

document.addEventListener("click", function (event) {
  // Reset all elements
  gsap.set([".first", ".second", ".three", ".four"], { clearProps: "all", opacity: 0 });

  let tl = gsap.timeline(); // Create a new timeline every time

  if (event.target.classList.contains("white")) {
      console.log("White button clicked");
      tl.to(".second", { opacity: 1 }, 0)
        .to(".first", { y: 590, opacity: 0, duration: 1, ease: "expoScale(0.5,7,none)" }, 0)
        .from(".second", { y: -590, duration: 1, ease: "expoScale(0.5,7,none)" }, 0);
        tl.from(".logo", { y: 40, opacity: 0, duration: 0.3 })
        .from(".list>span", { y: 40, opacity: 0, stagger: 0.3 }, 1)
        .from(".icons>i", { x: 40, opacity: 0, stagger: 0.1 }, 1)
        .from(".mid>p", { duration: 2.5, opacity: 0, ease: "elastic.out(1,0.3)", y: -230 }, 2)
        .from(".mid>img", { duration: 2.5, opacity: 0, ease: "bounce.out", y: 230 }, 2)
        .from(".left", { height: 0, opacity: 0, y: 100 }, 3)
        .from(".in-r>p", { height: 0, opacity: 0, y: 100 }, 3)
        .from(".in-r>button", { height: 0, opacity: 0, y: 40 }, 3)
        .from(".u-r>p", { height: 0, opacity: 0, y: 40 }, 3)
        .from(".i", { height: 0, opacity: 0, y: 40 }, 3);
  }

  if (event.target.classList.contains("i2")) {
      console.log("i2 button clicked");
      tl.to(".first", { opacity: 1 }, 0)
        .from(".first", { y: -590, duration: 1, ease: "expoScale(0.5,7,none)" }, 0);
        tl.from(".logo", { y: 40, opacity: 0, duration: 0.3 })
        .from(".list>span", { y: 40, opacity: 0, stagger: 0.3 }, 1)
        .from(".icons>i", { x: 40, opacity: 0, stagger: 0.1 }, 1)
        .from(".mid>p", { duration: 2.5, opacity: 0, ease: "elastic.out(1,0.3)", y: -230 }, 2)
        .from(".mid>img", { duration: 2.5, opacity: 0, ease: "bounce.out", y: 230 }, 2)
        .from(".left", { height: 0, opacity: 0, y: 100 }, 3)
        .from(".in-r>p", { height: 0, opacity: 0, y: 100 }, 3)
        .from(".in-r>button", { height: 0, opacity: 0, y: 40 }, 3)
        .from(".u-r>p", { height: 0, opacity: 0, y: 40 }, 3)
        .from(".i", { height: 0, opacity: 0, y: 40 }, 3);
  }

  if (event.target.classList.contains("i4")) {
      console.log("Black button clicked");
      tl.to(".three", { opacity: 1 }, 0)
        .from(".three", { y: -590, duration: 1, ease: "expoScale(0.5,7,none)" }, 0);
        tl.from(".logo", { y: 40, opacity: 0, duration: 0.3 })
        .from(".list>span", { y: 40, opacity: 0, stagger: 0.3 }, 1)
        .from(".icons>i", { x: 40, opacity: 0, stagger: 0.1 }, 1)
        .from(".mid>p", { duration: 2.5, opacity: 0, ease: "elastic.out(1,0.3)", y: -230 }, 2)
        .from(".mid>img", { duration: 2.5, opacity: 0, ease: "bounce.out", y: 230 }, 2)
        .from(".left", { height: 0, opacity: 0, y: 100 }, 3)
        .from(".in-r>p", { height: 0, opacity: 0, y: 100 }, 3)
        .from(".in-r>button", { height: 0, opacity: 0, y: 40 }, 3)
        .from(".u-r>p", { height: 0, opacity: 0, y: 40 }, 3)
        .from(".i", { height: 0, opacity: 0, y: 40 }, 3);
  }

  if (event.target.classList.contains("i3")) {
      console.log("Grey button clicked");
      tl.to(".four", { opacity: 1 }, 0)
        .from(".four", { y: -590, duration: 1, ease: "expoScale(0.5,7,none)" }, 0);
        tl.from(".logo", { y: 40, opacity: 0, duration: 0.3 })
        .from(".list>span", { y: 40, opacity: 0, stagger: 0.3 }, 1)
        .from(".icons>i", { x: 40, opacity: 0, stagger: 0.1 }, 1)
        .from(".mid>p", { duration: 2.5, opacity: 0, ease: "elastic.out(1,0.3)", y: -230 }, 2)
        .from(".mid>img", { duration: 2.5, opacity: 0, ease: "bounce.out", y: 230 }, 2)
        .from(".left", { height: 0, opacity: 0, y: 100 }, 3)
        .from(".in-r>p", { height: 0, opacity: 0, y: 100 }, 3)
        .from(".in-r>button", { height: 0, opacity: 0, y: 40 }, 3)
        .from(".u-r>p", { height: 0, opacity: 0, y: 40 }, 3)
        .from(".i", { height: 0, opacity: 0, y: 40 }, 3);
  }})