'use strict'
var ball = { h: 100, w: 100 }

function onBallClick(elBall) {
    console.log('clicked!')
    // console.log('elBall:', elBall)
    // console.log('elBall.innerText:',elBall.innerText)
    // console.log('elBall.style:',elBall.style)
    ball.h += 50
    ball.w += 50

    elBall.style.height = ball.h + 'px'
    elBall.style.width = ball.w + 'px'

    elBall.innerText = ball.h

}