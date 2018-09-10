# DEFBU Blocks

This library provides support for the different DEFBU Blocks, see https://www.defbu.nl

## Distance HC-SR04
Reads distance in ``mm``, ``cm``, ``inch`` or ``μs``.

### Distance Units

``DistanceUnit.CM`` is cm

``DistanceUnit.MM`` is mm

``DistanceUnit.INCH`` is inch

``DistanceUnit.US`` is μs

### Functions

```typescript
getDistance(unit: defbu.DistanceUnit = defbu.DistanceUnit.CM): number
getDistancePins(unit: defbu.DistanceUnit = defbu.DistanceUnit.CM, trig: DigitalPin = DigitalPin.P0, echo: DigitalPin = DigitalPin.P1): number
```

### Example

```typescript
let distance = defbu.getDistance(defbu.DistanceUnit.CM)
let distancepins = defbu.getDistancePins(defbu.DistanceUnit.CM, DigitalPin.P0, DigitalPin.P1)
```

## Distance DS18B20
Reads distance in ``°C``, ``°dC``, ``°cC``, ``°F``, ``°dF``, ``°cF``, ``raw °C`` or ``raw °F``.

### Temperature Units

``TemperatureUnit.C`` is °C

``TemperatureUnit.DC`` is °dC

``TemperatureUnit.CC`` is °cC

``TemperatureUnit.F`` is °F

``TemperatureUnit.DF`` is °dF

``TemperatureUnit.CF`` is °cF

``TemperatureUnit.RAWC`` is floating point in °C

``TemperatureUnit.RAWF`` is floating point in °F

### Functions

```typescript
getTemperature(unit: defbu.TemperatureUnit = defbu.TemperatureUnit.C): number
getTemperaturePin(unit: defbu.TemperatureUnit = defbu.TemperatureUnit.C, dataPin: DigitalPin = DigitalPin.P0): number
```

### Example

```typescript
let temperature = defbu.getTemperature(defbu.TemperatureUnit.C)
let temperaturePin = defbu.getTemperaturePin(defbu.TemperatureUnit.C, DigitalPin.P0)
```

## License

MIT

## Supported targets

* for PXT/microbit