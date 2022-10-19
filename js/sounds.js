export default function Sounds(){
  const soundFlorest = new Audio("./audios/Floresta.wav")
  const soundRain = new Audio("./audios/Chuva.wav")
  const soundCity = new Audio("./audios/Cafeteria.wav")
  const soundFire = new Audio("./audios/Lareira.wav")

  function playFlorest(){
    soundFlorest.play()
    soundRain.pause()
    soundCity.pause()
    soundFire.pause()
  }
  
  function playRain(){
    soundFlorest.pause()
    soundRain.play()
    soundCity.pause()
    soundFire.pause()
  }

  function playCity(){
    soundFlorest.pause()
    soundRain.pause()
    soundCity.play()
    soundFire.pause()
  }

  function playFire(){
    soundFlorest.pause()
    soundRain.pause()
    soundCity.pause()
    soundFire.play()
  }

  return{
    playFlorest,
    playRain,
    playCity,
    playFire
  }
}