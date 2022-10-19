export default function Timer ({
  minutesDisplay,
  secondsDisplay
})
{
  let timerTimeOut

  function hold(){
    clearTimeout(timerTimeOut)
  }

  function updateTimerDisplay(minutes,seconds){
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
  }

  function resetControls(minutesDisplay){
    clearTimeout(timerTimeOut)
    updateTimerDisplay(minutesDisplay,0)
  }

  function countDown(){
    timerTimeOut = setTimeout(() => {
    
    let minutes = minutesDisplay.textContent
    let seconds = secondsDisplay.textContent

    if(minutes <= 0 && seconds <=0){
      minutesDisplay.textContent = String(minutes).padStart(2,"0")
      btnPlay.classList.remove('hide')
      return
    }

    if(seconds <= 0){
      seconds = 2
      --minutes
    }
    seconds--
    updateTimerDisplay(minutes, seconds)
    countDown()
  }, 1000)
  }

  return{
    countDown,
    updateTimerDisplay,
    hold,
    resetControls
  }
}