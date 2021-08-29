//APLICAÇÃO
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

//NGX-BOOTSTRAP
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from "ngx-spinner";
import { NgBrazil } from 'ng-brazil';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';

//MÓDULOS
import { AppComponent } from './app.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { UsuarioListaComponent } from './components/usuario/usuario-lista/usuario-lista.component';
import { NavComponent } from './shared/nav/nav.component';
import { PerfisComponent } from './components/perfis/perfis.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TituloComponent } from './shared/titulo/titulo.component';
import { CadastroUsuarioFormComponent } from './components/formularios/cadastroUsuarioForm/cadastroUsuarioForm.component';
import { CadastroPerfilFormComponent } from './components/formularios/cadastroPerfilForm/cadastroPerfilForm.component';
import { LoginComponent } from './components/conta/login/login.component';
import { CadastroComponent } from './components/conta/cadastro/cadastro.component';

//SERVICES
import { UsuarioService } from './services/Usuario.service';
import { PerfilService } from './services/Perfil.service';

//PIPES e VALIDATIONS
import { DateTimeFormatPipe } from './helpers/DateTimeFormat.pipe';
import { CpfFormatPipe } from './helpers/CpfFormat.pipe';
import { CelphoneFormatPipe } from './helpers/CelphoneFormat.pipe';
import { TextMaskModule } from 'angular2-text-mask';
import { NgxMaskModule } from 'ngx-mask';

//DATATABLES
import { DataTablesModule } from "angular-datatables";

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
    CelphoneFormatPipe,
    UsuarioListaComponent,
    CadastroUsuarioFormComponent,
    CadastroPerfilFormComponent,
    LoginComponent,
    CadastroComponent
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
    NgxMaskModule.forRoot(),
    NgBrazil,
    TextMaskModule,
    CustomFormsModule
  ],

  providers: [
    UsuarioService,
    PerfilService
  ],

  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {

}
