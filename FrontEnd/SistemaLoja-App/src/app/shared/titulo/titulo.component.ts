import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.scss']
})
export class TituloComponent implements OnInit {
  @Input() titulo : string = '';
  @Input() iconClass: string = '';
  @Input() subtitulo: string='';
  @Input () botaoListar = true

  constructor(private router:Router) { }

  ngOnInit() {
  }
}
