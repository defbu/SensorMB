//% color=#ff4500 icon="\uf2db" block="DEFBU Blocks"
namespace defbu {

    export const enum DistanceUnit {
        //% block="cm"
        CM = 10000,
        //% block="mm"
        MM = 1000,
        //% block="inch"
        INCH = 25400
    }

        /**
         * Measures the distance: range 0 - 300 cm
         * @param unit unit of distance, eg: defbu.DistanceUnit.CM
         * @param trig pin connected to trig, eg: DigitalPin.P0
         * @param echo Pin connected to echo, eg: DigitalPin.P1
         */
        //% blockId="defbu_get_distance" block="distance in %unit | trig %trig | echo %echo"
        //% trig.fieldEditor="gridpicker" trig.fieldOptions.columns=3
        //% trig.fieldOptions.tooltips="false"
        //% echo.fieldEditor="gridpicker" echo.fieldOptions.columns=3
        //% echo.fieldOptions.tooltips="false"
        //% weight=45
        export function getDistance(unit: defbu.DistanceUnit = defbu.DistanceUnit.CM, trig: DigitalPin = DigitalPin.P0, echo: DigitalPin = DigitalPin.P1): number {
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
}