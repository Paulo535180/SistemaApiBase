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

//MÓDULOS
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { NavComponent } from './shared/nav/nav.component';
import { PerfisComponent } from './components/perfis/perfis.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { TituloComponent } from './shared/titulo/titulo.component';

//SERVICES
import { UsuarioService } from './services/Usuario.service';

//PIPES
import { DateTimeFormatPipe } from './helpers/DateTimeFormat.pipe';
import { CpfFormatPipe } from './helpers/CpfFormat.pipe';

@NgModule({

  declarations: [
    AppComponent,
    UsuarioComponent,
    NavComponent,
    InicioComponent,
    PerfisComponent,
    TituloComponent,
    DateTimeFormatPipe,
    CpfFormatPipe
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
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
  ],

  providers: [
    UsuarioService
  ],

  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
