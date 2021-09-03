import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService, ModalDirective } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/models/Usuario';
import { UsuarioService } from 'src/app/services/Usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss'],
})
export class UsuarioComponent implements OnInit {
  @ViewChild('lgModal', { static: false }) modalUsuario: ModalDirective= {} as ModalDirective;
  dtOptions: DataTables.Settings = {};
  modalRef = {} as BsModalRef;
  usuarioId = undefined;

  public usuarios: Usuario[] = [];
  public exibirImagem: boolean = true;
  @Input() botaoAdicionar = true;
  public usuario: any = {};

  constructor(
    private usuarioService: UsuarioService,
    private modalService: BsModalService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private router: Router,
    ){}




  public ngOnInit():void {
    this.spinner.show();
    this.getUsuarios();
    this.dtOptions = {
      language: {
        "emptyTable": "Nenhum registro encontrado",
        "info": "Mostrando de _START_ até _END_ de _TOTAL_ registros",
        "infoEmpty": "Mostrando 0 até 0 de 0 registros",
        "infoFiltered": "(Filtrados de _MAX_ registros)",
        "loadingRecords": "Carregando...",
        "processing": "Processando...",
        "zeroRecords": "Nenhum registro encontrado",
        "search": "Pesquisar",
        "paginate": {
            "next": "Próximo",
            "previous": "Anterior",
            "first": "Primeiro",
            "last": "Último"
        },
        lengthMenu:"Exibir _MENU_ resultados por página"
      }};
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

  public openModal(template: TemplateRef<any>, usuarioId: number) : void {
    this.usuarioId = usuarioId;
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  public confirm(): void {
    this.modalRef.hide();
    this.spinner.show();

    this.usuarioService.excluir(this.usuarioId).subscribe(
      (result: string) => {
        if(result == 'Deletado'){
          this.toastr.success('Usuário Desativado', 'Sucesso');
          this.spinner.hide();
          this.getUsuarios();
        }
      },
      (error: any) => {
        console.log(error);
        this.toastr.error(`Erro ao tentar deletar o evento ${this.usuarioId}`, 'Erro');
        this.spinner.hide();
      },
      () => this.spinner.hide(),
  );
    // console.log(this.usuarioService.excluir);
    // this.toastr.success('Usuário Desativado', 'Sucesso');
  }

  public decline(): void {
    this.modalRef.hide();
    this.toastr.warning('Cancelada', 'Operação');
  }

  public modalAdicionarUsuario():void {
    this.modalUsuario.show();
  }
}

