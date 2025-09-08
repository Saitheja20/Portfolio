var typed = new Typed('.element', {
    strings: ["Saitheja Komalla", "Web developer","Front-end developer", " Back-end Developer", "Full Stack Developer"],
    typeSpeed: 30,
    backSpeed: 30,
    loop:true
  });

function animateCounters() {
  const counters = document.querySelectorAll('.stat-number');
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-count'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const updateCounter = () => {
      current += increment;
      if (current < target) {
        counter.textContent = Math.floor(current);
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target;
      }
    };
    updateCounter();
  });
}
animateCounters();

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Animate each section
gsap.utils.toArray(".section").forEach(section => {
  gsap.fromTo(section,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    }
  );
});

// Typing animation
// const roles = ['Full Stack', 'Frontend', 'Backend', 'Web'];
// let roleIndex = 0;
// let charIndex = 0;
// let isDeleting = false;
// const typedTextElement = document.getElementById('typed-text');

// function typeText() {
//   const currentRole = roles[roleIndex];

//   if (isDeleting) {
//     typedTextElement.textContent = currentRole.substring(0, charIndex - 1);
//     charIndex--;
//   } else {
//     typedTextElement.textContent = currentRole.substring(0, charIndex + 1);
//     charIndex++;
//   }

//   if (!isDeleting && charIndex === currentRole.length) {
//     setTimeout(() => { isDeleting = true; }, 1500);
//   } else if (isDeleting && charIndex === 0) {
//     isDeleting = false;
//     roleIndex = (roleIndex + 1) % roles.length;
//   }

//   setTimeout(typeText, isDeleting ? 50 : 100);
// }

// Start typing animation
typeText();

// Image switching animation
// let showingFirst = true;
// function switchImages() {
//   const img1 = document.getElementById('profileImg1');
//   const img2 = document.getElementById('profileImg2');

//   if (showingFirst) {
//     img1.classList.add('fade-out');
//     setTimeout(() => {
//       img1.style.display = 'none';
//       img2.style.display = 'block';
//       setTimeout(() => img2.classList.remove('fade-out'), 50);
//     }, 250);
//   } else {
//     img2.classList.add('fade-out');
//     setTimeout(() => {
//       img2.style.display = 'none';
//       img1.style.display = 'block';
//       setTimeout(() => img1.classList.remove('fade-out'), 50);
//     }, 250);
//   }
//   showingFirst = !showingFirst;
// }

// // Switch images every 4 seconds
// setInterval(switchImages, 4000);

// // Animated counters
function animateCounters() {
  const counters = document.querySelectorAll('.stat-number');
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-count'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const updateCounter = () => {
      current += increment;
      if (current < target) {
        counter.textContent = Math.floor(current);
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target;
      }
    };
    updateCounter();
  });
}

// // Trigger counter animation when section is visible
// const aboutSection = document.getElementById('AboutMe');
// const observer = new IntersectionObserver((entries) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       setTimeout(animateCounters, 800);
//       observer.unobserve(entry.target);
//     }
//   });
// }, { threshold: 0.5 });

// observer.observe(aboutSection);
