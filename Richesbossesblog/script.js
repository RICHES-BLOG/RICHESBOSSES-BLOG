const searchEngineId = '420c3d10abf914cf9';
const apiKey = '204567622242-4tg04k0hrhlr174r1d74ofk1n7doutoq.apps.googleusercontent.com';

const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const searchResultsContainer = document.getElementById('search-results');

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const searchTerm = searchInput.value.trim();
  if (searchTerm) {
    const url = https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${searchEngineId}&q=${searchTerm};
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const searchResults = data.items;
        const searchResultsHtml = searchResults.map(result => {
          return `
            <h2><a href="${result.link}">${result.title}</a></h2>
            <p>${result.snippet}</p>
          `;
        }).join('');
        searchResultsContainer.innerHTML = searchResultsHtml;
      })
      .catch(error => console.error(error));
  }
});

const video = document.getElementById("background-video");
const playPauseButton = document.getElementById("play-pause-button");
const muteUnmuteButton = document.getElementById("mute-unmute-button");
const progressBar = document.getElementById("progress-bar-fill");

playPauseButton.addEventListener("click", () => {
if (video.paused) {
video.play();
playPauseButton.style.backgroundImage = "url('pause-icon.png')";
} else {
video.pause();
playPauseButton.style.backgroundImage = "url('play-icon.png')";
}
});

muteUnmuteButton.addEventListener("click", () => {
if (video.muted) {
video.muted = false;
muteUnmuteButton.style.backgroundImage = "url('unmute-icon.png')";
} else {
video.muted = true;
muteUnmuteButton.style.backgroundImage = "url('mute-icon.png')";
}
});

video.addEventListener("timeupdate", () => {
const progress = (video.currentTime / video.duration) * 100;
progressBar.style.width = ${progress}%;
});


function openMenu() {
  const navLinks = document.getElementById('nav-links');
  navLinks.style.display = navLinks.style.display === 'block' ? 'none' : 'block';
}
const carouselItems = document.querySelectorAll('.carousel-item');
let currentActiveIndex = 0;

function changeSlide() {
  carouselItems[currentActiveIndex].classList.remove('active');
  currentActiveIndex = (currentActiveIndex + 1) % carouselItems.length;
  carouselItems[currentActiveIndex].classList.add('active');
}

setInterval(changeSlide, 3000);


