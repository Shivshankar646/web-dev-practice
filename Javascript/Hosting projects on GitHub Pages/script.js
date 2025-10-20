document.addEventListener('DOMContentLoaded', () => {

    // ========================================================================
    // !! IMPORTANT !!
    // EDIT THIS LIST TO MATCH YOUR .MP3 FILES IN THE 'music' FOLDER.
    // The names must be EXACT.
    // ========================================================================
    const songs = [
        {
            title: "Starboy", // Change this title
            artist: "The Weeknd", // Change this artist
            filePath: "music/Your-Actual-Song-Name-1.mp3"  // <-- !! YOU MUST CHANGE THIS !!
        },
        {
            title: "Blinding Lights",
            artist: "The Weeknd",
            filePath: "music/Your-Actual-Song-Name-2.mp3"  // <-- !! YOU MUST CHANGE THIS !!
        },
        {
            title: "Save Your Tears",
            artist: "The Weeknd",
            filePath: "music/Your-Actual-Song-Name-3.mp3"  // <-- !! YOU MUST CHANGE THIS !!
        }
        // Example for adding a new song:
        // {
        //     title: "My New Song",
        //     artist: "My Artist",
        //     filePath: "music/The-Real-File-Name.mp3" // <-- Must be perfect match
        // }
    ];

    // --- STATE ---
    let currentSongIndex = 0;
    let isPlaying = false;

    // --- REFERENCES ---
    const audio = document.getElementById('audio-player');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const nextBtn = document.getElementById('next-btn');
    const prevBtn = document.getElementById('prev-btn');
    const progressBar = document.getElementById('progress');
    const currentTimeEl = document.getElementById('current-time');
    const totalTimeEl = document.getElementById('total-time');
    const playerSongTitle = document.getElementById('player-song-title');
    const playerSongArtist = document.getElementById('player-song-artist');
    const songListContainer = document.getElementById('song-list');

    // --- FUNCTIONS ---

    // Load a song by its index
    function loadSong(songIndex) {
        const song = songs[songIndex];
        audio.src = song.filePath;
        playerSongTitle.textContent = song.title;
        playerSongArtist.textContent = song.artist;
        updateActiveSongInList();
    }

    // Create the HTML for the song list
    function createSongList() {
        songListContainer.innerHTML = "";
        songs.forEach((song, index) => {
            const songItem = document.createElement('div');
            songItem.classList.add('song-item');
            // Simplified HTML with no image
            songItem.innerHTML = `
                <div class="song-item-details">
                    <span class="song-item-title">${song.title}</span>
                    <span class="song-item-artist">${song.artist}</span>
                </div>
            `;
            // Add click event to play the song
            songItem.addEventListener('click', () => {
                currentSongIndex = index;
                loadSong(currentSongIndex);
                playSong();
            });
            songListContainer.appendChild(songItem);
        });
    }
    
    // Highlight the song that is currently loaded
    function updateActiveSongInList() {
        const songItems = document.querySelectorAll('.song-item');
        songItems.forEach((item, index) => {
            if (index === currentSongIndex) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }

    // Play the loaded song
    function playSong() {
        isPlaying = true;
        audio.play().catch(error => console.error("Audio Play Error:", error));
        playPauseBtn.classList.remove('fa-play-circle');
        playPauseBtn.classList.add('fa-pause-circle');
    }

    // Pause the song
    function pauseSong() {
        isPlaying = false;
        audio.pause();
        playPauseBtn.classList.remove('fa-pause-circle');
        playPauseBtn.classList.add('fa-play-circle');
    }

    // Toggle play/pause button
    function togglePlayPause() {
        if (isPlaying) {
            pauseSong();
        } else {
            if (audio.src) {
                playSong();
            } else {
                loadSong(0); // Load first song if nothing is loaded
                playSong();
            }
        }
    }

    // Go to next song
    function nextSong() {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        loadSong(currentSongIndex);
        playSong();
    }

    // Go to previous song
    function prevSong() {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        loadSong(currentSongIndex);
        playSong();
    }

    // Update the progress bar
    function updateProgress() {
        const { currentTime, duration } = audio;
        if (duration) {
            const progressPercentage = (currentTime / duration) * 100;
            progressBar.style.width = `${progressPercentage}%`;
        }
        currentTimeEl.textContent = formatTime(currentTime);
    }
    
    // Set the total time of the song
    function setTotalTime() {
        totalTimeEl.textContent = formatTime(audio.duration);
    }

    // Helper function to format seconds into MM:SS
    function formatTime(seconds) {
        if (isNaN(seconds)) return "0:00";
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    }

    // --- EVENT LISTENERS ---
    playPauseBtn.addEventListener('click', togglePlayPause);
    nextBtn.addEventListener('click', nextSong);
    prevBtn.addEventListener('click', prevSong);
    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('loadedmetadata', setTotalTime);
    audio.addEventListener('ended', nextSong);

    // --- INITIALIZATION ---
    createSongList();
    // We do not load the first song automatically, to avoid browser autoplay blocks.
    // The user must click a song or the play button to start.
});