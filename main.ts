input.onButtonPressed(Button.A, function () {
    music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.UntilDone)
    if (input.isGesture(Gesture.TiltLeft)) {
        music.setTempo(90)
    }
    if (input.isGesture(Gesture.TiltRight)) {
        music.setTempo(150)
    }
})
input.onButtonPressed(Button.B, function () {
    music.play(music.stringPlayable("C5 G A F E G A G ", 120), music.PlaybackMode.UntilDone)
    if (input.isGesture(Gesture.TiltLeft)) {
        music.setTempo(90)
    }
    if (input.isGesture(Gesture.TiltRight)) {
        music.setTempo(150)
    }
})
