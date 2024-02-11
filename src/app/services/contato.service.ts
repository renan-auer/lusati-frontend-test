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

    getContatosPorId(id: number) {
        return this.http.get<Contato>(`${environment.API_URL}/contact/${id}`)
    }

    salvarContato(body) {
        return this.http.post(`${environment.API_URL}/contact`, body)
    }

    alterarContato(id, body) {
        return this.http.put(`${environment.API_URL}/contact/${id}`, body)
    }
}
