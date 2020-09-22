import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './components/principal/principal/principal.component'
import { LoginComponent } from './components/principal/login/login.component'
import { AdministrarProductosComponent } from './components/menu/administrar-productos/administrar-productos.component'
import { ProtectedComponent } from './components/protected/protected/protected.component';
import { UsuarioLogueadoGuard } from './guards/usuario-logeado/usuario-logueado.guard';

const routes: Routes = [
  {path: '', redirectTo: '/Principal', pathMatch: 'full'},
  {path: 'Principal', component: PrincipalComponent},
  {path: 'Login', component: LoginComponent},
  {path: 'AP', component: AdministrarProductosComponent},
  {path: 'protected', component: ProtectedComponent, canActivate: [UsuarioLogueadoGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
