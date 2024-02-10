import { Component, OnInit } from '@angular/core';
import { ContatoService } from 'src/app/services/contato.service';

@Component({
    selector: 'cadastro-contato',
    templateUrl: './cadastro-contato.component.html',
    styleUrls: ['./cadastro-contato.component.css']
})
export class CadastroContatosComponent implements OnInit {

    constructor(private contatoService: ContatoService) {}


    ngOnInit() {
    }
}
