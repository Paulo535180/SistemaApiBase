import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Perfil } from 'src/app/models/Perfil';

@Component({
  selector: 'app-cadastroPerfilForm',
  templateUrl: './cadastroPerfilForm.component.html',
  styleUrls: ['./cadastroPerfilForm.component.scss']
})
export class CadastroPerfilFormComponent implements OnInit {


  @ViewChild('lgModal', { static: false }) modalPerfil: ModalDirective= {} as ModalDirective;
  public formularioPerfil: FormGroup = new FormGroup({});
  @Output() evento = new EventEmitter();
  public perfil:Perfil

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.validacaoFormPerfil();
  }

  public validacaoFormPerfil () :void {
    this.formularioPerfil = this.formBuilder.group(
      {
        perfil: ['',[Validators.required, Validators.minLength(10), Validators.maxLength(50)]],
        descricao: ['',[Validators.required,Validators.minLength(10),Validators.maxLength(200)]],
      });
  }

  public resetForm():void{
    this.formularioPerfil.reset();
    this.evento.emit();
  }

  public async adicionarPerfil(){
    this.perfil = Object.assign({}, this.perfil, this.formularioPerfil.value)
    console.log(this.perfil);
  }
}
