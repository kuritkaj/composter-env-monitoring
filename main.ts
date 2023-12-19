function sendData () {
    radio.sendValue("movement", movement)
    radio.sendValue("noise", noise)
    serial.writeValue("movement", movement)
    serial.writeValue("noise", noise)
    movement = 0
    noise = Environment.ReadNoise(AnalogPin.P2)
}
function movementDetected () {
    movement = movement + 1
    noise = (noise + Environment.ReadNoise(AnalogPin.P2)) / 2
}
let noise = 0
let movement = 0
led.enable(true)
led.setBrightness(255)
radio.setGroup(2)
radio.setTransmitPower(4)
movement = 0
noise = Environment.ReadNoise(AnalogPin.P2)
basic.forever(function () {
    if (tinkercademy.PIR(DigitalPin.P1)) {
        movementDetected()
    } else {
    	
    }
    led.plotBarGraph(
    Math.min(100, Environment.ReadNoise(AnalogPin.P2)),
    100,
    true
    )
    basic.pause(1000)
})
control.inBackground(function () {
    while (true) {
        sendData()
        basic.pause(5000)
    }
})
