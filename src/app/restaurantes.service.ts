import { Restaurantes } from './module/restaurante.model'
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase'

@Injectable()
export class RestaurantesService {

    constructor(private http: HttpClient) {

    }

    getRestaurantes(): Promise<Restaurantes[]> {
        return new Promise((resolve, reject) => {
            firebase.database().ref(`restaurants`)
            .once('value')
            .then((snapshot: any) => {
    
                let restaurantes: Array<any> = [];
    
                snapshot.forEach((childSnapshot: any) => {
    
                    let restaurants= childSnapshot.val()
                    restaurantes.push(restaurants)
                    
                })
                resolve(restaurantes) 
            })
            .catch(reject)
    })
}
public getRestaurantesById(id: String): Promise<Restaurantes[]> {
    return new Promise((resolve, reject) => {
        firebase.database().ref(`restaurants`)
            .once('value')
            .then((snapshot: any) => {
    
                let id: Array<any> = [];
    
                snapshot.forEach((childSnapshot: any) => {
    
                    let idrest= childSnapshot.val()
                    id.push(idrest)
                    
                })
                resolve(id)
                console.log('paulo2', id)
    })
})
}

}
  

       