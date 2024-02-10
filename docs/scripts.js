// scripts.js

document.addEventListener('DOMContentLoaded', function () {
    // Predefined list of songs
    const songs = [
        { name: 'Song 1', artist: 'Artist 1' },
        { name: 'Song 2', artist: 'Artist 2' },
        // Add more songs as needed
    ];

    // Function to display a random song
    function displayRandomSong() {
        const randomIndex = Math.floor(Math.random() * songs.length);
        const randomSong = songs[randomIndex];
        document.getElementById('spotify-song').innerText = `Currently listening to: ${randomSong.name} by ${randomSong.artist}`;
    }

    // Initial display
    displayRandomSong();

    // Update the song every 4 minutes
    setInterval(displayRandomSong, 4 * 60 * 1000);
});
