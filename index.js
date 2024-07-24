// import './style.css'
// import { createSwapy } from 'swapy'

const container = document.querySelector('.container-1')
const container2 = document.querySelector('.container-2')
const enableInput = document.querySelector('#enable')

const swapy = Swapy.createSwapy(container, {
  animation: 'dynamic'
})

const swapy2 = Swapy.createSwapy(container2, {
  animation: 'spring'
})

swapy2.onSwap((event) => {
  console.log('swapy2 event', event.data)
})

swapy.enable(false)
swapy.onSwap((event) => {
  console.log('event.map', event.data.map)
  console.log('event.object', event.data.object)
  console.log('event.array', event.data.array)
})

enableInput.addEventListener('input', () => {
  swapy.enable(enableInput.checked)
})

enableInput.addEventListener('click', () => {
  console.log("click")
})