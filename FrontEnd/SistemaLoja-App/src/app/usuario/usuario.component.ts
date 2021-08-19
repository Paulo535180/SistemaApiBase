import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/Usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
})
export class UsuarioComponent implements OnInit {
  public usuarios: any = [];
  constructor(private usuarioService: UsuarioService) {}

  ngOnInit() {}

  public getUsuarios(): void {
    this.usuarioService.getUsuarios().subscribe((resultado) => {
      this.usuarios =
    });
  }
  public inserirUsuario(): void {}
}
