document.addEventListener('DOMContentLoaded', () => {
    function setupInteractiveElements() {
        const highlightItems = document.querySelectorAll('.highlight-item');
        const challengeItems = document.querySelectorAll('.challenge-item');
        const actionCards = document.querySelectorAll('.action-card');
        const targetCards = document.querySelectorAll('.target-card');

        highlightItems.forEach(item => {
            const icon = item.querySelector('.highlight-icon');
            const content = item.querySelector('.highlight-content');

            item.addEventListener('mouseenter', () => {
                item.style.transform = 'perspective(1000px) rotateX(-5deg) rotateY(5deg) scale(1.05)';
                
                if (icon) {
                    icon.style.transform = 'rotate(360deg) scale(1.1)';
                    icon.style.boxShadow = '0 15px 25px rgba(0,0,0,0.2)';
                }

                if (content) {
                    content.style.transform = 'translateX(10px)';
                }
            });

            item.addEventListener('mouseleave', () => {
                item.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
                
                if (icon) {
                    icon.style.transform = 'rotate(0) scale(1)';
                    icon.style.boxShadow = 'none';
                }

                if (content) {
                    content.style.transform = 'translateX(0)';
                }
            });
        });

        challengeItems.forEach(item => {
            const icon = item.querySelector('.challenge-icon');
            
            item.addEventListener('mouseenter', () => {
                item.style.transform = 'rotate(3deg) scale(1.05)';
                
                if (icon) {
                    icon.style.transform = 'scale(1.2) rotate(15deg)';
                    icon.style.color = '#2ecc71';
                }
            });

            item.addEventListener('mouseleave', () => {
                item.style.transform = 'rotate(0) scale(1)';
                
                if (icon) {
                    icon.style.transform = 'scale(1) rotate(0)';
                    icon.style.color = '#3498db';
                }
            });
        });

        actionCards.forEach(card => {
            const actionButton = card.querySelector('.action-button');
            const actionIcon = card.querySelector('.action-icon');
            
            card.addEventListener('mouseenter', () => {
                card.style.transform = `
                    perspective(1000px) 
                    rotateX(-5deg) 
                    rotateY(5deg) 
                    scale(1.05)
                `;
                
                if (actionIcon) {
                    actionIcon.style.transform = 'rotate(360deg) scale(1.2)';
                }
                
                if (actionButton) {
                    actionButton.style.transform = 'scale(1.05)';
                }
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
                
                if (actionIcon) {
                    actionIcon.style.transform = 'rotate(0) scale(1)';
                }

                if (actionButton) {
                    actionButton.style.transform = 'scale(1)';
                }
            });
        });

        targetCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'scale(1.05) rotate(2deg)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'scale(1) rotate(0deg)';
            });
        });
    }

    function setupNavigation() {
        const nav = document.getElementById('floating-navigation');
        const mobileToggle = document.querySelector('.mobile-menu-toggle');
        const navLinks = document.querySelector('.floating-nav-links');

        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        });

        if (mobileToggle && navLinks) {
            mobileToggle.addEventListener('click', () => {
                navLinks.classList.toggle('active');
                mobileToggle.classList.toggle('active');
            });

            document.querySelectorAll('.floating-nav-links a').forEach(link => {
                link.addEventListener('click', () => {
                    navLinks.classList.remove('active');
                    mobileToggle.classList.remove('active');
                });
            });
        }
    }

    function setupScrollAnimations() {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    
                    const elements = entry.target.querySelectorAll('.highlight-item, .challenge-item');
                    elements.forEach((el, index) => {
                        el.style.animation = `fadeInUp 0.8s ease ${index * 0.2}s forwards`;
                    });
                }
            });
        }, observerOptions);

        const globalHealthSection = document.getElementById('global-health');
        if (globalHealthSection) {
            observer.observe(globalHealthSection);
        }
    }

    function setupPerformanceOptimizations() {
        const images = document.querySelectorAll('img[loading="lazy"]');
        if ('loading' in HTMLImageElement.prototype) {
            images.forEach(img => {
                img.setAttribute('loading', 'lazy');
            });
        } else {
            const script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/npm/lazysizes@5.3.2/lazysizes.min.js';
            document.body.appendChild(script);
        }
    }

    function init() {
        setupInteractiveElements();
        setupNavigation();
        setupScrollAnimations();
        setupPerformanceOptimizations();
    }

    init();

    if (!window.IntersectionObserver) {
        const sections = document.querySelectorAll('#global-health');
        sections.forEach(section => {
            section.classList.add('visible');
        });
    }
});