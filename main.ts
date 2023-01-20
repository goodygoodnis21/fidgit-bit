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
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    for (let index = 0; index < 2; index++) {
        music.playMelody("D C A G B G D B ", 120)
    }
})
let letter = 0
basic.showString("HELLO NISCHAL")
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
