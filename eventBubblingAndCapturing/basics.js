/**
 * useCapture true || false would set, should the event be captured or bubbled out.
 * by default it is bubbled out (or default value of the third argument is false, it means no capturing),
 * but if we pass the third argument of addEventListener true then it would be captured.
 * Event Capturing: it means capturing events from top to bottom.
 * Event Bubbling: it means capturing events from bottom to top.
 * */
const container = document.querySelector('#container')
const btn1 = document.querySelector('#btn')
container.addEventListener(
    'click',
    (e) => {
        console.log('outer div')
        e.stopPropagation()
    },
    false // here we are passing false at the third argument so, this onclick function would bubbled up.
)
btn.addEventListener(
    'click',
    (e) => {
        console.log(this)
        console.log('button')
        e.stopPropagation()
    }
    // here we are not passing true or false at the third argument so, this onclick function would bubbled up.
)
container.addEventListener(
    'click',
    () => {
        console.log('outer div')
    },
    true // we are passing true at the third argument so, this onclick function would work as event capturing.
)
btn.addEventListener(
    'click',
    () => {
        console.log('btn')
    },
    true // we are passing true at the third argument so, this onclick function would work as event capturing.
)
