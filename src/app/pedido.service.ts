import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pedido } from './module/pedido.model';
import { map} from 'rxjs/operators'
import * as firebase from 'firebase'

@Injectable()
export class PedidoService {
    constructor(private http: HttpClient){}
   
   
    public efetivarCompra (pedido: Pedido): Promise<any>{
        return firebase.database().ref(`pedidos`)
        .once('value')
        .then((resposta:any) =>{
            console.log('final', pedido, resposta)
        })
}

}