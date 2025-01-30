const lyrics = "I love you more than words can say...";
const lyricsContainer = document.getElementById("lyrics");

let index = 0;
function revealLyrics() {
    if (index < lyrics.length) {
        lyricsContainer.textContent += lyrics[index];
        index++;
        setTimeout(revealLyrics, 100); 
    }
}

window.onload = revealLyrics;
