import { Input, HostBinding } from "@angular/core";
import { Subject } from "rxjs";
import { NgControl, ControlValueAccessor } from "@angular/forms";
import { coerceBooleanProperty } from "@angular/cdk/coercion";
import { MatFormFieldControl } from "@angular/material";

const noop = () => { }

export class BaseMaterialComponent<T> implements MatFormFieldControl<T>, ControlValueAccessor {

    readonly id: string;
    readonly controlType?: string;

    writeValue(obj: any): void {
        this._value = obj;
    }

    stateChanges = new Subject<void>();
    ngControl: NgControl;
    focused: boolean;
    errorState: boolean = false;

    private _placeholder: string;
    protected _value: any;
    private _required = false;
    private _disabled = false;

    static nextId = 0;

    private onTouchedCallback: () => void = noop;
    protected onChangeCallback: (_: any) => void = noop;

    @Input() formControl: any;
    @Input() formControlName: string;


    registerOnChange(fn: any): void {
        this.onChangeCallback = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouchedCallback = fn;
    }

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

   
    get required() {
        return this._required;
    }

    @Input()
    set required(req) {
        this._required = coerceBooleanProperty(req);
        this.stateChanges.next();
    }

    
    get placeholder() {
        return this._placeholder;
    }

    @Input()
    set placeholder(plh) {
        this._placeholder = plh;
        this.stateChanges.next();
    }

   
    get disabled() {
        return this._disabled;
    }

    @Input()
    set disabled(dis) {
        this._disabled = coerceBooleanProperty(dis);
        this.stateChanges.next();
    }

    set value(valor: any | null) {
        if (this._value !== valor) {
            this._value = valor;
            this.onChangeCallback(this._value);
            this.stateChanges.next();
        }
    }

    get value() {
        return this._value;
    }

    public changeValue(event) {
        this.value = event;
    }
}