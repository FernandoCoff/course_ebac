const form = document.querySelector('#form')
const maxNumber = document.querySelector('#maxNumber')
const numberGenerated = document.querySelector('#numberGenerated')

form.addEventListener('submit', (event)=>{
    event.preventDefault()
    numberGenerated.innerHTML = Math.floor(Math.random() * (maxNumber.value - 0 +1)) + 0
})


