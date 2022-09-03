function show() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();

}
show();


var flag = 0;
var aro = document.querySelector("i");
var side = document.querySelector(".sidebaar");
var menu = document.querySelector(".menu");
menu.addEventListener("click", function () {
  if (flag === 0) {
    side.style.transform = `translateX(0vw)`;
    menu.innerHTML = `<i class="ri-close-line"></i>`
    gsap.from(".sidecontent>h1", {
      opacity: 0,
      duration: .2,
      onStart: function () {
        $('.sidecontent>h1').textillate({ in: { effect: 'fadeInUp' } });
      }
    })
    flag = 1;
  }
  else {
    side.style.transform = `translateX(-100vw) `;
    menu.innerHTML = `<i class="ri-menu-5-line"></i>` 
    flag = 0;
  }
})
gsap.from(".textcontent>h1", {
  opacity: 0,
  duration: 1,
  onStart: function () {
    $('.textcontent>h1').textillate({ in: { effect: 'fadeInUp' } });
  }
})
gsap.from(".page2text>h3", {
  scrollTrigger: {
    trigger: ".page2text",
    scroller: ".main",
    start: "top 70%",
    end: "bottom 10%",
    scrub:2
  },
  opacity: 0,
  onStart: function () {
    $('.page2text>h3').textillate({ in: { effect: 'fadeInUp' } });
  }
})
gsap.from(".page2text2>h3 ,.arrow", {
  scrollTrigger: {
    trigger: ".page2text2",
    scroller: ".main",
    start: "top 90%",
    end: "bottom 10%",
    scrub: true
  },
  opacity: 0,
  duration:5,
  onStart: function () {
    $('.page2text2>h3').textillate({ in: { effect: 'fadeInUp' } });
  }
})
gsap.from("#page2img1", {
  opacity: 0,
  y:100,
  rotateX: "60deg",
  duration: .3,
  scrollTrigger: {
    trigger: "#page2img1",
    scroller: ".main",
    start: "top 80%",
    end: "bottom 20%",
    scrub: 4
  },
});
gsap.from("#page2img2", {
  opacity: 0,
  y: 5,
  rotateX: "60deg",
  duration: 5,

  scrollTrigger: {
    trigger: "#page2img2",
    scroller: ".main",
    start: "top 80%",
    end: "bottom 20%",
    scrub: 3
  },
});
gsap.from("#page2img3", {
  opacity: 0,
  y: 5,
  rotateX: "60deg",
  duration: .5,

  scrollTrigger: {
    trigger: "#page2img3",
    scroller: ".main",
    start: "top 80%",
    end: "bottom 20%",
    scrub: 3
  },
});
gsap.from("#page2img4", {
  opacity: 0,
  y: 100,
  rotateX: "60deg",
  duration: .5,

  scrollTrigger: {
    trigger: "#page2img4",
    scroll: ".main",
    start: "top 80%",
    end: "bottom 90%",
    scrub: 3
  },
});