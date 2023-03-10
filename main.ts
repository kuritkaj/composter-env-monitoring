OLED.init(128, 64)
basic.forever(function () {
    OLED.clear()
    OLED.writeString("Vlhkost pudy: ")
    OLED.writeNum(Environment.ReadSoilHumidity(AnalogPin.P1))
    OLED.writeStringNewLine("%")
    OLED.writeString("Vlhkost vzduchu: ")
    OLED.writeNum(Environment.octopus_BME280(Environment.BME280_state.BME280_humidity))
    OLED.writeStringNewLine("%")
    OLED.writeString("Teplota: ")
    OLED.writeNum(Environment.octopus_BME280(Environment.BME280_state.BME280_temperature_C))
    OLED.writeStringNewLine("C")
    basic.pause(5000)
})
