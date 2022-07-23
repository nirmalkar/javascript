const countBtn = document.querySelector('#count-btn')
const counter = document.querySelector('#count')
;(function () {
    let count = 0
    countBtn.addEventListener('click', () => {
        ++count
        console.log(count)
        counter.textContent = `${count}`
    })
})()
