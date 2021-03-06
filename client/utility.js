const loadScript = url => {
  const index = window.document.getElementsByTagName('script')[0]
  const script = window.document.createElement('script')
  script.src = url
  script.async = true
  script.defer = true
  index.parentNode.insertBefore(script, index)
}

const getRandomInRange = (x, y) => {
  return function() {
    let egg = ['green', 'blue', 'red', 'orange', 'special', 'yellow']
    const eggLocation = []
    while (eggLocation.length < 30) {
      let lat =
        (Math.random() * (x + 0.008 - (x - 0.008)) + (x - 0.008)).toFixed(10) *
        1
      let lng =
        (Math.random() * (y + 0.01 - (y - 0.01)) + (y - 0.01)).toFixed(10) * 1
      let idx = Math.floor(Math.random() * 6)
      console.log('')
      eggLocation.push({
        position: {
          lat,
          lng
        },
        icon: egg[idx]
      })
    }
    return eggLocation
  }
}

const generateRandomNum = choices => {
  const idxArr = []
  const multipleChoice = []
  while (idxArr.length < 4) {
    let num = Math.floor(Math.random() * 4)
    if (idxArr.indexOf(num) === -1) idxArr.push(num)
  }
  for (let i = 0; i < idxArr.length; i++) {
    multipleChoice.push({
      id: i,
      choice: choices[idxArr[i]]
    })
  }
  return multipleChoice
}

const startTimer = (duration, display) => {
  var timer = duration,
    minutes,
    seconds
  setInterval(function() {
    minutes = parseInt(timer / 60, 10)
    seconds = parseInt(timer % 60, 10)

    minutes = minutes < 10 ? '0' + minutes : minutes
    seconds = seconds < 10 ? '0' + seconds : seconds

    display.textContent = minutes + ':' + seconds

    if (--timer < 0) {
      timer = duration
    }
  }, 1000)
}

module.exports = {
  getRandomInRange,
  generateRandomNum,
  loadScript,
  startTimer
}
