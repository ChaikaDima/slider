const slider = document.querySelector('.slider')
const thumb = document.querySelector('.thumb')
const btn = document.querySelector('btn')
const sliderFill = document.querySelector('.sliderFill')

let shiftX

function onThumbMove(event) {
  let positionThumb =
    event.clientX - shiftX - slider.getBoundingClientRect().left
  let borderLeft = 0
  if (positionThumb < borderLeft) {
    positionThumb = 0
  }

  let borderRight = slider.offsetWidth - thumb.offsetWidth

  if (positionThumb >= borderRight) {
    positionThumb = borderRight
  }
  thumb.style.left = positionThumb + 'px'
  sliderFill.style.width = positionThumb + thumb.offsetWidth + 'px'
}

function onThumbStop() {
  thumb.onpointermove = null
  thumb.onpointerup = null
  // thumb.onpointerdown = null
}

thumb.onpointerdown = function (event) {
  event.preventDefault()
  thumb.setPointerCapture(event.pointerId)
  shiftX = event.clientX - thumb.getBoundingClientRect().left

  thumb.onpointermove = onThumbMove
  thumb.onpointerup = onThumbStop
}

thumb.ondragstart = () => false
