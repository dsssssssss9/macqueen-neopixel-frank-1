input.onButtonPressed(Button.A, function () {
    strip.showRainbow(1, 360)
})
let strip: neopixel.Strip = null
basic.showIcon(IconNames.Tortoise)
strip = neopixel.create(DigitalPin.P2, 20, NeoPixelMode.RGB)
strip.setBrightness(32)
strip.clear()
strip.show()
basic.forever(function () {
	
})
basic.forever(function () {
    strip.rotate(1)
    strip.show()
    basic.pause(64)
})
