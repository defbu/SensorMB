//% color=#ff4500 icon="\uf2db" block="DEFBU blocks"
//% groups=['Distance','Temperature']
namespace defbu {

    export const enum TemperatureUnit {
        //% block="°C"
        C = 0,
        //% block="°dC"
        DC = 1,
        //% block="°cC"
        CC = 2,
        //% block="°F"
        F = 3,
        //% block="°dF"
        DF = 4,
        //% block="°cF"
        CF = 5,
        //% block="raw °C"
        RAWC = 6,
        //% block="raw °F"
        RAWF = 7
    }

    //% shim=defbu::Temperature
    export function Temperature(p: number): number {
        // Fake function for simulator
        return 0
    }

    /**
     * Measures the temperature with DS18B20: range -55°C - 125 °C or -67°F - 257°F
     * @param unit unit of temperature, eg: defbu.TemperatureUnit.C
     * @param dataPin Data pin, eg: DigitalPin.P0
     */
    //% blockId="defbu_get_temperature" block="temperature in %unit"
    //% unit.fieldEditor="gridpicker" trig.fieldOptions.columns=3
    //% unit.fieldOptions.tooltips="false"
    //% group="Temperature"
    //% weight=45
    export function getTemperature(unit: defbu.TemperatureUnit = defbu.TemperatureUnit.C): number {        
      return getTemperaturePin(unit,DigitalPin.P0)
    }

    
    /**
     * Measures the temperature with DS18B20: range -55°C - 125 °C or -67°F - 257°F
     * @param unit unit of temperature, eg: defbu.TemperatureUnit.C
     * @param dataPin Data pin, eg: DigitalPin.P0
     */
    //% blockId="defbu_get_temperaturepin" block="temperature in %unit | data %dataPin"
    //% unit.fieldEditor="gridpicker" trig.fieldOptions.columns=3
    //% unit.fieldOptions.tooltips="false"
    //% dataPin.fieldEditor="gridpicker" trig.fieldOptions.columns=3
    //% dataPin.fieldOptions.tooltips="false"
    //% group="Temperature"
    //% weight=45
    //% advanced=true
    export function getTemperaturePin(unit: defbu.TemperatureUnit = defbu.TemperatureUnit.C, dataPin: DigitalPin = DigitalPin.P0): number {        
      let temp = Temperature(dataPin);
      if (unit == TemperatureUnit.C) {
          return Math.idiv(temp , 100)
      }
      else if (unit == TemperatureUnit.DC) {
          return Math.idiv(temp , 10)
      }
      else if (unit == TemperatureUnit.CC) {
          return temp
      }
      else if (unit == TemperatureUnit.F) {
          return Math.idiv(temp * 9, 500) + 32
      }
      else if (unit == TemperatureUnit.DF) {
          return Math.idiv(temp * 9, 50) + 320
      }
      else if (unit == TemperatureUnit.CF) {
          return Math.idiv(temp * 9, 5) + 3200
      } 
      else if (unit == TemperatureUnit.RAWC) {
        return temp / 100
      }
      else {
        return temp * 9 / 100 + 32
      }
    }
}