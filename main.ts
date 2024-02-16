led.enable(true)
radio.setGroup(2)
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    if (Environment.PIR(DigitalPin.P1)) {
        radio.sendValue("m", 1)
        basic.showIcon(IconNames.Chessboard)
    } else {
        radio.sendValue("m", 0)
        basic.clearScreen()
    }
    radio.sendValue("n", Environment.ReadNoise(AnalogPin.P2))
    radio.sendValue("ll", input.lightLevel())
    radio.sendValue("t", input.temperature())
    radio.sendValue("mf", input.magneticForce(Dimension.X))
    basic.pause(1000)
})
