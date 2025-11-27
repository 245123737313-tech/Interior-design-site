  // Mobile nav toggle
    const navToggle = document.getElementById("navToggle");
    const navMenu = document.getElementById("navMenu");

    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("open");
    });

    // Close menu on link click (mobile)
    navMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("open");
      });
    });

    // Form submit handler (front-end only)
    function handleFormSubmit(e) {
      e.preventDefault();
      const status = document.getElementById("formStatus");
      status.textContent = "Thanks for reaching out! We’ll contact you shortly.";
      e.target.reset();
    }

    // Set current year in footer
    document.getElementById("year").textContent = new Date().getFullYear();