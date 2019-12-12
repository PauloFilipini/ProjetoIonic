class ItemCarrinho {
    constructor(
        public id: string,
        public item: string,
        public descricao: string,
        public preco: number,
        public quantidade: number,
        public subtotal: number
    ) { }
}

export { ItemCarrinho }