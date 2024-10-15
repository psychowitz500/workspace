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

// Booking functionality
function handleBooking(gymId) {
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

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('book-btn')) {
        e.preventDefault();
        const gymId = e.target.getAttribute('data-gym-id');
        handleBooking(gymId);
    }
});

// Parallax effect for hero section
function initParallax() {
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        const heroSection = document.querySelector('.hero');
        if (heroSection) {
            heroSection.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
        }
    });
}

// Initialize GSAP ScrollTrigger
function initScrollTrigger() {
    gsap.registerPlugin(ScrollTrigger);
}

// Export functions and data for use in other files
window.GymSeek = {
    gyms,
    majorCities,
    handleBooking,
    initParallax,
    initScrollTrigger
};