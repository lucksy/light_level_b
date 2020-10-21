let light_level = 0
radio.setGroup(1)
basic.forever(function () {
    light_level = input.lightLevel()
    if (light_level > 128) {
        radio.sendNumber(0)
    } else {
        radio.sendNumber(100)
    }
})
