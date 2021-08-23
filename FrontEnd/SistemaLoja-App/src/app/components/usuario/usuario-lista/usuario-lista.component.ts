import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/models/Usuario';
import { UsuarioService } from 'src/app/services/Usuario.service';

@Component({
  selector: 'app-usuario-lista',
  templateUrl: './usuario-lista.component.html',
  styleUrls: ['./usuario-lista.component.scss']
})
export class UsuarioListaComponent implements OnInit {
  dtOptions: DataTables.Settings = {}
  modalRef = {} as BsModalRef;
  public usuarios: Usuario[] = [];
  public exibirImagem: boolean = true;

  constructor(
    private usuarioService: UsuarioService,
    private modalService: BsModalService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private router: Router
    ) {}


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
      }
  };
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

  detalhesUsuario(id: number):void{
    this.router.navigate([`usuario/detalhe/${id}`]);
  }

}
