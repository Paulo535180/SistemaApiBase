export class Perfil {

  constructor(
    public id: number ,
    public nome: string,
    public descricao: string,
    public status: boolean,
    public data_criacao: Date,
    public usuario_criacao: string,
    public data_alteracao: Date,
    public usuario_alteracao: string
    ) {

  }

}
