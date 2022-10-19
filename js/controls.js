export default function Controls({  
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
{
  let number
  
  function play(){
    btnPlay.classList.add('hide')
    btnPause.classList.remove('hide')
  }

  function pause(){
    btnPause.classList.add('hide')
    btnPlay.classList.remove('hide')
  }
  function stop(){
    btnPause.classList.add('hide')
    btnPlay.classList.remove('hide')
  }

  function moreTime(){
    number = Number(minutesDisplay.textContent) + 5
    return number
  }

  function lessTime(){
    number = Number(minutesDisplay.textContent) - 5
    return number
  }

  function selectFlorest(){
    cardFlorest.classList.add('press')
    cardRain.classList.remove('press')
    cardCity.classList.remove('press')
    cardFire.classList.remove('press')
  }

  function selectRain(){
    cardFlorest.classList.remove('press')
    cardRain.classList.add('press')
    cardCity.classList.remove('press')
    cardFire.classList.remove('press')
  }

  function selectCity(){
    cardFlorest.classList.remove('press')
    cardRain.classList.remove('press')
    cardCity.classList.add('press')
    cardFire.classList.remove('press')
  }

  function selectFire(){
    cardFlorest.classList.remove('press')
    cardRain.classList.remove('press')
    cardCity.classList.remove('press')
    cardFire.classList.add('press')
  }

  return{
    play,
    pause,
    stop,
    moreTime,
    lessTime,
    selectFlorest,
    selectRain,
    selectCity,
    selectFire
  }
}