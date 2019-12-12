import { Produto } from './module/produto.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ProdutoService {

    constructor(
        private http: HttpClient
    ){}

    public getProdutoByRestaurantId(restaurantId: string): Promise<Produto[]> {
        return new Promise((resolve, reject) => {
            this.http.get<Produto[]>(`http://localhost:3000/menu?restaurantId=${restaurantId}`)
                .toPromise()
                .then(res => resolve(res))
                .catch(err => reject(err))
        })
    }
}