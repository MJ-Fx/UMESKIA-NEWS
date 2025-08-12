document.addEventListener('DOMContentLoaded', function() {
    // Initialize sport category filtering
    const sportNavBtns = document.querySelectorAll('.sport-nav-btn');
    const sportsCards = document.querySelectorAll('.sports-card');
    
    sportNavBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Update active button
            sportNavBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const sport = this.dataset.sport;
            
            // Filter sports cards
            sportsCards.forEach(card => {
                if (sport === 'all' || card.dataset.sport === sport) {
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
    
    // Initialize live scores sport filtering
    const sportBtns = document.querySelectorAll('.sport-btn');
    const gameCards = document.querySelectorAll('.game-card');
    
    sportBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Update active button
            sportBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const sport = this.dataset.sport;
            
            // Filter game cards
            gameCards.forEach(card => {
                if (sport === 'all' || card.dataset.sport === sport) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    
    // Initialize standings tabs
    const standingsTabs = document.querySelectorAll('.standings-tab');
    
    standingsTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Update active tab
            standingsTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // In a real implementation, this would switch between different league tables
            alert(`Showing ${this.dataset.league} standings. This would load the appropriate table in a real implementation.`);
        });
    });
    
    // Play video button
    const playButtons = document.querySelectorAll('.play-button');
    playButtons.forEach(button => {
        button.addEventListener('click', function() {
            // In a real implementation, this would play the video
            alert('Video playback would start here in a real implementation.');
        });
    });
    
    // Load more sports news
    const loadMoreSports = document.getElementById('loadMoreSports');
    if (loadMoreSports) {
        loadMoreSports.addEventListener('click', function() {
            this.textContent = 'Loading...';
            
            // Simulate AJAX loading
            setTimeout(() => {
                // In a real implementation, you would fetch from your server
                const newArticles = [
                    {
                        title: "Warriors Trade Jordan Poole to Wizards for Chris Paul",
                        excerpt: "Golden State makes shocking move to acquire veteran point guard Chris Paul in exchange for young star Jordan Poole.",
                        sport: "basketball",
                        image: "../../images/articles/sports-3.jpg",
                        author: "Alex Johnson",
                        date: "14 hours ago"
                    },
                    // Add more articles as needed
                ];
                
                const gridContainer = document.querySelector('.sports-grid .grid-container');
                
                newArticles.forEach(article => {
                    const articleHTML = `
                        <article class="news-card sports-card" data-sport="${article.sport}">
                            <div class="card-image">
                                <img src="${article.image}" alt="Sports News">
                                <span class="category-badge sports">Sports</span>
                                <div class="sport-label ${article.sport}">${article.sport.charAt(0).toUpperCase() + article.sport.slice(1)}</div>
                            </div>
                            <div class="card-content">
                                <h3><a href="../../article/sports-article.html">${article.title}</a></h3>
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
                
                this.textContent = 'Load More Sports News';
            }, 1000);
        });
    }
    
    // Sort sports news
    const sportsSort = document.getElementById('sportsSort');
    if (sportsSort) {
        sportsSort.addEventListener('change', function() {
            // In a real implementation, this would re-sort or re-fetch articles
            alert(`Sorting by: ${this.value}. This would reorder articles in a real implementation.`);
        });
    }
    
    // Vote in poll
    const voteButton = document.querySelector('.vote-button');
    if (voteButton) {
        voteButton.addEventListener('click', function() {
            // In a real implementation, this would submit the vote
            alert('Vote would be submitted here in a real implementation.');
        });
    }
    
    // Animate elements when they come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.sports-card, .sidebar-widget, .event-card, .player-card');
        
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
    document.querySelectorAll('.sports-card, .sidebar-widget, .event-card, .player-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load
});