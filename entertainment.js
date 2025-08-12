document.addEventListener('DOMContentLoaded', function() {
    // Initialize entertainment category filtering
    const categoryBtns = document.querySelectorAll('.category-btn');
    const entertainmentCards = document.querySelectorAll('.entertainment-card');
    
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Update active button
            categoryBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const category = this.dataset.category;
            
            // Filter entertainment cards
            entertainmentCards.forEach(card => {
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
    });
    
    // Initialize trending topics filtering
    const trendingNavBtns = document.querySelectorAll('.trending-nav-btn');
    const trendingItems = document.querySelectorAll('.trending-item');
    
    trendingNavBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Update active button
            trendingNavBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const category = this.dataset.category;
            
            // Filter trending items
            trendingItems.forEach(item => {
                if (category === 'all' || item.dataset.category === category) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
    
    // Play video buttons
    const playButtons = document.querySelectorAll('.play-button');
    playButtons.forEach(button => {
        button.addEventListener('click', function() {
            // In a real implementation, this would play the video
            alert('Video playback would start here in a real implementation.');
        });
    });
    
    // Find tickets buttons
    const ticketButtons = document.querySelectorAll('.find-tickets');
    ticketButtons.forEach(button => {
        button.addEventListener('click', function() {
            // In a real implementation, this would link to ticket purchase
            alert('Ticket purchase would be handled here in a real implementation.');
        });
    });
    
    // Listen buttons for music
    const listenButtons = document.querySelectorAll('.listen-button');
    listenButtons.forEach(button => {
        button.addEventListener('click', function() {
            // In a real implementation, this would play the music
            alert('Music playback would start here in a real implementation.');
        });
    });
    
    // Load more entertainment news
    const loadMoreEntertainment = document.getElementById('loadMoreEntertainment');
    if (loadMoreEntertainment) {
        loadMoreEntertainment.addEventListener('click', function() {
            this.textContent = 'Loading...';
            
            // Simulate AJAX loading
            setTimeout(() => {
                // In a real implementation, you would fetch from your server
                const newArticles = [
                    {
                        title: "Zendaya to Star in New Luca Guadagnino Film",
                        excerpt: "The 'Euphoria' star will reunite with the 'Call Me By Your Name' director for a new romantic drama set in Paris.",
                        category: "movies",
                        image: "../../images/articles/entertainment-3.jpg",
                        author: "Jessica Brown",
                        date: "15 hours ago"
                    },
                    // Add more articles as needed
                ];
                
                const gridContainer = document.querySelector('.entertainment-grid .grid-container');
                
                newArticles.forEach(article => {
                    const articleHTML = `
                        <article class="news-card entertainment-card" data-category="${article.category}">
                            <div class="card-image">
                                <img src="${article.image}" alt="Entertainment News">
                                <span class="category-badge entertainment">Entertainment</span>
                                <div class="entertainment-category ${article.category}">${article.category.charAt(0).toUpperCase() + article.category.slice(1)}</div>
                            </div>
                            <div class="card-content">
                                <h3><a href="../../article/entertainment-article.html">${article.title}</a></h3>
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
                
                this.textContent = 'Load More Entertainment News';
            }, 1000);
        });
    }
    
    // Sort entertainment news
    const entertainmentSort = document.getElementById('entertainmentSort');
    if (entertainmentSort) {
        entertainmentSort.addEventListener('change', function() {
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
        const elements = document.querySelectorAll('.entertainment-card, .sidebar-widget, .movie-card, .celebrity-profile');
        
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
    document.querySelectorAll('.entertainment-card, .sidebar-widget, .movie-card, .celebrity-profile').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load
});