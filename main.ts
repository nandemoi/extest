namespace test {
    export function test (index: number): void {
        const y = Math.floor(index / 5);
        const x = Math.floor(index % 5);
        led.plot (x, y)
    }
}