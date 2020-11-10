import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../../../services/auth.service';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormGroupDirective, NgForm } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { auth, generateUserDocument } from '../../../../firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit {
  mensajeError: string;
  mensajeError2: string;

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

  logout(): boolean {
    this.authService.logout();
    return false;
  }

  NavegarHaciaAdministrarProductos(){
    this.router.navigate(['/AP'])
  }

  ingresar(proveedor: string){
    console.log( proveedor )
  }
  
  inicioDeSesionEmailyContrasena = (event) => {
    let email = (document.getElementById('oficialUsuario') as HTMLInputElement).value;
    let password = (document.getElementById('oficialPassword') as HTMLInputElement).value;
    event.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
    .then( res => {
      this.NavegarHaciaAdministrarProductos();
      this.authService.setUser(res.user.uid);
    }).catch(error => {
      //setError("Error signing in with password and email!");
      this.mensajeError = 'Error1 ' + error;
      console.error("Error signing in with password and email", error);
    });
  };

  CrearUsuarioEmailyContrasena = async (event) => {
    event.preventDefault();
    let name = (document.getElementById('nombreUsuario') as HTMLInputElement).value;
    let email = (document.getElementById('emailUsuario') as HTMLInputElement).value;
    let password = (document.getElementById('passwordUsuario') as HTMLInputElement).value;
    //console.log('hola mundo 2 ' + name + ' ' + email + ' ' + password);
    try{
      const {user} = await auth.createUserWithEmailAndPassword(email, password);
      generateUserDocument(user, {name});
    }
    catch(error){
      //setError('Error al registrarse con correo y contraseña');
      this.mensajeError2 = 'Error2 ' + error;
    }
  };
}


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}