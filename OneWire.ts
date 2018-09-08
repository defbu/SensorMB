namespace defbu {

    export class OneWire {
        dataPin: DigitalPin


        constructor(dataPin: DigitalPin) {
            this.dataPin = dataPin
        }

        init() : number {
            pins.digitalWritePin(this.dataPin,1)
            pins.setPull(this.dataPin,PinPullMode.PullNone)
            pins.digitalReadPin(this.dataPin)

            pins.digitalWritePin(this.dataPin,0)
            control.waitMicros(500)
            pins.digitalWritePin(this.dataPin,1)
            control.waitMicros(30)
            let val =  pins.digitalReadPin(this.dataPin)
            control.waitMicros(500)
            return val
        }

        sendZero() : void {
            pins.digitalWritePin(this.dataPin,0)
            control.waitMicros(75)
            pins.digitalWritePin(this.dataPin,1)
            control.waitMicros(6)
        }

        sendOne() : void {
            pins.digitalWritePin(this.dataPin,0)
            control.waitMicros(1)
            pins.digitalWritePin(this.dataPin,1)
            control.waitMicros(80)
        }

        writeBit( b: number) : void {
            if (b == 1) {
                this.sendOne()
            }
            else {
                this.sendZero()
            }
        }

        writeByte(byte: number) {
            let i = 0
            for (i = 0; i < 8; i++) {
                if (byte & 1) {
                    this.writeBit(1)
                }
                else {
                    this.writeBit(0)
                }
                byte = byte>>1
            }
        }

        readBit() : number {
            pins.digitalWritePin(this.dataPin,0)
            pins.digitalWritePin(this.dataPin,1)
            control.waitMicros(20)
            let b = pins.digitalReadPin(this.dataPin)
            control.waitMicros(60)
            return b            
        }

        readByte(): number {
            let byte = 0
            let i = 0
            for (i = 0; i < 8; i++) {
                byte = byte | this.readBit()<< i
            }
            return byte
        }

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


    }
}