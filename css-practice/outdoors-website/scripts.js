//start
const selectElement = (s) => {
    return document.querySelector(s)
}

selectElement('.open').addEventListener('click', () =>{
    console.log('clicked')
    selectElement('.nav-links').classList.add('active')
})

selectElement('.close').addEventListener('click', () => {
    selectElement('.nav-links').classList.remove('active')
})