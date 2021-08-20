export class Usuario {

  constructor(
    public id: number ,
    public nome: string,
    public cpf: string,
    public email: string,
    public login: string,
    public senha: string,
    public foto: string,
    public telefone: string,
    public data_nascimento: Date,
    public status: boolean,
    public data_criacao: Date,
    public usuario_criacao: string,
    public data_alteracao: Date,
    public usuario_alteracao: string
    ) {

  }

}
