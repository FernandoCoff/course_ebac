const form = document.querySelector("#form")
const btnTheme = document.querySelector("#mode-colors")
const page = document.querySelector("#root")
const theme = localStorage.getItem("theme")

page.classList = theme
form.addEventListener('submit', (e)=>{
    e.preventDefault()
})

btnTheme.addEventListener('click', ()=>{
    page.classList.toggle('dark')
    const icon = (page.classList == "dark") ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>'
    const setTheme = (page.classList == "dark") ? 'dark' : ""

    localStorage.setItem('theme', setTheme)
    btnTheme.innerHTML = icon
})

