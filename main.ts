function updateMovement (num: number) {
    if (movement != num) {
        movement = num
        radio.setTransmitPower(7)
        radio.sendValue("m", movement)
        if (movement == 1) {
            basic.showIcon(IconNames.Chessboard)
        } else {
            basic.showIcon(IconNames.SmallDiamond)
        }
    }
    radio.setTransmitPower(4)
}
let movement = 0
radio.setGroup(2)
basic.showIcon(IconNames.Yes)
movement = 0
basic.forever(function () {
    if (Environment.PIR(DigitalPin.P1)) {
        updateMovement(1)
    } else {
        updateMovement(0)
    }
    basic.pause(1000)
})
