'use strict'
var balls
var gTimeoutInterval


function onInit() {
    balls = [
        { diameter: 100, backgroundColor: 'yellow' },
        { diameter: 100, backgroundColor: 'yellow' },
        { diameter: 100, backgroundColor: 'yellow' },
        { diameter: 100, backgroundColor: 'yellow' },
        { diameter: 100, backgroundColor: 'yellow' },
        { diameter: 100, backgroundColor: 'yellow' }
    ]
    document.querySelector('body').style.backgroundColor = 'black'
    renderBalls()

}

function onBallClick(elBall, idx) {
    console.log('clicked!')
    var currBall = balls[idx]

    //diameter
    currBall.diameter += getRandomInt(20, 61)
    if (currBall.diameter > 400) currBall.diameter = 100
    elBall.style.width = currBall.diameter + 'px'

    //random color
    currBall.backgroundColor = elBall.style.backgroundColor = getRandomColor()
    elBall.innerText = currBall.diameter
}

function onBall3Click() {
    var ballIdx1 = balls.splice(1, 1)
    balls.unshift(ballIdx1[0])
    renderBalls()
}

function onBall4Click() {
    for (var i = 0; i <= 1; i++) {
        balls[i].diameter -= getRandomInt(20, 61)
        if (balls[i].diameter < 100) balls[i].diameter = 100
    }
    renderBalls()


}

function onBall5Click() {
    document.querySelector('body').style.backgroundColor = getRandomColor()
}

function onBall6Click() {
    onInit()
}

function onBall6Hover() {
    clearTimeoutInterval()
    gTimeoutInterval = setTimeout(() => {
        console.log('2sec passed')
    
    },2000)

}

function clearTimeoutInterval() {
    clearTimeout (gTimeoutInterval)
    console.log('timeout cleared')
}

function renderBalls() {
    var elBalls = document.querySelectorAll('.ball')

    for (var i = 0; i < elBalls.length; i++) {
        elBalls[i].style.width = balls[i].diameter + 'px'
        elBalls[i].innerText = balls[i].diameter
        elBalls[i].style.backgroundColor = balls[i].backgroundColor
    }

}
