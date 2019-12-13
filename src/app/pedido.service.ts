import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pedido } from './shared/pedido.model';
import { map} from 'rxjs/operators'

@Injectable()
export class PedidoService {
    constructor(private http: HttpClient){}
   
   
    public efetivarCompra (pedido: Pedido): Observable<any>{
        
          let httpHeaders = new HttpHeaders({
            'Content-Type' : 'application/json',
            
       }); 
       let headers: Headers = new Headers()
        headers.append('Content-type', 'application/json')
        return this.http.post(  
            `http://localhost:3000/orders`, 
            JSON.stringify(pedido),{
                headers: httpHeaders
            }       
        )
        .pipe(map((resposta: any) => 
            resposta.id
        ))

        }
}