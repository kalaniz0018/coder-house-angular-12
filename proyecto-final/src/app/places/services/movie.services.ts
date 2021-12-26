import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetCardResponse } from '../interfaces/get-card-response.interface';


@Injectable({
    providedIn: 'root'
})
export class MovieService {

    private urlAPI = 'https://61c0de3733f24c0017823656.mockapi.io/';
    constructor(private http: HttpClient) {}
    
    getMovie(): Observable<GetCardResponse[]> {
            return this.http.get<GetCardResponse[]>(this.urlAPI + "movies");
    }

}

