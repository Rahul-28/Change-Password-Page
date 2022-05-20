import { Component, Input, OnChanges,SimpleChanges } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnChanges {

  @Input() passcodecontrol!: FormControl;
  public showpassword :boolean = false;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.passcodecontrol.addValidators(Validators.required);
    this.passcodecontrol.addValidators(Validators.minLength(8))
  }

  ngOnInit(): void {
  }

  togglePasscodeVisibty() {
    this.showpassword=! this.showpassword;
  }
}
