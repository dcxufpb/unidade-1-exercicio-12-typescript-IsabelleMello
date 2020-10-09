import { Coordenador } from "./coordenador";


export class Departamento {

    constructor(
        public nome: string,
        public sigla: string,
        public localizacao: string,
        public coordenador: Coordenador) { }
        
        
    public verificaCampoObrigatorio(): void {
  
        if (this.nome == "")
            throw new Error(`O campo nome do departamento é obrigatório`)
    
        if(this.localizacao == "")
            throw new Error("O campo localização do departamento é obrigatório")

    }

    public dados_departamento(): string {

        this.verificaCampoObrigatorio();

        const _nome = this.sigla? this.nome + ", " : this.nome;
        const _sigla = this.sigla? this.sigla : ""; 
        const _localizacao = "Localização: " + this.localizacao;

        return (
`${_nome}${_sigla}
${_localizacao}
${this.coordenador.dados_coordenador()}`)
    
    }
}
