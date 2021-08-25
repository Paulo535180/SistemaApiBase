import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PerfisComponent } from './components/perfis/perfis.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { LoginComponent } from './components/login/login.component';
import { UsuarioListaComponent } from './components/usuario/usuario-lista/usuario-lista.component';
import { UsuarioComponent } from './components/usuario/usuario.component';

const routes: Routes = [
  {path: 'cadastro', component: CadastroComponent},
  {path: 'login', component: LoginComponent},

  // {path: 'usuario', redirectTo: 'usuario/listagem' },
  {path: 'usuario', component: UsuarioComponent,
    children:
    [
      { path: '',  component: UsuarioListaComponent },
      { path: 'listagem', component: UsuarioListaComponent },
    ]
  },

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
