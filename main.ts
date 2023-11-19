input.onButtonPressed(Button.A, function () {
    music.play(music.stringPlayable("C5 B A G F E D C ", 90), music.PlaybackMode.UntilDone)
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showIcon(IconNames.Ghost)
    music.setTempo(160)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Heart)
    music.setTempo(40)
    basic.clearScreen()
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showIcon(IconNames.StickFigure)
    music.setTempo(60)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    music.play(music.stringPlayable("C5 G A F E G A G ", 120), music.PlaybackMode.UntilDone)
})
