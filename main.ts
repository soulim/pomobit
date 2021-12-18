// Start/stop the timer.
input.onButtonPressed(Button.A, function () {
    if (state == 0) {
        state = 1
    } else {
        state = 0
    }
})
input.onButtonPressed(Button.AB, function () {
    if (mode == 0) {
        mode = 1
    } else {
        mode = 0
    }
})
input.onButtonPressed(Button.B, function () {
    state = 0
})
let state = 0
let mode = 0
// Modes:
// 0 - work
// 1 - break
mode = 0
// States:
// 0 - stopped
// 1 - started
state = 0
basic.forever(function () {
	
})
