import { MatFormFieldControl } from "@angular/material";
import { ControlValueAccessor, NgControl, ControlContainer } from "@angular/forms";
import { Subject } from "rxjs/Subject";
import { HostBinding, ElementRef, Renderer2, Input, Optional, Host, SkipSelf } from "@angular/core";
import { FocusMonitor } from "@angular/cdk/a11y";
import { coerceBooleanProperty } from "@angular/cdk/coercion";

const noop = () => { }

export abstract class BaseMaterialComponent implements MatFormFieldControl<any>, ControlValueAccessor {

    private onTouchedCallback: () => void = noop;
    private onChangeCallback: (_: any) => void = noop;

    //abstract ngOnDestroy(): void;

    @Input() formControl: any;
    @Input() formControlName: string;

    constructor(
        @Optional() public elRef: ElementRef,
        @Optional() public fm: FocusMonitor,
        @Optional() public renderer: Renderer2,
        @Optional() @Host() @SkipSelf() public controlContainer: ControlContainer) {

        fm.monitor(elRef.nativeElement, renderer, true).subscribe(origin => {
            this.focused = !!origin;
            this.stateChanges.next();
        });
    }

    ngOnDestroy() {
        this.stateChanges.complete();
        this.fm.stopMonitoring(this.elRef.nativeElement);
      }

    ngOnInit() {
        if (this.formControl === undefined) {
            this.formControl = this.controlContainer.control.get(this.formControlName);
        }
    }

    protected beforeWriteValue(obj: any) {
        return obj;
    }

    writeValue(obj: any): void {

        this.value = this.beforeWriteValue(obj);
    }

    registerOnChange(fn: any): void {
        this.onChangeCallback = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouchedCallback = fn;
    }

    stateChanges = new Subject<void>();
    ngControl: NgControl;
    focused: boolean;
    errorState: boolean = false;

    abstract readonly id: string;
    abstract readonly controlType?: string;

    private _placeholder: string;
    private _value: any;
    private _required = false;
    private _disabled = false;

    static nextId = 0;

    @HostBinding('attr.aria-describedby') describedBy = '';

    @HostBinding('class.floating')
    get shouldPlaceholderFloat() {
        return this.focused || !this.empty;
    }

    setDescribedByIds(ids: string[]) {
        this.describedBy = ids.join(' ');
    }

    onContainerClick(event: MouseEvent) {
        if ((event.target as Element).tagName.toLowerCase() != 'input') {
            event.srcElement.querySelector('input').focus();
        }
    }

    get empty() {
        return this._value === undefined || this._value === '';
    }

    @Input()
    get required() {
        return this._required;
    }
    set required(req) {
        this._required = coerceBooleanProperty(req);
        this.stateChanges.next();
    }

    @Input()
    get placeholder() {
        return this._placeholder;
    }

    set placeholder(plh) {
        this._placeholder = plh;
        this.stateChanges.next();
    }

    @Input()
    get disabled() {
        return this._disabled;
    }
    set disabled(dis) {
        this._disabled = coerceBooleanProperty(dis);
        this.stateChanges.next();
    }

    set value(valor: any | null) {
        this._value = valor;
        this.stateChanges.next();

        this.onChangeCallback(valor);
    }

    get value() {
        return this._value;
    }

    public clear() {
        this.writeValue('');
    }

    public changeValue(event) {
        this.writeValue(event);
    }
}
