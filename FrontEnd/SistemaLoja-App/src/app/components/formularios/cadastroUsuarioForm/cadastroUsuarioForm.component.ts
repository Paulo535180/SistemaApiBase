import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastroUsuarioForm',
  templateUrl:'./cadastroUsuarioForm.component.html',
  styleUrls: ['./cadastroUsuarioForm.component.scss']
})
export class CadastroUsuarioFormComponent implements OnInit {

  public formularioUsuario: FormGroup = new FormGroup({});
  usuario

  @Input() public ocultar: boolean = false;
  @Output() evento = new EventEmitter();

  constructor(private formBuilder: FormBuilder) { }

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
    this.formularioUsuario = this.formBuilder.group(
      {
        nome:['',[Validators.required, Validators.minLength(10), Validators.maxLength(100)]],
        email: ['',Validators.required],
        login: ['',Validators.required],
        telefone: [''],
        cpf: ['',[Validators.required, Validators.maxLength(14)]],
        dataNascimento: [''],
        senha: ['',[Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
        confirmaSenha: ['',[Validators.required,Validators.minLength(6), Validators.maxLength(20)]],
        imagem: [''],
      });
  }

  public resetForm():void{
    this.formularioUsuario.reset();
    this.evento.emit();
  }

  public async inserirUsuario() {
   this.usuario = Object.assign({}, this.usuario, this.formularioUsuario)

  }
}
