input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # # # .
        # . . . #
        . . # # .
        . . # . .
        . . # . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 10; index++) {
        basic.showString("A", 10)
basic.showString("B", 10)
basic.showString("C", 10)
basic.showString("D", 10)
    }
    letter = randint(1, 4)
    if (letter == 1) {
        basic.showString("A")
    } else if (letter == 2) {
        basic.showString("B")
    } else if (letter == 3) {
        basic.showString("C")
    } else {
        basic.showString("D")
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 3; index++) {
        basic.showIcon(IconNames.Square)
        basic.showIcon(IconNames.Diamond)
        basic.showIcon(IconNames.SmallDiamond)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onGesture(Gesture.Shake, function () {
    rps = randint(1, 3)
    if (rps == 1) {
        basic.showString("R")
    } else if (rps == 2) {
        basic.showString("P")
    } else {
        basic.showString("S")
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    for (let index = 0; index < 2; index++) {
        music.playMelody("B A G A G F A C5 ", 120)
    }
})
let rps = 0
let letter = 0
basic.showString("HELLO FRIEND !!")
basic.showLeds(`
    . . # . .
    . . # . .
    # # # # #
    . . . . .
    . . . . .
    `)
