export class Usuario {
    public id: number;
    public nome: string;
    public login: string;
    public senha: string;
    public profissao: string;
    public conhecimentos: string;
    public conteudo: string;
    public areas: string[];

    constructor(id: number, nome: string, login: string, senha: string,
         profissao: string, conhecimentos: string, conteudo: string, areas: string[]){

        this.id = id;
        this.nome = nome;
        this.login = login;
        this.senha = senha;
        this.profissao = profissao;
        this.conhecimentos = conhecimentos;
        this.conteudo = conteudo;
        this.areas = areas;
    }
}