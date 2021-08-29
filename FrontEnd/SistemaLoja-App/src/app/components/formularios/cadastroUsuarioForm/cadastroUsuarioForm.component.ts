import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgBrazilValidators } from 'ng-brazil';
import { Usuario } from 'src/app/models/Usuario';
import {utilsBr} from 'js-brasil'
import { CustomValidators } from 'ng2-validation';
import { UsuarioService } from 'src/app/services/Usuario.service';

@Component({
  selector: 'app-cadastroUsuarioForm',
  templateUrl:'./cadastroUsuarioForm.component.html',
  styleUrls: ['./cadastroUsuarioForm.component.scss']
})
export class CadastroUsuarioFormComponent implements OnInit {

  public formularioUsuario: FormGroup = new FormGroup({});
  public usuario:Usuario;

  MASKS = utilsBr.MASKS;

  @Input() public ocultar: boolean = false;
  @Output() evento = new EventEmitter();

  constructor(private formBuilder: FormBuilder, private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.validacaoForm();
  }

  public apresentacaoImagem()
  {
    let estilo = "col-md-6 modal-cadastro d-none d-md-block";
    if(this.ocultar)
      estilo = "col-md-6 modal-cadastro d-none"
    return estilo;
  }

  public apresentacaoformularioUsuario()
  {
    let estilo = "col-md-6";
    if(this.ocultar)
      estilo = "col-md-12"
    return estilo;
  }

  public validacaoForm () :void {

    let senha = new FormControl ('', [Validators.required, CustomValidators.rangeLength([6,20])]);
    let confirmaSenha = new FormControl ('', [Validators.required, CustomValidators.rangeLength([6,20]), CustomValidators.equalTo(senha)]);

    this.formularioUsuario = this.formBuilder.group(
      {
        nome:['',[Validators.required, Validators.minLength(10), Validators.maxLength(100)]],
        email: ['',[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
        login: ['',Validators.required],
        telefone: [''],
        cpf: ['',[Validators.required, Validators.maxLength(14), NgBrazilValidators.cpf]],
        dataNascimento: [''],
        senha: senha,
        confirmaSenha: confirmaSenha,
        imagem: [''],
      });
  }

  public resetForm():void{
    this.formularioUsuario.reset();
    this.evento.emit();
  }

  public async inserirUsuario() {
   this.usuario = Object.assign({}, this.usuario, this.formularioUsuario);
   this.usuarioService.criarUsuario(this.usuario)
  }
}
