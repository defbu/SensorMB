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

    //% shim=defbu::getTemperature
    export function Temperature(p: number): number {
        // Fake function for simulator
        return 0
    }

    /**
     * Measures the temperature with DS18B20: range -55°C - 125 °C or -67°F - 257°F
     * @param unit unit of distance, eg: defbu.TemperatureUnit.C
     * @param dataPin Data pin, eg: DigitalPin.P0
     */
    //% blockId="defbu_get_temperature" block="temperature in %unit | data %dataPin"
    //% unit.fieldEditor="gridpicker" trig.fieldOptions.columns=3
    //% unit.fieldOptions.tooltips="false"
    //% dataPin.fieldEditor="gridpicker" trig.fieldOptions.columns=3
    //% dataPin.fieldOptions.tooltips="false"
    //% group="Temperature"
    //% weight=45
    export function getTemperature(unit: defbu.TemperatureUnit = defbu.TemperatureUnit.C, dataPin: DigitalPin = DigitalPin.P0): string { 
      /*       
        let temp = Temperature(dataPin);
        let x = (temp / 100)
        let y = (temp % 100)
        let z = ''
        if(temp >= 0){
          if(y < 10){
            z = x.toString() + '.0' + y.toString()
          }
          else{
            z = x.toString() + '.' + y.toString()
          }
        }
        else if(temp < 0){
          if(y > -10){
            z = '-' + (-x).toString() + '.0' + (-y).toString()
          }
          else{
            z = '-' + (-x).toString() + '.' + (-y).toString()
          }
        }
        return z
      */
      return "ja"
    }

}