import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../../../services/auth.service';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormGroupDirective, NgForm } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit {
  mensajeError: string;

  signin: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required ]),
    password: new FormControl('', [Validators.required, Validators.min(3) ])
  });s
  hide = true;
  get emailInput() { return this.signin.get('email'); }
  get passwordInput() { return this.signin.get('password'); }  

emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();

  constructor(private router: Router, public authService: AuthService) { 
    this.mensajeError = '';
  }

  ngOnInit(): void {
  }

  login(username: string, password: string): boolean {
    this.mensajeError = '';
    if (!this.authService.login(username, password)){
      this.mensajeError = 'Login incorrecto.';
      setTimeout(
        function() {
          return this.mensajeError = 'Login incorrecto.';
        }.bind(this), 2500
      );
    }
    this.router.navigate(['/AP'])
    return
  }

  logout(): boolean {
    this.authService.logout();
    return false;
  }

  NavegarHaciaAdministrarProductos(){
    this.router.navigate(['/AP'])
  }
}


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}