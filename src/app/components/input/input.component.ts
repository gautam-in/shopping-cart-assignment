import {Component, forwardRef, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ControlValueAccessor, FormControl, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements OnInit, ControlValueAccessor {

  @Input() name = '';
  @Input() label = '';
  @Input() type = '';
  @Input() formGroup: FormGroup;
  @Input() formControlName = '';

  set value(value) {
    this.formGroup.patchValue({[this.formControlName]: value});
    this.onChange(value);
    this.onTouched();
  }

  get value() {
    return this.formGroup[this.formControlName].value;
  }

  ngOnInit() {
  }

  onChange: any = () => {};

  onTouched = () => {};

  writeValue(value) {
    if (value) {
      this.value = value;
    }

    if (value === null) {
      this.formGroup.patchValue({[this.formControlName]: null});
    }
  }

  registerOnChange(fn): void {
    this.onChange = fn;
  }

  registerOnTouched(fn): void {
    this.onTouched = fn;
  }
}
