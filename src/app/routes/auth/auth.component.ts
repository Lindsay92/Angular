import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  authForm = this.fb.group({
    lastName: ['', Validators.required],
    firstName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  });
  
  constructor(private fb: FormBuilder, private route: Router) {}
    
  ngOnInit(): void {
    
  }
  
  onSubmit() {
    console.log(this.authForm.value);
    console.log(this.authForm.status);
    this.route.navigate(['/login']);
  }

}
