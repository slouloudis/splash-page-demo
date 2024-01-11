console.log('Hello, DOM')

document.title = `This wasn't the original title!`

document.body.style.background = 'teal'
document.body.style.color = 'white'
c
document.body.style.fontFamily = 'monospace'

function createPTag() {
    const myP = document.createElement('p')
    myP.textContent = 'This was a terrible var name!'
    document.body.appendChild(myP)
}

function changeHTML() {
        // create a var to store our html element in
    let theTitle = document.getElementById('The-Title')
    console.dir(theTitle)

    theTitle.textContent = `Whoa I've changed this with javascript!!`

    let theFooter = document.querySelector('.the-footer')
    console.dir(theFooter)
    console.log(theFooter)

    theFooter.textContent = `I've changed this too!`
}

changeHTML()
// sum()
// a = 10
// b = 5
// console.log(15)
// function sum(a,b) {
//     console.log(a + b)
// }

// sum(10, 5) //15

// function sum(a,b) {
//     console.log(a + b) // 20.5
// }
// // a = 20
// // b = 0.5
// sum(20,0.5)