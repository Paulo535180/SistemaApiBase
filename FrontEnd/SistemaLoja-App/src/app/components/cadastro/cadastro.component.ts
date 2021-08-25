import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  public formulario: FormGroup = new FormGroup({});
  @Input() public ocultar: boolean = false;
  @Output() evento = new EventEmitter()

  constructor() { }

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

  public apresentacaoFormulario()
  {
    let estilo = "col-md-6";
    if(this.ocultar)
      estilo = "col-md-12"
    return estilo;
  }

  public validacaoForm () :void{
    this.formulario = new FormGroup(
      {
        nome: new FormControl(
          '',[Validators.required, Validators.minLength(10), Validators.maxLength(100)]
        ),
        email: new FormControl('',Validators.required),
        login: new FormControl('',Validators.required),
        telefone: new FormControl(),
        cpf: new FormControl(
          '',[Validators.required, Validators.maxLength(14)]
          ),
        dataNascimento: new FormControl(),
        senha: new FormControl('',[Validators.required, Validators.minLength(6), Validators.maxLength(10)]),
        confirmaSenha: new FormControl('',Validators.required),
        imagem: new FormControl(),
      });
  }

  public resetForm():void{
    this.formulario.reset();
    this.evento.emit();
  }
}
