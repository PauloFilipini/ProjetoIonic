import { Produto } from '../module/produto.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase'
@Injectable()
export class ProdutoService {

    constructor(
        private http: HttpClient
    ){}

    public getProdutoByRestaurantId(idp:String): Promise<Produto[]> {
        return new Promise((resolve, reject) => {
                firebase.database().ref(`menu`)
                
                .once('value')
                .then((snapshot: any) => {
    
                    let id: Array<Produto> = [];
        
                   
                    snapshot.forEach((childSnapshot: any) => {
        
                       
                        id.push(childSnapshot.val())
                        
                        
                    })
                    const produtos = id.filter(produto => produto.restaurantId == idp )
                    ;
                        resolve(produtos) 
                })
                .catch(err => reject(err))
        })
    }
}