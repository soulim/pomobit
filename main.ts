// Start/stop the timer.
input.onButtonPressed(Button.A, function () {
    if (state == 0) {
        basic.clearScreen()
        state = 1
        prev_tick_at = control.millis()
        elapsed_msec = 0
        elapsed_min = 0
    } else if (state == 1) {
        state = 2
    } else {
        state = 1
        prev_tick_at = control.millis()
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
    basic.showIcon(IconNames.No)
    basic.pause(500)
    basic.clearScreen()
})
let y = 0
let x = 0
let elapsed_min_now = 0
let elapsed_min = 0
let prev_tick_at = 0
let elapsed_msec = 0
let state = 0
let mode = 0
// Modes:
// 0 - work
// 1 - break
mode = 0
// States:
// 0 - stopped
// 1 - started
// 2 - paused
state = 0
elapsed_msec = 0
prev_tick_at = 0
basic.forever(function () {
    if (state == 1) {
        elapsed_msec = elapsed_msec + (control.millis() - prev_tick_at)
        prev_tick_at = control.millis()
        elapsed_min_now = Math.floor(elapsed_msec / 1000)
        if (elapsed_min_now > elapsed_min) {
            elapsed_min = elapsed_min_now
            x = Math.floor((elapsed_min - 1) / 5)
            y = (elapsed_min - 1) % 5
            led.plot(x, y)
        }
        if (elapsed_min > 25) {
            state = 0
            basic.showIcon(IconNames.Yes)
            basic.pause(500)
            basic.clearScreen()
        }
    }
})
