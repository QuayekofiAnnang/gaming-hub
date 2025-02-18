// You can add interactivity here
console.log("Welcome to my gaming profile!");

let currentIndex = 1;
let isTransitioning = false;

// Array of video IDs and their details
const gameVideos = [
    {
        youtubeId: 'o3V-GvvzjE4', // Mobile Legends
        title: 'Mobile Legends'
    },
    {
        youtubeId: 'vzHrjOMfHPY', // Dota 2 The International
        title: 'Dota 2'
    },
    {
        youtubeId: 'aR-KAldshAE', // League of Legends Worlds
        title: 'League of Legends'
    },
    {
        youtubeId: 'cTLJwhU5GHk', // Valorant Champions
        title: 'Valorant'
    },
    {
        youtubeId: 'XCNQgqR5mJ0', // PUBG Mobile
        title: 'PUBG Mobile'
    }
];

let currentVideoIndex = 0;
const videoContainer = document.getElementById('videoContainer');

function createVideoElement(videoId) {
    return `
        <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=0&playlist=${videoId}&controls=0&showinfo=0&start=0" 
            frameborder="0" 
            allow="autoplay; encrypted-media" 
            allowfullscreen
        ></iframe>
    `;
}

function switchVideo() {
    // Remove current video
    videoContainer.innerHTML = '';
    
    // Add new video
    videoContainer.innerHTML = createVideoElement(gameVideos[currentVideoIndex].youtubeId);
    
    // Update index for next video
    currentVideoIndex = (currentVideoIndex + 1) % gameVideos.length;
}

// Initial video load
switchVideo();

// Switch video every 15 seconds
setInterval(switchVideo, 30000);

// Add video title indicator (optional)
const titleIndicator = document.createElement('div');
titleIndicator.className = 'video-title';
videoContainer.appendChild(titleIndicator);

// Update title when video changes
function updateVideoTitle() {
    titleIndicator.textContent = gameVideos[currentVideoIndex].title;
    titleIndicator.classList.add('show');
    setTimeout(() => titleIndicator.classList.remove('show'), 3000);
}

// Update title when video changes
videoContainer.addEventListener('transitionend', updateVideoTitle);

function moveCarousel(direction) {
    if (isTransitioning) return;
    
    const carousel = document.querySelector('.carousel');
    const cards = document.querySelectorAll('.card');
    const totalCards = cards.length;

    isTransitioning = true;
    currentIndex += direction;

    // Add smooth transition
    carousel.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';

    // Handle infinite scroll
    if (currentIndex === 0) {
        currentIndex = totalCards - 2;
        setTimeout(() => {
            carousel.style.transition = 'none';
            carousel.style.transform = `translateX(${-currentIndex * (300 + 20)}px)`;
            isTransitioning = false;
        }, 500);
    } else if (currentIndex >= totalCards - 1) {
        currentIndex = 1;
        setTimeout(() => {
            carousel.style.transition = 'none';
            carousel.style.transform = `translateX(${-currentIndex * (300 + 20)}px)`;
            isTransitioning = false;
        }, 500);
    } else {
        setTimeout(() => {
            isTransitioning = false;
        }, 500);
    }

    const offset = -currentIndex * (300 + 20);
    carousel.style.transform = `translateX(${offset}px)`;
}

// Automatically move the carousel every 3 seconds
setInterval(() => {
    moveCarousel(1); // Move to the next card
}, 3000); // Change the interval time as needed

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger-menu');
    const sidebar = document.querySelector('.sidebar');

    // Toggle sidebar when hamburger is clicked
    hamburger.addEventListener('click', function(e) {
        e.stopPropagation();
        hamburger.classList.toggle('active');
        sidebar.classList.toggle('active');
    });

    // Close sidebar when clicking outside
    document.addEventListener('click', function(event) {
        if (!sidebar.contains(event.target) && 
            !hamburger.contains(event.target) && 
            sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });

    // Prevent clicks inside sidebar from closing it
    sidebar.addEventListener('click', function(e) {
        e.stopPropagation();
    });
});
