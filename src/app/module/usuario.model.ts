export class Usuario {
    constructor(
        public nome_completo: string,
        public email: string ,
        public senha: string,
        public confirma_senha: string
    ){ }
}