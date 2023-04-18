import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo Salinas", "11122233396", "R$ 10.000,00");
diretor.cadastrarSenha("637300");

const gerente = new Gerente("Ricardo Augusto Soares", "276.038.810-72", "R$ 5.000,00");
gerente.cadastrarSenha("522029");

const cliente = new Cliente("Lais Silveira", "694.847.990-19", "154132");

const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "522029");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "637300");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "154132");