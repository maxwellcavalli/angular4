import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: `[mask]`
})
export class MxMaskDirective {

    constructor(private el: ElementRef) { }

    private specialKeys: Array<string> = ['Backspace', 'Tab', 'End', 'Home'];
    private literalPattern = /[0\*]/;
    private numberPattern = /[0-9]/;

    @Input() mask: any;

    @HostListener('keyup', ['$event']) onKeyUp(event: any) {
        let value = this.el.nativeElement.value;
        let mask = this.mask.mask;

        // If user pressed DEL or BACK SPACE, clean the value'
        // if (this.specialKeys.indexOf(event.key) !== -1) {
        //     this.el.nativeElement.value = "";
        //     return;
        // }

        let newValue = "";

        for (let vId = 0, mId = 0; mId < mask.length;) {
            if (mId >= value.length)
                break;

            // Number expected but got a different value, store only the valid portion
            if (mask[mId] == '0' && value[vId].match(this.numberPattern) == null) {
                break;
            }

            // Found a literal
            while (mask[mId].match(this.literalPattern) == null) {
                if (value[vId] == mask[mId])
                    break;

                newValue += mask[mId++];
            }

            newValue += value[vId++];
            mId++;
        }

        this.el.nativeElement.value = newValue;
    } catch(e: any) { }

}