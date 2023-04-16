function init(){
    const playButton = document.getElementById('play')
    const audio = document.getElementById('audio')

    function playAudio(){
        audio.src = 'http://soundbible.com/mp3/Audience_Applause-Matthiew11-1206899159.mp3'
        audio.play()
    }


    playButton.addEventListener('click', playAudio)
}

window.addEventListener("DOMContentLoaded", init)