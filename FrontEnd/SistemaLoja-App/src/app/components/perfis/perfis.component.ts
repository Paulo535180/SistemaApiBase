import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Perfil } from 'src/app/models/Perfil';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { PerfilService } from 'src/app/services/Perfil.service';
import { BsModalService, ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-perfis',
  templateUrl: './perfis.component.html',
  styleUrls: ['./perfis.component.scss']
})
export class PerfisComponent implements OnInit {

  @ViewChild('lgModal', { static: false }) modalPerfil: ModalDirective= {} as ModalDirective;
  public perfis: Perfil[] = [];
  @Input() botaoAdicionar = true;

  constructor(private perfilService : PerfilService,private toastr: ToastrService,private spinner: NgxSpinnerService) { }

  public ngOnInit():void {
    this.spinner.show();
    this.getPerfis();

  }

  public getPerfis(): void {
    this.perfilService.getPerfis().subscribe({
      next: (_perfis: Perfil[]) => {

      this.perfis = _perfis;


      },
      error: (error:any) => {
        this.spinner.hide();
        this.toastr.error('Não foi possivel listar os Perfis', 'Listagem');
      },
      complete: ()=> this.spinner.hide()
    });
    console.log(this.perfis)
  }

  public modalAdicionarPerfil():void {
    this.modalPerfil.show();
  }

}
