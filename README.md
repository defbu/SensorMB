# DEFBU Blocks

This library provides support for the different DEFBU Blocks, see https://www.defbu.nl

## Distance HC-SR04
Reads distance in ``mm``, ``cm`` or ``inch``.

### Distance Units

``DistanceUnit.CM`` is cm

``DistanceUnit.MM`` is mm

``DistanceUnit.INCH`` is inch

### Functions

```typescript
getDistance(unit: defbu.DistanceUnit = defbu.DistanceUnit.CM, trig: DigitalPin = DigitalPin.P0, echo: DigitalPin = DigitalPin.P1): number
```

### Example

```typescript
let distance = defbu.getDistance(defbu.DistanceUnit.CM, DigitalPin.P0, DigitalPin.P1)
```

## License

MIT

## Supported targets

* for PXT/microbit