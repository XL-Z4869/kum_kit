function sound(e) {

    console.log(e.keyCode);
    const key = document.querySelector(`div[data-key='${e.keyCode}']`)
    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`)

    if (!audio) return
    key.classList.add('playing')
    audio.currentTime = 0;
    audio.play()
}

function remove(e) {
    console.log(e.propertyName);
    if (e.propertyName !== 'transform') return
    e.target.classList.remove('playing')
}

const keys = Array.from(document.querySelectorAll('.key'))
keys.forEach(key => key.addEventListener('transitionend', remove))
window.addEventListener('keydown', sound)