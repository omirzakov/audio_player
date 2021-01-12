const audio = new Audio("audio/sound_2.mp3");
const btn = document.querySelector("button");
const audioProgress = document.querySelector(".audio-progress");
const doneBlock = document.querySelector(".done");

let done;
let total = 0;

console.log(audio)
audio.autoplay = true;

audio.pause()

btn.addEventListener("click", function() {
    const audioTime = audio.duration;
    done = 100 / audioTime;

    console.log(audioTime)


    setInterval(audioProgressCalc, 1000);
    audio.play();
})

if (total >= 100) {
    clearInterval(audioProgressCalc);
}

function audioProgressCalc() {
    total += done;
    doneBlock.textContent = Math.floor(total) + "%";

    if(total >= 100) {
        doneBlock.textContent = "100%";
        audioProgress.style.width = 100 + "%";

        return;
    }
    audioProgress.style.width = total + "%";
}
