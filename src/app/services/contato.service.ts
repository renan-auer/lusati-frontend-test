import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contato } from '../model/contato';
import { environment } from 'src/environments/environment';

@Injectable()
export class ContatoService {

    constructor(private http: HttpClient) { }

    getContatos() {
        return this.http.get<Contato[]>(`${environment.API_URL}/contact`)
    }

    salvarContatos(body) {
        return this.http.post(`${environment.API_URL}/contact`, body)
    }
}
