import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './components/principal/principal/principal.component'
import { LoginComponent } from './components/principal/login/login.component'
import { AdministrarProductosComponent } from './components/menu/administrar-productos/administrar-productos.component'

const routes: Routes = [
  {path: 'Principal', component: PrincipalComponent},
  {path: 'Login', component: LoginComponent},
  {path: 'AP', component: AdministrarProductosComponent},
  {path: '', redirectTo: '/Principal', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
