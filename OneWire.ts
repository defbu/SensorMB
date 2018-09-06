namespace defbu {

    export class OneWire {
        readPin: DigitalPin
        writePin: DigitalPin


        constructor(readPin: DigitalPin,writePin: DigitalPin) {
            this.readPin = readPin
            this.writePin = writePin
        }

        init() : number {
            pins.digitalWritePin(this.writePin,1)
            pins.setPull(this.writePin,PinPullMode.PullUp)
            pins.digitalReadPin(this.readPin)

            pins.digitalWritePin(this.writePin,0)
            control.waitMicros(600)
            pins.digitalWritePin(this.writePin,1)
            control.waitMicros(30)
            let val =  pins.digitalReadPin(this.readPin)
            control.waitMicros(600)
            return val
        }

        sendZero() : void {
            pins.digitalWritePin(this.writePin,0)
            control.waitMicros(75)
            pins.digitalWritePin(this.writePin,1)
            control.waitMicros(6)
        }

        sendOne() : void {
            pins.digitalWritePin(this.writePin,0)
            control.waitMicros(1)
            pins.digitalWritePin(this.writePin,1)
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
            pins.digitalWritePin(this.writePin,0)
            pins.digitalWritePin(this.writePin,1)
            control.waitMicros(20)
            let b = pins.digitalReadPin(this.readPin)
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