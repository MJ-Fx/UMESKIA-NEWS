document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    mobileMenuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        mainNav.classList.toggle('active');
    });
    
    // Search Toggle
    const searchToggle = document.querySelector('.search-toggle');
    const searchBar = document.querySelector('.search-bar');
    
    searchToggle.addEventListener('click', function() {
        searchBar.classList.toggle('active');
    });
    
    // View Options for News Grid
    const viewOptions = document.querySelectorAll('.view-options button');
    const gridContainer = document.querySelector('.grid-container');
    
    viewOptions.forEach(option => {
        option.addEventListener('click', function() {
            viewOptions.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            if (this.dataset.view === 'list') {
                gridContainer.classList.add('list-view');
            } else {
                gridContainer.classList.remove('list-view');
            }
        });
    });
    
    // Load More Button
    const loadMoreBtn = document.getElementById('loadMore');
    
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            // Simulate loading more articles
            this.textContent = 'Loading...';
            
            setTimeout(() => {
                // In a real implementation, you would fetch more articles from the server
                const newArticles = [
                    {
                        title: "New Economic Policy Announced",
                        excerpt: "The government has unveiled a new economic policy aimed at boosting small businesses.",
                        category: "business",
                        image: "images/articles/article-3.jpg",
                        author: "Michael Brown",
                        date: "8 hours ago"
                    },
                    // Add more articles as needed
                ];
                
                // Append new articles to the grid
                newArticles.forEach(article => {
                    const articleHTML = `
                        <article class="news-card">
                            <div class="card-image">
                                <img src="${article.image}" alt="News Image">
                                <span class="category-badge ${article.category}">${article.category.charAt(0).toUpperCase() + article.category.slice(1)}</span>
                            </div>
                            <div class="card-content">
                                <h3><a href="article/sample-article.html">${article.title}</a></h3>
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
                
                this.textContent = 'Load More News';
            }, 1000);
        });
    }
    
    // Newsletter Form Submission
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            
            // Simple validation
            if (emailInput.value && emailInput.value.includes('@')) {
                // In a real implementation, you would send this to your server
                alert('Thank you for subscribing to our newsletter!');
                emailInput.value = '';
            } else {
                alert('Please enter a valid email address.');
            }
        });
    }
    
    // Sticky Header on Scroll
    const header = document.querySelector('.main-header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            header.classList.remove('scroll-up');
            return;
        }
        
        if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
            header.classList.remove('scroll-up');
            header.classList.add('scroll-down');
        } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
            header.classList.remove('scroll-down');
            header.classList.add('scroll-up');
        }
        
        lastScroll = currentScroll;
    });
    
    // Prevent horizontal scrolling on mobile
    document.body.addEventListener('touchmove', function(e) {
        if (e.touches.length === 1) {
            const touch = e.touches[0];
            if (touch.clientX > window.innerWidth || touch.clientX < 0) {
                e.preventDefault();
            }
        }
    }, { passive: false });
    
    // Image lazy loading
    if ('IntersectionObserver' in window) {
        const lazyImages = document.querySelectorAll('img[data-src]');
        
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => imageObserver.observe(img));
    }
});