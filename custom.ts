
/**
* Use this file to define custom functions and blocks.
* Read more at https://makecode.microbit.org/blocks/custom
*/


// Define a variable internally within the namespace to hold our value
    let calibration_value: number = 0;

/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace custom {
    /**
     * TODO: forward function 4
     */
    //% block
    export function forward(): void {
        // Add code here
        pins.servoWritePin(AnalogPin.P0, 180)
        pins.servoWritePin(AnalogPin.P1, 0)
        basic.pause(1080 * calibration_value)
        pins.servoWritePin(AnalogPin.P0, 90)
        pins.servoWritePin(AnalogPin.P1, 90)
        music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.UntilDone)
    }

        /**
         * Set the internal calibration value.
         * @param value The value to set the calibration to, eg: 100
         */
        //% block="set calibration value to %value"
        //% value.min=0 value.max=1023
        //% group="Configuration"
        export function setCali(value: number): void {
            calibration_value = value;
        }

        /**
         * Show the currently stored calibration value on the LED screen.
         */
        //% block="show calibration value"
        //% group="Display"
        export function showCali(): void {
            basic.showNumber(calibration_value);
        }
    
}