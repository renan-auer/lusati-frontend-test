import { Component, OnInit } from '@angular/core';
import { ContatoService } from 'src/app/services/contato.service';

@Component({
    selector: 'filtro-contatos',
    templateUrl: './filtro-contatos.component.html',
    styleUrls: ['./filtro-contatos.component.css']
})
export class FIltroContatosComponent implements OnInit {

    constructor(private contatoService: ContatoService) {}


    ngOnInit() {
    }
}
