import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetUsersResponse } from '../interfaces/get-users-response.interface';


@Injectable({
    providedIn: 'root'
})
export class UserService {

    private urlAPI = 'https://61c0de3733f24c0017823656.mockapi.io/';
    constructor(private http: HttpClient) { }

    getUsers(): Observable<GetUsersResponse[]> {
        return this.http.get<GetUsersResponse[]>(this.urlAPI + "users");
    }

    getUser(id: string | undefined): Observable<GetUsersResponse> {
        return this.http.get<GetUsersResponse>(this.urlAPI + "users/" + id);
    }
}