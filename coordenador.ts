
export class Coordenador {

    constructor(
        public nome: string,
        public idade: number,
        public cpf: string) { }
        
        
    public verificaCampoObrigatorio(): void {
  
        if (this.nome == "")
            throw new Error(`O campo nome do coordenador do departamento é obrigatório`)
    
        if(this.cpf == "")
            throw new Error("O campo cpf do coordenador do departamento é obrigatório")

    }

    public dados_coordenador(): string {

        this.verificaCampoObrigatorio();

        const _idade = this.idade == 0 ? "" : "\nIdade: " + this.idade;
        const _cpf = "CPF do coordenador: " + this.cpf;
       
       
        return (
`${this.nome}${_idade}
${_cpf}
`
    )}
}
