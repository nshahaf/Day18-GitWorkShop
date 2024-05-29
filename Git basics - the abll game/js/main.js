'use strict'
var serialId = 0
var balls = [
    { diameter: 100, backgroundColor: 'yellow' },
    { diameter: 100, backgroundColor: 'yellow' },
    { diameter: 100, backgroundColor: 'yellow' },
    { diameter: 100, backgroundColor: 'yellow' },
    { diameter: 100, backgroundColor: 'yellow' }
]

function onBallClick(elBall, idx) {
    console.log('clicked!')
    var currBall = balls[idx]

    //diameter
    currBall.diameter += getRandomInt(20, 61)
    if(currBall.diameter > 400) currBall.diameter = 100
    elBall.style.width = currBall.diameter + 'px'

    //random color
    currBall.backgroundColor = elBall.style.backgroundColor = getRandomColor()
    elBall.innerText = currBall.diameter
}

function swapBall1and2() {
    var ballIdx1 = balls.splice(1, 1)
    balls.unshift(ballIdx1[0])
    renderBalls()
}

function reduceBall1and2() {
    for (var i = 0; i <=1;i++) {
        balls[i].diameter -= getRandomInt(20, 61)
        if(balls[i].diameter < 100) balls[i].diameter = 100
    }
    renderBalls()


}

function renderBalls() {
    var elBalls = document.querySelectorAll('.ball')

    for (var i = 0; i < elBalls.length; i++) {
        elBalls[i].style.width = balls[i].diameter + 'px'
        elBalls[i].innerText = balls[i].diameter
        elBalls[i].style.backgroundColor = balls[i].backgroundColor
    }

}
