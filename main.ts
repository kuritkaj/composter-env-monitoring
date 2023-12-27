led.enable(false)
radio.setGroup(2)
basic.forever(function () {
    if (Environment.PIR(DigitalPin.P1) || Environment.ReadNoise(AnalogPin.P2) >= 40) {
        if (Environment.PIR(DigitalPin.P1)) {
            radio.sendValue("m", 1)
        } else {
            radio.sendValue("m", 0)
        }
        radio.sendValue("n", Environment.ReadNoise(AnalogPin.P2))
        radio.sendValue("ll", input.lightLevel())
        radio.sendValue("t", input.temperature())
        radio.sendValue("mf", input.magneticForce(Dimension.X))
        basic.pause(1000)
    } else {
        basic.pause(2000)
    }
})
