import { Coordenador } from './coordenador'
import { Departamento } from './departamento'

function verificaCampoObrigatorio(mensagemEsperada: string, departamento: Departamento) {
    try {
      departamento.dados_departamento();
    } catch (e) {
      expect(e.message).toBe(mensagemEsperada);
    }
}


// Todas as variáveis preenchidas
const NOME_DEPARTAMENTO = "Departamento 1"
const SIGLA = "Dep 1"
const LOCALIZACAO = "Local 1"
const NOME_COORDENADOR = "Maurício"
const IDADE = 30
const CPF = "999.999.999-99"

const TEXTO_ESPERADO_DEPARTAMENTO_COMPLETO: string = `Departamento 1, Dep 1
Localização: Local 1
Maurício
Idade: 30
CPF do coordenador: 999.999.999-99
`;

const TEXTO_EXPERADO_SEM_SIGLA: string = `Departamento 1
Localização: Local 1
Maurício
Idade: 30
CPF do coordenador: 999.999.999-99
`;

const TEXTO_ESPERADO_SEM_IDADE = `Departamento 1, Dep 1
Localização: Local 1
Maurício
CPF do coordenador: 999.999.999-99
`;
    
const TEXTO_ESPERADO_SEM_SIGLA_E_IDADE = `Departamento 1
Localização: Local 1
Maurício
CPF do coordenador: 999.999.999-99
`;

test('Departamento Completo', () => {
    let departamentoCompleto: Departamento = new Departamento(NOME_DEPARTAMENTO, SIGLA, LOCALIZACAO, new Coordenador(NOME_COORDENADOR, IDADE, CPF));
    expect(departamentoCompleto.dados_departamento()).toBe(TEXTO_ESPERADO_DEPARTAMENTO_COMPLETO);
});

test('Sigla vazia', () => {
    let siglaVazia: Departamento = new Departamento(NOME_DEPARTAMENTO, "", LOCALIZACAO, new Coordenador(NOME_COORDENADOR, IDADE, CPF));
    expect(siglaVazia.dados_departamento()).toBe(TEXTO_EXPERADO_SEM_SIGLA);
});

test('Idade vazia', () => {
    let idadeVazia: Departamento = new Departamento(NOME_DEPARTAMENTO, SIGLA, LOCALIZACAO, new Coordenador(NOME_COORDENADOR, 0, CPF));
    expect(idadeVazia.dados_departamento()).toBe(TEXTO_ESPERADO_SEM_IDADE);
});

test('Sigla e idade vazias', () => {
    let sigla_idade_vazias: Departamento = new Departamento(NOME_DEPARTAMENTO, "", LOCALIZACAO, new Coordenador(NOME_COORDENADOR, 0, CPF));
    expect(sigla_idade_vazias.dados_departamento()).toBe(TEXTO_ESPERADO_SEM_SIGLA_E_IDADE);
});

/**
 * Testes de Campos Obrigatórios
 */

test('Nome coordenador vazio', () => {
    let nomeCoordenadorVazio: Departamento = new Departamento(NOME_DEPARTAMENTO, SIGLA, LOCALIZACAO, new Coordenador("", IDADE, CPF));
    verificaCampoObrigatorio(`O campo nome do coordenador do departamento é obrigatório`,
      nomeCoordenadorVazio);
});

test('Cpf do coordenador vazio', () => {
    let cpfCoordenadorVazio: Departamento = new Departamento(NOME_DEPARTAMENTO, SIGLA, LOCALIZACAO, new Coordenador(NOME_COORDENADOR, IDADE, ""));
    verificaCampoObrigatorio(`O campo cpf do coordenador do departamento é obrigatório`,
    cpfCoordenadorVazio);
});

test('Nome departamento vazio', () => {
    let nomeDepartamentoVazio: Departamento = new Departamento("", SIGLA, LOCALIZACAO, new Coordenador(NOME_COORDENADOR, IDADE, CPF));
    verificaCampoObrigatorio(`O campo nome do departamento é obrigatório`,
    nomeDepartamentoVazio);
});

test('Localização do departamento vazia', () => {
    let localizacaoVazia: Departamento = new Departamento(NOME_COORDENADOR, SIGLA, "", new Coordenador(NOME_COORDENADOR, IDADE, CPF));
    verificaCampoObrigatorio(`O campo localização do departamento é obrigatório`,
    localizacaoVazia);
});

