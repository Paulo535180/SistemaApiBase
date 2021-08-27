//APLICAÇÃO
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

//NGX-BOOTSTRAP
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from "ngx-spinner";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//MÓDULOS
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { UsuarioListaComponent } from './components/usuario/usuario-lista/usuario-lista.component';
import { NavComponent } from './shared/nav/nav.component';
import { PerfisComponent } from './components/perfis/perfis.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TituloComponent } from './shared/titulo/titulo.component';
import { LoginComponent } from './components/login/login.component';

//SERVICES
import { UsuarioService } from './services/Usuario.service';

//PIPES
import { DateTimeFormatPipe } from './helpers/DateTimeFormat.pipe';
import { CpfFormatPipe } from './helpers/CpfFormat.pipe';

//DATATABLES
import { DataTablesModule } from "angular-datatables";
import { NgxMaskModule } from 'ngx-mask';
import { CadastroUsuarioFormComponent } from './components/formularios/cadastroUsuarioForm/cadastroUsuarioForm.component';
import { CadastroPerfilFormComponent } from './components/formularios/cadastroPerfilForm/cadastroPerfilForm.component';

@NgModule({

  declarations: [
    AppComponent,
    UsuarioComponent,
    NavComponent,
    DashboardComponent,
    PerfisComponent,
    TituloComponent,
    DateTimeFormatPipe,
    CpfFormatPipe,
    UsuarioListaComponent,
    LoginComponent,
    CadastroUsuarioFormComponent,
    CadastroPerfilFormComponent
   ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    HttpClientModule,
    BsDropdownModule.forRoot(),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    ToastrModule.forRoot(
      {
        timeOut: 5000,
        positionClass: 'toast-bottom-right',
        preventDuplicates: true,
        progressBar:true,
      }
    ),
    NgxSpinnerModule,
    DataTablesModule,
    NgxMaskModule.forRoot()
  ],

  providers: [
    UsuarioService
  ],

  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {

}
