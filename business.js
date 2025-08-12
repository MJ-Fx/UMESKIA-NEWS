document.addEventListener('DOMContentLoaded', function() {
    // Initialize business category filtering
    const categoryBtns = document.querySelectorAll('.category-btn');
    const businessCards = document.querySelectorAll('.business-card');
    
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Update active button
            categoryBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const category = this.dataset.category;
            
            // Filter business cards
            businessCards.forEach(card => {
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
    
    // Initialize market movers tabs
    const moversTabs = document.querySelectorAll('.movers-tab');
    
    moversTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Update active tab
            moversTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Show corresponding content
            const tabToShow = this.dataset.tab;
            document.querySelectorAll('.movers-list').forEach(list => {
                list.style.display = 'none';
            });
            document.querySelector(`.${tabToShow}-list`).style.display = 'block';
        });
    });
    
    // Initialize company chart
    const companyChart = document.getElementById('companyChart');
    if (companyChart) {
        new Chart(companyChart, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
                datasets: [{
                    label: 'Stock Price',
                    data: [120, 145, 132, 158, 162],
                    borderColor: '#2e7d32',
                    backgroundColor: 'rgba(46, 125, 50, 0.1)',
                    borderWidth: 2,
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false
                    }
                }
            }
        });
    }
    
    // Load more business news
    const loadMoreBusiness = document.getElementById('loadMoreBusiness');
    if (loadMoreBusiness) {
        loadMoreBusiness.addEventListener('click', function() {
            this.textContent = 'Loading...';
            
            // Simulate AJAX loading
            setTimeout(() => {
                // In a real implementation, you would fetch from your server
                const newArticles = [
                    {
                        title: "Bank of America Reports Strong Q2 Earnings Despite Economic Headwinds",
                        excerpt: "The banking giant posted earnings of $0.85 per share, beating analyst estimates, as interest income offset higher loan loss provisions.",
                        category: "companies",
                        image: "../../images/articles/business-3.jpg",
                        author: "Jennifer Lee",
                        date: "12 hours ago"
                    },
                    // Add more articles as needed
                ];
                
                const gridContainer = document.querySelector('.business-grid .grid-container');
                
                newArticles.forEach(article => {
                    const articleHTML = `
                        <article class="news-card business-card" data-category="${article.category}">
                            <div class="card-image">
                                <img src="${article.image}" alt="Business News">
                                <span class="category-badge business">Business</span>
                                <div class="business-category-label ${article.category}">${article.category.charAt(0).toUpperCase() + article.category.slice(1)}</div>
                            </div>
                            <div class="card-content">
                                <h3><a href="../../article/business-article.html">${article.title}</a></h3>
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
                
                this.textContent = 'Load More Business News';
            }, 1000);
        });
    }
    
    // Sort business news
    const businessSort = document.getElementById('businessSort');
    if (businessSort) {
        businessSort.addEventListener('change', function() {
            // In a real implementation, this would re-sort or re-fetch articles
            alert(`Sorting by: ${this.value}. This would reorder articles in a real implementation.`);
        });
    }
    
    // Play podcast button
    const playButton = document.querySelector('.play-button');
    if (playButton) {
        playButton.addEventListener('click', function() {
            // In a real implementation, this would play the podcast
            alert('Podcast playback would start here in a real implementation.');
        });
    }
    
    // Animate elements when they come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.business-card, .sidebar-widget, .company-profile');
        
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
    document.querySelectorAll('.business-card, .sidebar-widget, .company-profile').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load
});