


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Initialize AOS
  AOS.init({
    duration: 1200, // Animation duration in milliseconds
    once: true      // Animation will only run once
  });
  

  // Counter Animation
const counters = document.querySelectorAll('.counter');
const speed = 300; // Adjust speed of counting

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const increment = target / speed;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCount, 10);
    } else {
      counter.innerText = target;
    }
  };

  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      updateCount();
      observer.disconnect(); // Trigger animation only once
    }
  });

  observer.observe(counter);
});


