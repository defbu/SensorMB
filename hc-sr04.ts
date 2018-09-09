//% color=#ff4500 icon="\uf2db" block="DEFBU blocks"
//% groups=['Distance','Temperature']
namespace defbu {

    export const enum DistanceUnit {
        //% block="cm"
        CM = 10000,
        //% block="mm"
        MM = 1000,
        //% block="inch"
        INCH = 25400,
        //% block="μs"
        US = 1
    }

    /**
     * Measures the distance with HC-SR04: range 0 - 300 cm
     * @param unit unit of distance, eg: defbu.DistanceUnit.CM
     * @param trig Pin connected to trig, eg: DigitalPin.P0
     * @param echo Pin connected to echo, eg: DigitalPin.P1
     */
    //% blockId="defbu_get_distance_pins" block="distance in %unit | trig %trig | echo %echo"
    //% unit.fieldEditor="gridpicker" trig.fieldOptions.columns=3
    //% unit.fieldOptions.tooltips="false"
    //% trig.fieldEditor="gridpicker" trig.fieldOptions.columns=3
    //% trig.fieldOptions.tooltips="false"
    //% echo.fieldEditor="gridpicker" echo.fieldOptions.columns=3
    //% echo.fieldOptions.tooltips="false"
    //% group="Distance"
    //% weight=45
    //% advanced=true
    export function getDistancePins(unit: defbu.DistanceUnit = defbu.DistanceUnit.CM, trig: DigitalPin = DigitalPin.P0, echo: DigitalPin = DigitalPin.P1): number {
        const trigPinNumber: number = trig        
        const echoPinNumber: number = echo
        
        const MAX_DIST_MICROMETER = 3000 * 1000
        const VELOCITY_OF_SOUND = 343 // 343 m/s at sea level and 20 C
        const MAX_PULSE_DURATION_US = Math.idiv(2 * MAX_DIST_MICROMETER, VELOCITY_OF_SOUND)
        const LEVEL_HIGH = 50
        const LEVEL_LOW = 33

        //Pulse
        pins.setPull(trigPinNumber, PinPullMode.PullNone)
        pins.digitalWritePin(trigPinNumber, 0)
        control.waitMicros(2)
        pins.digitalWritePin(trigPinNumber, 1)
        control.waitMicros(10)
        pins.digitalWritePin(trigPinNumber, 0)
        control.waitMicros(0)

        //Receive echo
        const pulseDuration = pins.pulseIn(echoPinNumber, PulseValue.High, MAX_PULSE_DURATION_US)
        let objectDistance = Math.idiv(pulseDuration * VELOCITY_OF_SOUND * LEVEL_HIGH, 2 * LEVEL_LOW)

        // Map timeouts to max distance and clip at max distance
        if (objectDistance === 0 || objectDistance > MAX_DIST_MICROMETER) {
            objectDistance = MAX_DIST_MICROMETER
        }
        return Math.idiv(objectDistance, unit)
    }

    /**
     * Measures the distance with HC-SR04: range 0 - 300 cm
     * @param unit unit of distance, eg: defbu.DistanceUnit.CM
     */
    //% blockId="defbu_get_distance" block="distance in %unit"
    //% unit.fieldEditor="gridpicker" trig.fieldOptions.columns=3
    //% unit.fieldOptions.tooltips="false"
    //% group="Distance"
    //% weight=45
    export function getDistance(unit: defbu.DistanceUnit = defbu.DistanceUnit.CM): number {
       return getDistancePins(unit,DigitalPin.P0,DigitalPin.P1)
    }
}