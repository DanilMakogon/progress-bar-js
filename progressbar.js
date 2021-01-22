function runProgressBar (button = null) {
  // Удаление кнопки вызова страрта прогресс-бара
  if (button !== null)
    button.parentNode.removeChild(button)

  // Инициализация необходимых переменных

  let progressBar = document.getElementById('progress-bar')
  let progressBackground = document.getElementById('progress-background')
  let progressVal = document.getElementById('progress-val')
  let textStatusesBlock = document.getElementById('progress-statuses')
  let resultRefLink = document.getElementById('progress-result-link')

  // Массив текстов для вывода в процессе загрузки [Максимум 5 текстов для равномерного отображения]
  let textStatuses = [
    'Text1',
    'Text2',
    'Text3',
    'Text4',
    'Text5',
    'Text6'
  ]
  textStatuses = textStatuses.slice(0, 5)
  let resultTextBlocks = []
  let maxPercentForElement = Math.round(100 / textStatuses.length)
  let firstNumber = 0
  let progressSpeed = 1

  // Подготовка текстов
  for (let text of textStatuses) {
    let randPercent = randomFloat(firstNumber, (firstNumber + maxPercentForElement))
    if (randPercent > 95) randPercent = randomFloat(95, 99)
    firstNumber += randPercent
    resultTextBlocks.push({
      text: text,
      percent: Math.round(randPercent)
    })

  }
  if (progressBar === null || progressVal === null || progressBackground === null || textStatusesBlock === null) {
    console.log('Couldn\'t find one of the following items: #progress-bar, #progress-val, #progress-background, #progress-statuses')
    return false
  }

  let width = 0.1
  let identity = setInterval(scene, 1)

  // Генератор случайного числа с плавающей точкой
  function randomFloat (min, max) {
    return min + (max - min) * Math.random()
  }

  // Установка текущего процента в стиль прогресс-бара и в текстовый индикатор прогресса
  function setPercent (width) {
    progressBar.style.width = width + '%'
    if (width > 10)
      progressVal.innerText = width.toFixed() + '%'
  }

  // Отображение текстового состояния. То есть отображение того текста, который указан в блоке #progress-statuses , как <span>
  function showResult () {
    setTimeout(function () {
      progressBackground.hidden = true
      textStatusesBlock.hidden = true
      resultRefLink.classList.toggle('fade')
    }, 500)

  }

  function scene () {
    let textObject = resultTextBlocks.find(text => text.percent === Math.round(width))
    if (textObject !== undefined) {
      progressSpeed = 100
      textStatusesBlock.innerText = textObject.text
      clearInterval(identity)
      setTimeout(function () {
        identity = setInterval(scene, 1)
      }, randomFloat(10, 70))
    }
    if (width >= 100) {
      showResult()
      clearInterval(identity)
    } else {
      width += randomFloat(0.0001, 0.1)
      setPercent(width)
    }
  }

}