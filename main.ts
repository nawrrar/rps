input.onButtonPressed(Button.A, function () {
    basic.showString("A")
    basic.pause(1000)
    basic.clearScreen()
    P1 += 1
    Rounds += 1
    updatescoreboard()
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("T")
    basic.pause(1000)
    basic.clearScreen()
    Ties += 1
    Rounds += 1
    updatescoreboard()
})
input.onButtonPressed(Button.B, function () {
    basic.showString("B")
    basic.pause(1000)
    basic.clearScreen()
    P2 += 1
    Rounds += 1
    updatescoreboard()
})
input.onGesture(Gesture.Shake, function () {
    reset()
})
function reset () {
    OLED.init(128, 64)
    P1 = 0
    P2 = 0
    Rounds = 0
    Ties = 0
    basic.showString("Shall we play a game?")
    basic.pause(2000)
    updatescoreboard()
}
function updatescoreboard () {
    OLED.clear()
    OLED.writeStringNewLine("Player 1 score:" + P1)
    OLED.newLine()
    OLED.writeStringNewLine("Player 2 score:" + P2)
    OLED.newLine()
    OLED.writeStringNewLine("Ties:" + Ties)
    OLED.newLine()
    OLED.writeStringNewLine(" Rounds:" + Rounds)
}
let P2 = 0
let Ties = 0
let Rounds = 0
let P1 = 0
reset()
