// main.js - JavaScript for LeetCode Flashcards HTML version

/**
 * Toggle card flip animation
 * @param {string} cardId - The ID of the card to flip
 */
function toggleCard(cardId) {
    document.getElementById(cardId).classList.toggle('flipped');
}

/**
 * Show detailed view of a card
 * @param {string} cardId - The ID of the card to show details for
 */
function showCardDetails(cardId) {
    // Hide all flashcards
    document.getElementById('flashcards-container').style.display = 'none';
    
    // Show card details section
    document.getElementById('card-details-container').style.display = 'block';
    
    // Show the specific card detail
    document.querySelectorAll('.card-detail').forEach(el => {
        el.style.display = 'none';
    });
    document.getElementById('detail-' + cardId).style.display = 'block';
    
    // Scroll to top
    window.scrollTo(0, 0);
}

/**
 * Return to cards list from detailed view
 */
function backToCards() {
    // Show all flashcards
    document.getElementById('flashcards-container').style.display = 'block';
    
    // Hide card details section
    document.getElementById('card-details-container').style.display = 'none';
}

/**
 * Initialize on page load
 */
document.addEventListener('DOMContentLoaded', function() {
    // Optional: Add keyboard navigation
    document.addEventListener('keydown', function(event) {
        // Escape key to go back to cards
        if (event.key === 'Escape') {
            if (document.getElementById('card-details-container').style.display === 'block') {
                backToCards();
            }
        }
    });
    
    // Optional: Enable card flip on enter key for accessibility
    document.querySelectorAll('.card').forEach(card => {
        card.setAttribute('tabindex', '0');
        card.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                this.classList.toggle('flipped');
            }
        });
    });
});

/**
 * Search functionality for topics (optional)
 * @param {string} searchQuery - The search query text
 */
function searchTopics(searchQuery) {
    const query = searchQuery.toLowerCase();
    const topicCards = document.querySelectorAll('.topic-card');
    
    topicCards.forEach(card => {
        const topicName = card.querySelector('h3').textContent.toLowerCase();
        if (topicName.includes(query)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

/**
 * Search functionality for flashcards (optional)
 * @param {string} searchQuery - The search query text
 */
function searchFlashcards(searchQuery) {
    const query = searchQuery.toLowerCase();
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const question = card.querySelector('.flex-grow p').textContent.toLowerCase();
        
        if (title.includes(query) || question.includes(query)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

/**
 * Handle printing the flashcards
 */
function printFlashcards() {
    // Ensure all cards are in front-facing position before printing
    document.querySelectorAll('.card.flipped').forEach(card => {
        card.classList.remove('flipped');
    });
    
    window.print();
}
