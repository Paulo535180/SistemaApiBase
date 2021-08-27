import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Perfil } from 'src/app/models/Perfil';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { PerfilService } from 'src/app/services/Perfil.service';
import { BsModalRef, BsModalService, ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-perfis',
  templateUrl: './perfis.component.html',
  styleUrls: ['./perfis.component.scss']
})
export class PerfisComponent implements OnInit {

  //Modais
  @ViewChild('lgModal', { static: false }) modalPerfil: ModalDirective= {} as ModalDirective;
  modalRef = {} as BsModalRef;

  //Propriedades/Métodos
  public perfis: Perfil[] = [];
  @Input() botaoAdicionar = true;


  constructor(private perfilService : PerfilService,private toastr: ToastrService,private spinner: NgxSpinnerService, private modalService: BsModalService,) { }

  public ngOnInit():void {
    this.spinner.show();
    this.getPerfis();

  }

  public getPerfis(): void {
    this.perfilService.getPerfis().subscribe({
      next: (_perfis: Perfil[]) => {
      this.perfis = _perfis;
      console.log(_perfis);
      },
      error: (error:any) => {
        this.spinner.hide();
        this.toastr.error('Não foi possivel listar os Perfis', 'Listagem');
      },
      complete: ()=> this.spinner.hide()
    });
  }

  public openModal(template: TemplateRef<any>):void {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  public confirm(): void {
    this.modalRef.hide();
    this.toastr.success('Usuário Desativado', 'Sucesso');
  }

  public decline(): void {
    this.modalRef.hide();
    this.toastr.warning('Cancelada', 'Operação');
  }


  public modalAdicionarPerfil():void {
    this.modalPerfil.show();
  }

}
