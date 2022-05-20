import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup, ValidationErrors } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  constructor() { }
  
  static match(password: string, confirmPassword: string): any { 
    return (control: AbstractControl): ValidationErrors | null => {
      const formgroup = control as FormGroup
      const passwordvalue = formgroup.get('password')?.value
      const confirmPasswordvalue = formgroup.get('confirmPassword')?.value
      if(passwordvalue === confirmPasswordvalue) {
          return null;
      }
      else {
          return {mismatch: true} 
      }
    }
  }
}
