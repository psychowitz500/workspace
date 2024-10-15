// Simulated database of gyms
const gyms = {
    bhopal: [
        { id: 1, name: "FitZone Bhopal", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80", description: "State-of-the-art equipment and expert trainers.", rating: 4.5, dailyPrice: 150, monthlyPrice: 2000 },
        { id: 2, name: "PowerHouse Gym", image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80", description: "24/7 access and personalized workout plans.", rating: 4.2, dailyPrice: 180, monthlyPrice: 2200 },
        { id: 3, name: "Flex Fitness", image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80", description: "Group classes and nutrition counseling available.", rating: 4.0, dailyPrice: 130, monthlyPrice: 1800 },
        { id: 4, name: "Iron Paradise", image: "https://images.unsplash.com/photo-1546483875-ad9014c88eba?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80", description: "Bodybuilding focused gym with competition training.", rating: 4.7, dailyPrice: 200, monthlyPrice: 2500 },
        { id: 5, name: "Zen Wellness Center", image: "https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80", description: "Yoga, pilates, and meditation classes offered.", rating: 4.3, dailyPrice: 160, monthlyPrice: 2100 }
    ],
    indore: [
        { id: 6, name: "Muscle Factory Indore", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80", description: "Bodybuilding and strength training focus.", rating: 4.6, dailyPrice: 190, monthlyPrice: 2300 },
        { id: 7, name: "Fit Republic", image: "https://images.unsplash.com/photo-1571388208497-71bedc66e932?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80", description: "Modern equipment and diverse class offerings.", rating: 4.3, dailyPrice: 170, monthlyPrice: 2100 },
        { id: 8, name: "Cardio King", image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80", description: "Specialized in cardiovascular fitness programs.", rating: 4.1, dailyPrice: 140, monthlyPrice: 1900 },
        { id: 9, name: "Yoga Bliss", image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80", description: "Tranquil environment for yoga and meditation.", rating: 4.7, dailyPrice: 180, monthlyPrice: 2200 },
        { id: 10, name: "Elite Fitness Club", image: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80", description: "Luxury gym with premium amenities.", rating: 4.9, dailyPrice: 250, monthlyPrice: 3000 }
    ],
    gwalior: [
        { id: 11, name: "Gwalior Fitness Hub", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80", description: "Comprehensive fitness center with latest equipment.", rating: 4.4, dailyPrice: 140, monthlyPrice: 1900 },
        { id: 12, name: "Strength & Soul", image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80", description: "Holistic approach to fitness and wellness.", rating: 4.6, dailyPrice: 160, monthlyPrice: 2100 },
        { id: 13, name: "CrossFit Gwalior", image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80", description: "High-intensity functional fitness training.", rating: 4.8, dailyPrice: 200, monthlyPrice: 2600 },
        { id: 14, name: "Zen Yoga Studio", image: "https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80", description: "Peaceful haven for yoga and meditation enthusiasts.", rating: 4.5, dailyPrice: 130, monthlyPrice: 1800 },
        { id: 15, name: "PowerLift Gym", image: "https://images.unsplash.com/photo-1546483875-ad9014c88eba?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80", description: "Specialized in powerlifting and strength sports.", rating: 4.7, dailyPrice: 180, monthlyPrice: 2400 }
    ],
    jabalpur: [
        { id: 16, name: "Fitness First Jabalpur", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80", description: "Premier fitness destination with expert trainers.", rating: 4.5, dailyPrice: 150, monthlyPrice: 2000 },
        { id: 17, name: "Muscle Mania", image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80", description: "Bodybuilding-focused gym with competition coaching.", rating: 4.3, dailyPrice: 170, monthlyPrice: 2200 },
        { id: 18, name: "Cardio Crush", image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80", description: "Specialized in cardiovascular and HIIT workouts.", rating: 4.2, dailyPrice: 140, monthlyPrice: 1900 },
        { id: 19, name: "Flex & Flow Yoga", image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80", description: "Variety of yoga styles for all levels.", rating: 4.6, dailyPrice: 130, monthlyPrice: 1800 },
        { id: 20, name: "Elite Sports Club", image: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=80", description: "Multi-sport facility with gym and fitness classes.", rating: 4.8, dailyPrice: 220, monthlyPrice: 2800 }
    ]
};

// List of major cities in India
const majorCities = [
    "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Kolkata", "Pune", "Ahmedabad", "Jaipur", "Lucknow",
    "Kanpur", "Nagpur", "Indore", "Thane", "Bhopal", "Visakhapatnam", "Pimpri-Chinchwad", "Patna", "Vadodara", "Ghaziabad",
    "Ludhiana", "Agra", "Nashik", "Faridabad", "Meerut", "Rajkot", "Kalyan-Dombivli", "Vasai-Virar", "Varanasi", "Srinagar",
    "Aurangabad", "Dhanbad", "Amritsar", "Navi Mumbai", "Allahabad", "Ranchi", "Howrah", "Coimbatore", "Jabalpur", "Gwalior",
    "Vijayawada", "Jodhpur", "Madurai", "Raipur", "Kota", "Guwahati", "Chandigarh", "Solapur", "Hubballi-Dharwad", "Tiruchirappalli"
];

document.addEventListener('DOMContentLoaded', () => {
    // Initialize GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

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
        const featuredGyms = [...gyms.bhopal, ...gyms.indore, ...gyms.gwalior, ...gyms.jabalpur].sort(() => 0.5 - Math.random()).slice(0, 5);

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

    // Booking functionality
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('book-btn')) {
            e.preventDefault();
            const gymId = e.target.getAttribute('data-gym-id');
            const gym = Object.values(gyms).flat().find(g => g.id === parseInt(gymId));
            
            if (gym) {
                const bookingModal = document.createElement('div');
                bookingModal.className = 'booking-modal';
                bookingModal.innerHTML = `
                    <div class="booking-content">
                        <h2>Book ${gym.name}</h2>
                        <p>Select your booking option:</p>
                        <button class="booking-option" data-type="daily">Daily Pass - ₹${gym.dailyPrice}</button>
                        <button class="booking-option" data-type="monthly">Monthly Pass - ₹${gym.monthlyPrice}</button>
                        <button class="close-modal">Close</button>
                    </div>
                `;
                document.body.appendChild(bookingModal);

                gsap.from('.booking-modal', {
                    duration: 0.3,
                    opacity: 0,
                    y: -50,
                    ease: 'power2.out'
                });

                bookingModal.querySelector('.close-modal').addEventListener('click', () => {
                    gsap.to('.booking-modal', {
                        duration: 0.3,
                        opacity: 0,
                        y: -50,
                        ease: 'power2.in',
                        onComplete: () => bookingModal.remove()
                    });
                });

                bookingModal.querySelectorAll('.booking-option').forEach(option => {
                    option.addEventListener('click', () => {
                        const bookingType = option.getAttribute('data-type');
                        alert(`You've booked a ${bookingType} pass for ${gym.name}. Enjoy your workout!`);
                        bookingModal.remove();
                    });
                });
            }
        }
    });

    // Parallax effect for hero section
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        const heroSection = document.querySelector('.hero');
        if (heroSection) {
            heroSection.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
        }
    });

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

    // City suggestions functionality
    const cityInput = document.getElementById('city-input');
    const citySuggestions = document.querySelector('.city-suggestions');

    if (cityInput && citySuggestions) {
        cityInput.addEventListener('input', () => {
            const inputValue = cityInput.value.toLowerCase();
            const filteredCities = majorCities.filter(city => 
                city.toLowerCase().startsWith(inputValue)
            );

            citySuggestions.innerHTML = '';
            if (inputValue && filteredCities.length > 0) {
                filteredCities.forEach(city => {
                    const li = document.createElement('li');
                    li.textContent = city;
                    li.addEventListener('click', () => {
                        cityInput.value = city;
                        citySuggestions.style.display = 'none';
                    });
                    citySuggestions.appendChild(li);
                });
                citySuggestions.style.display = 'block';
            } else {
                citySuggestions.style.display = 'none';
            }
        });

        document.addEventListener('click', (e) => {
            if (e.target !== cityInput) {
                citySuggestions.style.display = 'none';
            }
        });
    }

    // Search functionality
    const searchBtn = document.querySelector('.search-btn');
    const gymGrid = document.querySelector('.gym-grid');

    if (searchBtn && gymGrid) {
        searchBtn.addEventListener('click', () => {
            const selectedCity = cityInput.value.toLowerCase();
            const cityGyms = gyms[selectedCity] || [];

            gymGrid.innerHTML = '';
            cityGyms.forEach(gym => {
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
                gymGrid.appendChild(gymCard);
            });

            gsap.from('.gym-card', {
                duration: 0.5,
                opacity: 0,
                y: 50,
                stagger: 0.1,
                ease: 'power2.out'
            });
        });
    }
});