'use strict'
var serialId = 0
var balls = [
    {diameter: 100, backgroundColor: 'yellow'},
    {diameter: 100, backgroundColor: 'yellow'},
    {diameter: 100, backgroundColor: 'yellow'},
    {diameter: 100, backgroundColor: 'yellow'},
    {diameter: 100, backgroundColor: 'yellow'}
]

function onBallClick(elBall,idx) {
    console.log('clicked!')
    var currBall = balls[idx]
    
    //diameter
    currBall.diameter >= 400? currBall.diameter = 100 : currBall.diameter += getRandomInt(20,61)
    elBall.style.height = currBall.diameter + 'px'
    elBall.style.width = currBall.diameter + 'px'

    //random color
    var randColor = getRandomColor()
    currBall.backgroundColor = randColor

    elBall.style.backgroundColor = randColor
    elBall.innerText = currBall.diameter
    
}

function swapBall1and2() {
    var ballIdx1 = balls.splice(1,1)
    balls.unshift(ballIdx1[0])

    var elBall1 = document.querySelector('.ball1')
    var elBall2 = document.querySelector('.ball2') 
    
        elBall1.style.width = balls[0].diameter
        elBall1.style.height = balls[0].diameter
        elBall1.innerText = balls[0].diameter
        elBall1.style.backgroundColor = balls[0].backgroundColor
        
        elBall2.style.width = balls[1].diameter
        elBall2.style.height = balls[1].diameter
        elBall2.innerText = balls[1].diameter
        elBall2.style.backgroundColor = balls[1].backgroundColor

    

    
    
    
}
