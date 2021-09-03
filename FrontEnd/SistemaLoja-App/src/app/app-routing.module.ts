import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PerfisComponent } from './components/perfis/perfis.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { CadastroUsuarioFormComponent } from './components/formularios/cadastroUsuarioForm/cadastroUsuarioForm.component';

const routes: Routes = [
  {path: 'cadastro', component: CadastroUsuarioFormComponent},
  {path: 'usuario', redirectTo: 'usuario/listagem' },
  {path: 'usuario', component: UsuarioComponent},
  {path: 'perfil', component: PerfisComponent},
  {path: 'dashboard', component: DashboardComponent},
  // {path: '', redirectTo:'dashboard', pathMatch: 'full'},
  // {path: '**', redirectTo:'dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
