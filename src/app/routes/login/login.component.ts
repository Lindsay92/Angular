import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

loginForm = this.fb.group({
  email: ['', [Validators.required, Validators.email]],
  password: ['', [Validators.required, Validators.minLength(8)]]
});

constructor(private fb: FormBuilder, private route: Router) {}
  
ngOnInit(): void {
  
}

onSubmit() {
  console.log(this.loginForm.value);
  console.log(this.loginForm.status);
  this.route.navigate(['/activities']);
}

// reset() {
//   this.loginForm.reset();
// }
//ça ne reset pas
}
