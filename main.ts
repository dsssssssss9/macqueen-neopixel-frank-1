input.onButtonPressed(Button.A, function () {
    strip.showRainbow(1, 360)
})
input.onButtonPressed(Button.B, function () {
    strip.clear()
    strip.show()
})
let strip: neopixel.Strip = null
basic.showIcon(IconNames.Yes)
strip = neopixel.create(DigitalPin.P2, 20, NeoPixelMode.RGB)
strip.setBrightness(8)
strip.clear()
strip.show()
basic.forever(function () {
    strip.rotate(1)
    strip.show()
    basic.pause(64)
})
