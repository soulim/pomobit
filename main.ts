// Start/stop the timer.
input.onButtonPressed(Button.A, function () {
    if (state == 0) {
        state = 1
        started_at = control.millis()
        current_min = 0
    } else {
        state = 0
    }
})
// Toggle/show the current mode.
input.onButtonPressed(Button.AB, function () {
    if (mode == 0) {
        mode = 1
    } else {
        mode = 0
    }
})
// Reset the timer.
input.onButtonPressed(Button.B, function () {
    state = 0
    led.plot(0, 2)
})
let y = 0
let x = 0
let delta_min = 0
let current_min = 0
let started_at = 0
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
started_at = 0
let delta = 0
basic.forever(function () {
    if (state == 1) {
        delta = control.millis() - started_at
        delta_min = Math.floor(delta / 1000)
        if (delta_min > current_min) {
            current_min = delta_min
            x = Math.floor((current_min - 1) / 5)
            y = (current_min - 1) % 5
            led.plot(x, y)
        }
        if (current_min > 25) {
            state = 0
            basic.clearScreen()
        }
    }
})
