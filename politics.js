document.addEventListener('DOMContentLoaded', function() {
    // Set up election countdown timer
    function updateCountdown() {
        // Set the date for the next general election (November 5, 2024)
        const electionDate = new Date('November 5, 2024 00:00:00').getTime();
        const now = new Date().getTime();
        const distance = electionDate - now;
        
        // Calculate days, hours, minutes
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        
        // Display the result
        document.querySelector('.days').textContent = days.toString().padStart(2, '0');
        document.querySelector('.hours').textContent = hours.toString().padStart(2, '0');
        document.querySelector('.minutes').textContent = minutes.toString().padStart(2, '0');
    }
    
    // Update countdown immediately and then every minute
    updateCountdown();
    setInterval(updateCountdown, 60000);
    
    // Party tab filtering
    const partyTabs = document.querySelectorAll('.party-tab');
    const politicalCards = document.querySelectorAll('.political-card');
    
    partyTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Update active tab
            partyTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            const party = this.dataset.party;
            
            // Filter cards
            politicalCards.forEach(card => {
                if (party === 'all' || card.dataset.party === party) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
    
    // Category filtering
    const politicalFilter = document.getElementById('politicalFilter');
    
    if (politicalFilter) {
        politicalFilter.addEventListener('change', function() {
            const category = this.value;
            
            politicalCards.forEach(card => {
                if (category === 'all' || card.dataset.category === category) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    }
    
    // Debate vote buttons
    const proVoteBtn = document.querySelector('.pro-vote');
    const conVoteBtn = document.querySelector('.con-vote');
    
    if (proVoteBtn && conVoteBtn) {
        proVoteBtn.addEventListener('click', function() {
            // In a real implementation, this would send data to your server
            alert('Thank you for voting! Your support for this position has been recorded.');
        });
        
        conVoteBtn.addEventListener('click', function() {
            // In a real implementation, this would send data to your server
            alert('Thank you for voting! Your opposition to this position has been recorded.');
        });
    }
    
    // Load more political news
    const loadMorePolitics = document.getElementById('loadMorePolitics');
    
    if (loadMorePolitics) {
        loadMorePolitics.addEventListener('click', function() {
            this.textContent = 'Loading...';
            
            // Simulate AJAX loading
            setTimeout(() => {
                // In a real implementation, you would fetch from your server
                const newArticles = [
                    {
                        title: "State Legislature Passes Controversial Education Bill",
                        excerpt: "The bill, which restricts certain topics in public school curricula, passed along party lines after heated debate.",
                        category: "policy",
                        party: "republican",
                        image: "../../images/articles/politics-3.jpg",
                        author: "Thomas Wright",
                        date: "12 hours ago"
                    },
                    // Add more articles as needed
                ];
                
                const gridContainer = document.querySelector('.political-grid .grid-container');
                
                newArticles.forEach(article => {
                    const articleHTML = `
                        <article class="news-card political-card" data-party="${article.party}" data-category="${article.category}">
                            <div class="card-image">
                                <img src="${article.image}" alt="Political News">
                                <span class="category-badge politics">Politics</span>
                                <div class="party-affiliation ${article.party}">${article.party.charAt(0).toUpperCase() + article.party.slice(1)}</div>
                            </div>
                            <div class="card-content">
                                <h3><a href="../../article/political-article.html">${article.title}</a></h3>
                                <p class="excerpt">${article.excerpt}</p>
                                <div class="article-meta">
                                    <span class="author">By ${article.author}</span>
                                    <span class="date">${article.date}</span>
                                </div>
                            </div>
                        </article>
                    `;
                    
                    gridContainer.insertAdjacentHTML('beforeend', articleHTML);
                });
                
                this.textContent = 'Load More Political News';
            }, 1000);
        });
    }
    
    // Animate elements when they come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.news-card, .sidebar-widget, .debate-side');
        
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
    document.querySelectorAll('.news-card, .sidebar-widget, .debate-side').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load
});