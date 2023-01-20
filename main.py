def on_button_pressed_a():
    basic.show_leds("""
        . # # # .
                # . . . #
                . . # # .
                . . # . .
                . . # . .
    """)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global letter
    for index in range(10):
        basic.show_string("A", 10)
        basic.show_string("B", 10)
        basic.show_string("C", 10)
        basic.show_string("D", 10)
    letter = randint(1, 4)
    if letter == 1:
        basic.show_string("A")
    elif letter == 2:
        basic.show_string("B")
    elif letter == 3:
        basic.show_string("C")
    else:
        basic.show_string("D")
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    basic.show_icon(IconNames.SQUARE)
    basic.show_icon(IconNames.DIAMOND)
    basic.show_icon(IconNames.SMALL_DIAMOND)
    basic.show_leds("""
        . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
    """)
input.on_button_pressed(Button.B, on_button_pressed_b)

letter = 0
basic.show_string("HELLO NISCHAL")
basic.show_leds("""
    # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
""")