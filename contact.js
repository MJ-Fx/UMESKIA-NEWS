document.addEventListener('DOMContentLoaded', function() {
    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const formData = new FormData(contactForm);
            const formValues = Object.fromEntries(formData.entries());
            
            // Simple validation
            if (!formValues.name || !formValues.email || !formValues.subject || !formValues.message) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Here you would typically send the form data to a server
            // For this example, we'll just log it and show a success message
            console.log('Form submitted:', formValues);
            
            // Show success message
            alert('Thank you for your message! We will get back to you soon.');
            
            // Reset form
            contactForm.reset();
        });
    }
    
    // FAQ accordion functionality
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
    
    // Initialize maps (this is a placeholder - you would use Google Maps API or similar)
    function initMaps() {
        const mapElements = document.querySelectorAll('.location-map');
        
        mapElements.forEach(mapElement => {
            // In a real implementation, you would initialize a map here
            // For this example, we'll just add a placeholder
            mapElement.innerHTML = '<div class="map-placeholder">Map of ' + mapElement.id.replace('-map', '') + ' location</div>';
            mapElement.style.backgroundColor = '#eee';
            mapElement.style.display = 'flex';
            mapElement.style.alignItems = 'center';
            mapElement.style.justifyContent = 'center';
            mapElement.style.color = '#666';
            mapElement.style.fontWeight = '500';
        });
    }
    
    // Call the map initialization function
    initMaps();
    
    // Animate elements when they come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.department-card, .location-card, .faq-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state for animation
    document.querySelectorAll('.department-card, .location-card, .faq-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load
});