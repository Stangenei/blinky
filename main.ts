let Blinkt = 0
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    Blinkt += 1
    while (Blinkt) {
        led.plot(2, 2)
        basic.pause(100)
        led.unplot(2, 2)
        basic.pause(100)
    }
})
basic.forever(function () {
	
})
