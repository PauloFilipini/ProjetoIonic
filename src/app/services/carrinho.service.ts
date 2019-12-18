import { ItemCarrinho } from '../module/item-carrinho.model'
import { Produto } from '../module/produto.model'

class CarrinhoService {
    public itens: ItemCarrinho[] = []
    somador
    public exibirItens(): ItemCarrinho[] {
        console.log('itens', this.itens)
        return this.itens
        
    }

    public incluirItem(produto: Produto){
        let itemCarrinho: ItemCarrinho = new ItemCarrinho(
            produto.id,
            produto.name,
            produto.description,
            produto.price,
            1,
            produto.price
        )

        //verificar se o item em questão já não existe dentro de this.itens
        let itemCarrinhoEncontrado = this.itens.find((item: ItemCarrinho) => item.id === itemCarrinho.id)

        if(itemCarrinhoEncontrado) {
            itemCarrinhoEncontrado.quantidade +=1
            itemCarrinhoEncontrado.subtotal = itemCarrinhoEncontrado.preco * itemCarrinhoEncontrado.quantidade
        } else {
            this.itens.push(itemCarrinho)
        }
       
    }

    public totalCarrinhoCompras(): number {

        let total: number = 0

        this.itens.map((item: ItemCarrinho) => {
            total+=(item.preco * item.quantidade)
        })

        return total
    }

    public adicionarQuantidade(itemCarrinho: ItemCarrinho): void {

        //incrementar quantidade
        let itemCarrinhoEncontrado = this.itens.find((item: ItemCarrinho) => item.id === itemCarrinho.id)

        if(itemCarrinhoEncontrado) {
            itemCarrinhoEncontrado.quantidade +=1
            itemCarrinhoEncontrado.subtotal = itemCarrinhoEncontrado.preco * itemCarrinhoEncontrado.quantidade
        }
    }

    public diminuirQuantidade(itemCarrinho: ItemCarrinho): void {

        //decrementar quantidade
        let itemCarrinhoEncontrado = this.itens.find((item: ItemCarrinho) => item.id === itemCarrinho.id)

        if(itemCarrinhoEncontrado) {
            itemCarrinhoEncontrado.quantidade -=1
            itemCarrinhoEncontrado.subtotal = itemCarrinhoEncontrado.preco * itemCarrinhoEncontrado.quantidade

            if(itemCarrinhoEncontrado.quantidade === 0) {
                this.itens.splice(this.itens.indexOf(itemCarrinhoEncontrado), 1)
            }
        }
    }

    public removerItem(itemCarrinho: ItemCarrinho): void {

        //encontrar o item para remover da lista
        let itemCarrinhoEncontrado = this.itens.find((item: ItemCarrinho) => item.id === itemCarrinho.id)

        this.itens.splice(this.itens.indexOf(itemCarrinhoEncontrado), 1)
    }

    public limparCarrinho(): void {
        this.itens = []
    }
}

export { CarrinhoService }