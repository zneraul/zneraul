document.addEventListener('DOMContentLoaded', () => {
    const interactiveElements = document.querySelectorAll('a, .cta, .brand h1');
    interactiveElements.forEach(el => {
        el.classList.add('interactive-element');
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.section-title, p, img').forEach(el => {
        observer.observe(el);
    });
});

document.querySelector('.stickman').addEventListener('mouseover', (e) => {
    e.target.classList.add('animated');
});

document.querySelector('.stickman').addEventListener('mouseout', (e) => {
    e.target.classList.remove('animated');
});

document.addEventListener('DOMContentLoaded', () => {
    const typedText = document.querySelector('.typed-text');
    const text = typedText.textContent;
    typedText.textContent = '';
    
    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            typedText.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }
    typeWriter();

    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => {
        const target = parseInt(stat.dataset.target);
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current++;
                stat.textContent = current;
                setTimeout(updateCounter, 100);
            }
        };
        
        updateCounter();
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');
    const navBar = document.querySelector('.nav-bar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navBar.classList.add('header-scrolled');
        } else {
            navBar.classList.remove('header-scrolled');
        }
    });

    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('.nav-list');

    if (hamburger && navList) {
        hamburger.addEventListener('click', () => {
            navList.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    document.addEventListener('click', (event) => {
        const isClickInsideNav = navList.contains(event.target);
        const isClickHamburger = hamburger.contains(event.target);

        if (!isClickInsideNav && !isClickHamburger && navList.classList.contains('active')) {
            navList.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
});

  function setupSocialIcons() {
    const socialIcons = document.querySelectorAll('.social-icon');
    
    socialIcons.forEach(icon => {
      icon.addEventListener('mouseenter', () => {
        icon.style.transform = 'scale(1.2) rotate(5deg)';
      });
      
      icon.addEventListener('mouseleave', () => {
        icon.style.transform = 'scale(1) rotate(0)';
      });
    });
  }

  function createHeroParticles() {
    const hero = document.getElementById('hero');
    const particlesCount = 50;

    for (let i = 0; i < particlesCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('hero-particle');
        
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        particle.style.width = `${Math.random() * 3}px`;
        particle.style.height = particle.style.width;
        
        hero.appendChild(particle);
    }
}

const particleStyle = document.createElement('style');
particleStyle.innerHTML = `
.hero-particle {
    position: absolute;
    background: rgba(69, 243, 255, 0.3);
    border-radius: 50%;
    z-index: 3;
    pointer-events: none;
    animation: 
        floatParticle 10s infinite alternate,
        pulse 3s infinite alternate;
}

@keyframes floatParticle {
    0% { transform: translateY(0) scale(0.5); }
    100% { transform: translateY(-100vh) scale(1); }
}

@keyframes pulse {
    0% { opacity: 0.3; }
    100% { opacity: 0.8; }
}
`;

document.head.appendChild(particleStyle);

document.addEventListener('DOMContentLoaded', createHeroParticles);
  
  document.addEventListener('DOMContentLoaded', () => {
    animateCounters();
    setupSocialIcons();
  });

  function setupHelloBadge() {
    const badge = document.querySelector('.hello-badge');
    
    function createParticle() {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      badge.appendChild(particle);
  
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
  
      particle.animate([
        { transform: 'scale(0)', opacity: 0 },
        { transform: 'scale(1)', opacity: 1 },
        { transform: 'scale(2)', opacity: 0 }
      ], {
        duration: 1000,
        easing: 'cubic-bezier(0.25, 0.1, 0.25, 1)'
      });
  
      setTimeout(() => {
        particle.remove();
      }, 1000);
    }
  
    badge.addEventListener('mouseenter', () => {
      for (let i = 0; i < 5; i++) {
        setTimeout(createParticle, i * 100);
      }
    });
  }
  
  document.addEventListener('DOMContentLoaded', setupHelloBadge);

  document.addEventListener('DOMContentLoaded', () => {
    const typedTextElement = document.querySelector('.typed-text');
    const subtitles = [
        "Innovative Solutions for Health and Wellness",
        "Transforming Digital Healthcare Experiences",
        "Empowering Wellness Through Technology"
    ];
    let currentSubtitle = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentText = subtitles[currentSubtitle];
        
        if (isDeleting) {
            typedTextElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typedTextElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = isDeleting ? 50 : 100;

        if (!isDeleting && charIndex === currentText.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            currentSubtitle = (currentSubtitle + 1) % subtitles.length;
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }

    type();
});

document.addEventListener('DOMContentLoaded', function() {
    const projectItems = document.querySelectorAll('.project-item');

    function checkScroll() {
        projectItems.forEach(item => {
            const itemPosition = item.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;

            if (itemPosition < screenPosition) {
                item.classList.add('fade-in');
            }
        });
    }

    projectItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.15)';
        });

        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
        });
    });

    window.addEventListener('scroll', checkScroll);
    window.addEventListener('load', checkScroll);
});
document.addEventListener('DOMContentLoaded', function() {
    const sectionTitle = document.querySelector('#mission-vision-goals .section-title');
    if (sectionTitle) {
        const text = sectionTitle.textContent;
        sectionTitle.textContent = '';
        
        let i = 0;
        function typeWriter() {
            if (i < text.length) {
                sectionTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        }
        
        typeWriter();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('.contact-form input, .contact-form textarea');

    inputs.forEach(input => {
        // Change color to blue while typing
        input.addEventListener('input', () => {
            input.style.color = 'blue'; // Change to blue while typing
        });

        // Change color to blue when focused
        input.addEventListener('focus', () => {
            input.style.color = 'blue'; // Change to blue when focused
        });

        // Reset color to black if input is empty on blur
        input.addEventListener('blur', () => {
            if (input.value === '') {
                input.style.color = 'black'; // Reset to black if empty
            }
        });
    });
});