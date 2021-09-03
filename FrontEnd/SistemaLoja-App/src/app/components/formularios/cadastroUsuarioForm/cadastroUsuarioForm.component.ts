import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChildren } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { NgBrazilValidators } from 'ng-brazil';
import { Usuario } from 'src/app/models/Usuario';
import {utilsBr} from 'js-brasil'
import { CustomValidators } from 'ng2-validation';
import { UsuarioService } from 'src/app/services/Usuario.service';
import { DisplayMessage, GenericFormValidation, ValidationMessage } from 'src/app/models/generic-form-validation';
import { fromEvent, merge, observable, Observable } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-cadastroUsuarioForm',
  templateUrl:'./cadastroUsuarioForm.component.html',
  styleUrls: ['./cadastroUsuarioForm.component.scss']
})
export class CadastroUsuarioFormComponent implements OnInit, AfterViewInit {

@ViewChildren(FormControlName, {read:ElementRef}) formInputElements: ElementRef[];

  public formularioUsuario: FormGroup = new FormGroup({});
  public usuario:Usuario;
  fileToUpload: File = null;
  usuarioFoto: string;
  MASKS = utilsBr.MASKS;

  validationMessages: ValidationMessage;
  genericValidator: GenericFormValidation;
  displayMessage: DisplayMessage = {};

  @Input() public ocultar: boolean = false;
  @Output() evento = new EventEmitter();

  constructor(private formBuilder: FormBuilder, private usuarioService: UsuarioService, private spinner: NgxSpinnerService, private toastr: ToastrService,) {
    this.validationMessages = {
      nome: {
        required: 'O Nome é requerido',
        minlength:'O Nome precisa ter no mínimo 10 caracteres',
        maxlength:'O Nome precisa ter no mínimo 100 caracteres'
      },
      email:{
        required:'O Email precisa ser preenchido',
        pattern: 'O Email precisar ser um email válido'
      },
      login:{
        required: 'O Login é requerido'
      },
      telefone:{},
      cpf:{
        required: 'CPF é requerido',
        cpf:'CPF é inválido'
      },
      dataNascimento:{},
      senha:{
        required:'Senha é requerido',
        rangelenght: 'A senha deve possuir entre 6 e 20 caracteres'
      },
      confirmaSenha:{
        required:'Informe a senha novamente. ',
        rangelenght: 'A senha deve possuir entre 6 e 20 caracteres',
        equalTo: 'As senhas não conferem'},
      foto:{}
    };
    this.genericValidator = new GenericFormValidation(this.validationMessages);
   }

  ngOnInit() {
    this.validacaoForm();
    this.spinner.show();
  }

  ngAfterViewInit(): void {
    let controlBlurs: Observable<any>[] = this.formInputElements
    .map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));

    merge(...controlBlurs).subscribe(() => {
      this.displayMessage = this.genericValidator.processarMensagens(this.formularioUsuario)
    });
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
        foto: this.usuarioFoto,
      });
  }

  public resetForm():void{
    this.formularioUsuario.reset();
    this.evento.emit();
  }

  arquivo(files: FileList) {
    this.fileToUpload = files.item(0);
    if (this.fileToUpload != undefined) {
      var reader = new FileReader();
      reader.readAsDataURL(this.fileToUpload);
      reader.onload =  () => {
        this.usuarioFoto = reader.result.toString();
        console.log(this.usuarioFoto);
      };
      reader.onerror = function (error) {
        console.log('Error: ', error);
      };
    }
  }

  public inserirUsuario() {
   this.spinner.show();
   if(this.formularioUsuario.valid){
  this.usuario = Object.assign({}, this.usuario, this.formularioUsuario.value);
  this.usuario.foto = this.usuarioFoto;
  console.log(this.usuario)
   this.usuarioService.criarUsuario(this.usuario).subscribe(
     () => this.toastr.success('Usuário salvo com Sucesso!', 'Sucesso'),
     (error:any) => {
       console.error(error);
       this.spinner.hide();
       this.toastr.error('Não foi possivel salvar o Usuário', 'Erro');
     },
     () => this.spinner.hide()
     )
  }
}


}
