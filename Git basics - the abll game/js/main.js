'use strict'
var ballDiameter = 100

function onBallClick(elBall) {
    console.log('clicked!')
    
    ballDiameter >= 400? ballDiameter = 100 : ballDiameter += getRandomInt(20,61)

    elBall.style.height = ballDiameter + 'px'
    elBall.style.width = ballDiameter + 'px'

    elBall.style.backgroundColor = getRandomColor()
    elBall.innerText = ballDiameter

}