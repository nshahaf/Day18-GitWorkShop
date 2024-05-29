'use strict'
var ballDiameter = [100,100]

function onBallClick(elBall,idx) {
    console.log('clicked!')
    
    ballDiameter[idx] >= 400? ballDiameter[idx] = 100 : ballDiameter[idx] += getRandomInt(20,61)

    elBall.style.height = ballDiameter[idx] + 'px'
    elBall.style.width = ballDiameter[idx] + 'px'

    elBall.style.backgroundColor = getRandomColor()
    elBall.innerText = ballDiameter[idx]

}