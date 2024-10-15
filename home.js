document.addEventListener('DOMContentLoaded', () => {
    GymSeek.initScrollTrigger();
    GymSeek.initParallax();

    // Animate hero section
    gsap.from('.hero-content', {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power3.out'
    });

    // Animate featured gyms
    const gymSlider = document.querySelector('.gym-slider');
    if (gymSlider) {
        const featuredGyms = Object.values(GymSeek.gyms).flat().sort(() => 0.5 - Math.random()).slice(0, 5);

        featuredGyms.forEach(gym => {
            const gymCard = document.createElement('div');
            gymCard.className = 'gym-card';
            gymCard.innerHTML = `
                <img src="${gym.image}" alt="${gym.name}">
                <div class="gym-card-content">
                    <h3>${gym.name}</h3>
                    <p>${gym.description}</p>
                    <p class="price">Daily: ₹${gym.dailyPrice} | Monthly: ₹${gym.monthlyPrice}</p>
                    <a href="#" class="book-btn" data-gym-id="${gym.id}">Book Now</a>
                </div>
            `;
            gymSlider.appendChild(gymCard);
        });

        gsap.from('.gym-card', {
            duration: 0.5,
            opacity: 0,
            y: 50,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.featured-gyms',
                start: 'top 80%'
            }
        });
    }

    // Animate testimonials
    const testimonialSlider = document.querySelector('.testimonial-slider');
    if (testimonialSlider) {
        const testimonials = [
            { name: "Priya Sharma", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80", text: "Gym Seek has transformed my fitness journey. I love the variety of gyms I can access!" },
            { name: "Rahul Verma", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80", text: "The convenience of booking through Gym Seek is unmatched. Highly recommended!" },
            { name: "Anita Patel", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80", text: "I've discovered amazing gyms in my city thanks to Gym Seek. It's been a game-changer!" }
        ];

        testimonials.forEach(testimonial => {
            const testimonialCard = document.createElement('div');
            testimonialCard.className = 'testimonial-card';
            testimonialCard.innerHTML = `
                <img src="${testimonial.image}" alt="${testimonial.name}">
                <div class="testimonial-card-content">
                    <p>"${testimonial.text}"</p>
                    <h3>${testimonial.name}</h3>
                </div>
            `;
            testimonialSlider.appendChild(testimonialCard);
        });

        gsap.from('.testimonial-card', {
            duration: 0.5,
            opacity: 0,
            y: 50,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.testimonials',
                start: 'top 80%'
            }
        });
    }

    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message. We will get back to you soon!');
            contactForm.reset();
        });
    }

    // Animate elements on scroll
    gsap.utils.toArray('.featured-gyms, .testimonials, .contact').forEach(section => {
        gsap.from(section, {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            }
        });
    });
});