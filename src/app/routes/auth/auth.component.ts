import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from './user';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  authForm!: FormGroup;
  user = new User();
  submitted = false;

  
  
  constructor(private fb: FormBuilder, private router: Router) {}
    
  ngOnInit(): void {
    this.authForm = this.fb.group({
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  get f() {return this.authForm.controls;}
  
  onSubmit() {
    console.log(this.authForm.value);
    console.log(this.authForm.status);
    this.submitted = true;

    this.router.navigate(['/login']);

    // stop here if form is invalid
    if (this.authForm.invalid) {
      return;
    }
    alert('SUCCESS!!' + JSON.stringify(this.authForm.value))
  }

  // onReset() {
  //   this.submitted = false;
  //   this.authForm.reset();
  // }

}
