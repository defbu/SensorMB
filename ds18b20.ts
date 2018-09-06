//% color=#ff4500 icon="\uf2db" block="DEFBU blocks"
//% groups=['Distance','Temperature']
namespace defbu {

    export const enum TemperatureUnit {
        //% block="°C"
        C = 1600,
        //% block="°dC"
        DC = 160,
        //% block="°cC"
        CC = 16,
        //% block="°F"
        F = 100,
        //% block="°dF"
        DF = 10,
        //% block="°cF"
        CF = 1
    }



    /**
     * Measures the temperature with DS18B20: range -55°C - 125 °C or -67°F - 257°F
     * @param unit unit of distance, eg: defbu.TemperatureUnit.C
     * @param writePin Pin connected to out, eg: DigitalPin.P0
     * @param readPin Pin connected to in, eg: DigitalPin.P1
     */
    //% blockId="defbu_get_temperature" block="temperature in %unit | write %writePin | read %readPin"
    //% unit.fieldEditor="gridpicker" trig.fieldOptions.columns=3
    //% unit.fieldOptions.tooltips="false"
    //% trig.fieldEditor="gridpicker" trig.fieldOptions.columns=3
    //% trig.fieldOptions.tooltips="false"
    //% echo.fieldEditor="gridpicker" echo.fieldOptions.columns=3
    //% echo.fieldOptions.tooltips="false"
    //% group="Temperature"
    //% weight=45
    export function getTemperature(unit: defbu.TemperatureUnit = defbu.TemperatureUnit.C, writePin: DigitalPin = DigitalPin.P0, readPin: DigitalPin = DigitalPin.P1): number {        
        let sensor = new defbu.OneWire(readPin,writePin)
        let val = sensor.init()
        let temp = 1000
        if (val != 1) {
            sensor.writeByte(0xCC)
            sensor.writeByte(0xBE)
            let b1 = sensor.readByte()
            let b2 = sensor.readByte()            
            let temp = (b2<<8 | b1)
            if(b2 & 0x80) temp=temp | 0xFFFF0000
            temp = temp * 100
            if ((unit == TemperatureUnit.C) || (unit == TemperatureUnit.DC) || (unit == TemperatureUnit.CC)) {
                return Math.idiv(temp, unit)
            }
            else {
                temp = Math.idiv(temp * 9, 5) + 3200
                return Math.idiv(temp, unit)
            }
        } 
    }

}