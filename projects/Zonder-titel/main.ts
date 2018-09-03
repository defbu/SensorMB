basic.forever(() => {
    basic.showString("Afstand")
    basic.showNumber(SensorMB.getUltrasonicDistance(SensorMB.DistanceUnit.CM, SensorMB.Pin.P0, SensorMB.Pin.P1))
})
