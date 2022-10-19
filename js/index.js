import Timer from "./timer.js"
import Controls from "./controls.js"
import Sounds from "./sounds.js"
import {
  minutesDisplay,
  secondsDisplay,
  btnPlay,
  btnPause,
  btnStop,
  btnMore,
  btnLess,
  cardFlorest,
  cardRain,
  cardCity,
  cardFire
} from "./elements.js"

let setMinutes
let number

const timer = Timer({
  minutesDisplay,
  secondsDisplay
})

const sounds = Sounds()

const controls = Controls({
  btnPlay,
  btnPause,
  btnStop,
  btnMore,
  btnLess,
  minutesDisplay,
  secondsDisplay,
  cardFlorest,
  cardRain,
  cardCity,
  cardFire
})


btnPlay.addEventListener('click', function(){
  controls.play()
  timer.countDown()
  setMinutes = Number(minutesDisplay.textContent)
})

btnPause.addEventListener('click', function(){
  controls.pause()
  timer.hold()
})

btnStop.addEventListener('click', function(){
  controls.stop()
  timer.hold()
  timer.resetControls(setMinutes)
})

btnMore.addEventListener('click', function(){
  number = controls.moreTime()
  timer.updateTimerDisplay(number,0)
})

btnLess.addEventListener('click', function(){
  number = controls.lessTime()
  timer.updateTimerDisplay(number,0)
})

cardFlorest.addEventListener('click', function(){
  controls.selectFlorest()  
  sounds.playFlorest()
})

cardRain.addEventListener('click', function(){
  controls.selectRain()
  sounds.playRain()
})

cardCity.addEventListener('click', function(){
  controls.selectCity()
  sounds.playCity()
})

cardFire.addEventListener('click', function(){
  controls.selectFire()
  sounds.playFire()
})