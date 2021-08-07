namespace test {
    /**
     * Address 
     */
    //% blockId=testext
    //% block="plot at $index"
    //% index.min=0 index.max=25
    export function test (index: number): void {
        const y = Math.floor(index / 5);
        const x = Math.floor(index % 5);
        led.plot (x, y)
    }
}