import { Component, OnInit } from '@angular/core';
import { ValidatorService } from './validator.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Angular-Playground';
  sampleForm!: FormGroup;

  constructor(private fb : FormBuilder) {}

  ngOnInit(): void {
    this.sampleForm = this.fb.group({
      user:  ['Rahul',[Validators.required,Validators.minLength(5)]],
      email: ['defaultmail@gmail.com',[Validators.required,Validators.email,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      password: [''],
      confirmPassword: ['']
    },
    {
      validators: ValidatorService.match('password','confirmPassword')
    })
  }

  get password(): FormControl {
    return this.sampleForm.get('password') as FormControl;
  }
  
  get confirmpassword(): FormControl {
    return this.sampleForm.get('confirmPassword') as FormControl;
  }

  onConfirm(): void {
    console.log(this.sampleForm);
  }

  clearAll(): void {
    this.sampleForm.reset();
  }
  }
  