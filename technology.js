document.addEventListener('DOMContentLoaded', function() {
    // Initialize tech category filtering
    const categoryChips = document.querySelectorAll('.category-chip');
    const techCards = document.querySelectorAll('.tech-card');
    
    categoryChips.forEach(chip => {
        chip.addEventListener('click', function() {
            // Update active chip
            categoryChips.forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            
            const category = this.dataset.category;
            
            // Filter tech cards
            techCards.forEach(card => {
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
    
    // Initialize phone comparison chart
    const ctx = document.getElementById('phoneComparisonChart');
    if (ctx) {
        new Chart(ctx, {
            type: 'radar',
            data: {
                labels: ['Performance', 'Camera', 'Battery', 'Display', 'Price', 'Ecosystem'],
                datasets: [
                    {
                        label: 'iPhone 16 Pro',
                        data: [95, 90, 85, 92, 70, 98],
                        backgroundColor: 'rgba(0, 122, 255, 0.2)',
                        borderColor: 'rgba(0, 122, 255, 1)',
                        borderWidth: 2
                    },
                    {
                        label: 'Galaxy S24 Ultra',
                        data: [90, 95, 88, 95, 65, 80],
                        backgroundColor: 'rgba(0, 150, 136, 0.2)',
                        borderColor: 'rgba(0, 150, 136, 1)',
                        borderWidth: 2
                    },
                    {
                        label: 'Pixel 9 Pro',
                        data: [85, 92, 82, 88, 85, 75],
                        backgroundColor: 'rgba(66, 133, 244, 0.2)',
                        borderColor: 'rgba(66, 133, 244, 1)',
                        borderWidth: 2
                    }
                ]
            },
            options: {
                scales: {
                    r: {
                        angleLines: {
                            display: true
                        },
                        suggestedMin: 50,
                        suggestedMax: 100
                    }
                }
            }
        });
    }
    
    // Copy code functionality for developer corner
    const copyButtons = document.querySelectorAll('.copy-code');
    copyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const codeBlock = this.parentElement.querySelector('code');
            const range = document.createRange();
            range.selectNode(codeBlock);
            window.getSelection().removeAllRanges();
            window.getSelection().addRange(range);
            document.execCommand('copy');
            window.getSelection().removeAllRanges();
            
            // Show copied feedback
            const originalText = this.textContent;
            this.textContent = 'Copied!';
            setTimeout(() => {
                this.textContent = originalText;
            }, 2000);
        });
    });
    
    // Load more tech news
    const loadMoreTech = document.getElementById('loadMoreTech');
    if (loadMoreTech) {
        loadMoreTech.addEventListener('click', function() {
            this.textContent = 'Loading...';
            
            // Simulate AJAX loading
            setTimeout(() => {
                // In a real implementation, you would fetch from your server
                const newArticles = [
                    {
                        title: "Microsoft Unveils New AI-Powered Windows Features",
                        excerpt: "The upcoming Windows 12 update will include AI-assisted productivity tools and enhanced voice control.",
                        category: "software",
                        image: "../../images/articles/tech-3.jpg",
                        author: "Lisa Wong",
                        date: "12 hours ago"
                    },
                    // Add more articles as needed
                ];
                
                const gridContainer = document.querySelector('.tech-grid .grid-container');
                
                newArticles.forEach(article => {
                    const articleHTML = `
                        <article class="news-card tech-card" data-category="${article.category}">
                            <div class="card-image">
                                <img src="${article.image}" alt="Tech News">
                                <span class="category-badge technology">Technology</span>
                                <div class="tech-category-label ${article.category}">${article.category.charAt(0).toUpperCase() + article.category.slice(1)}</div>
                            </div>
                            <div class="card-content">
                                <h3><a href="../../article/tech-article.html">${article.title}</a></h3>
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
                
                this.textContent = 'Load More Tech News';
            }, 1000);
        });
    }
    
    // Sort tech news
    const techSort = document.getElementById('techSort');
    if (techSort) {
        techSort.addEventListener('change', function() {
            // In a real implementation, this would re-sort or re-fetch articles
            alert(`Sorting by: ${this.value}. This would reorder articles in a real implementation.`);
        });
    }
    
    // Animate elements when they come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.tech-card, .sidebar-widget, .event-card');
        
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
    document.querySelectorAll('.tech-card, .sidebar-widget, .event-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load
});