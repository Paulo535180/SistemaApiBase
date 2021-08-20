import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from '../../models/Usuario';
import { UsuarioService } from '../../services/Usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
})
export class UsuarioComponent implements OnInit {

  modalRef = {} as BsModalRef;
  public usuarios: Usuario[] = [];
  public exibirImagem: boolean = true;

  constructor(
    private usuarioService: UsuarioService,
    private modalService: BsModalService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
    ) {}


  public ngOnInit():void {
    this.spinner.show();
    this.getUsuarios();
  }

  public alterarImagem(){
    this.exibirImagem = !this.exibirImagem
  }

  public getUsuarios(): void {
    this.usuarioService.getUsuarios().subscribe({
      next: (_usuarios: Usuario[]) => {

      this.usuarios = _usuarios;

      },
      error: (error:any) => {
        this.spinner.hide();
        this.toastr.error('Não foi possivel listar os Usuários', 'Listagem');
      },
      complete: ()=> this.spinner.hide()
    });
  }
  public inserirUsuario(): void {}

  openModal(template: TemplateRef<any>):void {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  confirm(): void {
    this.modalRef.hide();
    this.toastr.success('Usuário Desativado', 'Sucesso');
  }

  decline(): void {
    this.modalRef.hide();
    this.toastr.warning('Cancelada', 'Operação');
  }
}

