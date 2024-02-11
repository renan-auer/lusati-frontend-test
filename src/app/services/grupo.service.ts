import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Grupo } from '../model/grupo';

@Injectable()
export class GrupoService {

    constructor(private http: HttpClient) { }

    getGrupos() {
        return this.http.get<Grupo[]>(`${environment.API_URL}/group`)
    }
}
