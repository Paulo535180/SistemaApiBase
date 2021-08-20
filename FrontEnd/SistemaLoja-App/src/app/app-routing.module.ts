import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { PerfisComponent } from './components/perfis/perfis.component';
import { UsuarioComponent } from './components/usuario/usuario.component';

const routes: Routes = [
  {path: 'usuario', component: UsuarioComponent},
  {path: 'perfil', component: PerfisComponent},
  {path: 'inicio', component: InicioComponent},
  {path: '', redirectTo:'inicio', pathMatch: 'full'},
  {path: '**', redirectTo:'inicio', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
