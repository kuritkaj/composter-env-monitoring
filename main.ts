function updateMovement (num: number) {
    if (movement != num) {
        movement = num
        radio.sendValue("m", num)
        if (movement == 1) {
            basic.showIcon(IconNames.Chessboard)
        } else {
            basic.clearScreen()
        }
    }
}
radio.onReceivedString(function (receivedString) {
    signal = radio.receivedPacket(RadioPacketProperty.SignalStrength)
    if (receivedString == "checkSignal") {
        radio.sendValue("signalStrength", signal)
    }
})
let signal = 0
let movement = 0
movement = 0
radio.setTransmitPower(7)
radio.setGroup(2)
basic.showIcon(IconNames.Yes)
power.lowPowerEnable(LowPowerEnable.Prevent)
basic.forever(function () {
    if (Environment.PIR(DigitalPin.P1)) {
        updateMovement(1)
    } else {
        updateMovement(0)
    }
    basic.pause(500)
})
