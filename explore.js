document.addEventListener('DOMContentLoaded', () => {
    GymSeek.initScrollTrigger();

    // City suggestions functionality
    const cityInput = document.getElementById('city-input');
    const citySuggestions = document.querySelector('.city-suggestions');

    if (cityInput && citySuggestions) {
        cityInput.addEventListener('input', () => {
            const inputValue = cityInput.value.toLowerCase();
            const filteredCities = GymSeek.majorCities.filter(city => 
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
            const cityGyms = GymSeek.gyms[selectedCity] || [];

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