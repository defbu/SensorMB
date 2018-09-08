namespace defbu {

    export class OneWire {
        dataPin: DigitalPin


        constructor(dataPin: DigitalPin) {
            this.dataPin = dataPin
        }

        reset() : boolean {
            pins.setPull(this.dataPin,PinPullMode.PullUp)
            pins.digitalWritePin(this.dataPin,0)
            control.waitMicros(480)
            pins.digitalWritePin(this.dataPin,1)
            control.waitMicros(70)
            let val =  pins.digitalReadPin(this.dataPin)
            control.waitMicros(410)
            if (val == 0) {
                return true
            }
            else {
                return false
            }
        }

        writeBit( b: number) : void {
            if (b == 1) {
                pins.digitalWritePin(this.dataPin,0)
                control.waitMicros(6)
                pins.digitalWritePin(this.dataPin,1)
                control.waitMicros(64)
            }
            else {
                pins.digitalWritePin(this.dataPin,0)
                control.waitMicros(60)
                pins.digitalWritePin(this.dataPin,1)
                control.waitMicros(10)
            }
        }

        readBit() : number {
            pins.digitalWritePin(this.dataPin,0)
            control.waitMicros(6)
            pins.digitalWritePin(this.dataPin,1)
            control.waitMicros(9)
            let b = pins.digitalReadPin(this.dataPin)
            control.waitMicros(55)
            return b            
        }

        writeByte(byte: number) {
            let i = 0
            for (i = 0; i < 8; i++) {
                this.writeBit(byte & 0x01)
                byte = byte>>1
            }
        }
        readByte() : number {
            let i = 0
            let result = 0
            for (i = 0; i < 8; i++) {
                result >>= 1
                if (this.readBit()) {
                    result |= 0x80
                }
            }
            return result
        }

        skip() : void {
            this.writeByte(0xCC)
        }


        /*
        convert() : string {
            this.writeByte(0x44)
            let i = 0
            for (i = 0; i < 1000; i++) {
                control.waitMicros(900)
                let b = this.readBit()
                if (b == 1) {
                    break
                }
            }
            return ("j")
        }
        */


    }
}