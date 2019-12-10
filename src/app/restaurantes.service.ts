import { Restaurantes } from './module/restaurante.model'
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RestaurantesService {

    constructor(private http: HttpClient) {

    }

    getRestaurantes(): Promise<Restaurantes[]> {
        return new Promise((resolve, reject) => {
            this.http.get<Restaurantes[]>(`http://localhost:3000/restaurants`)
                .toPromise()
                .then(res => resolve(res))
                .catch(err => reject(err))
        })
    }

    public getRestaurantesById(id: string): Promise<Restaurantes> {
        return new Promise((resolve, reject) => {
            this.http.get<Restaurantes>(`http://localhost:3000/restaurants?id=${id}`)
                .toPromise()
                .then(res => resolve(res))
                .catch(err => reject(err))
        })
    }
}