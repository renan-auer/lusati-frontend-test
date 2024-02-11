import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Contato } from 'src/app/model/contato';
import { ContatoService } from 'src/app/services/contato.service';

@Component({
    templateUrl: './contatos.component.html',
    styleUrls: ['./contatos.component.css']
})
export class ContatosComponent implements OnInit {

    constructor(private contatoService: ContatoService, private messageService: MessageService) { }

    contatos: Contato[] = []

    totalAtivos: number = 0
    totalInativos: number = 0
    total: number = 0

    exibirFiltroContatos = false
    exibirCadastroContatos = false

    ngOnInit() {
        this.obterContatos()
    }

    obterContatos() {
        this.contatoService.getContatos().subscribe(contatos => {
            this.contatos = contatos
            this.total = this.contatos.length
            this.totalAtivos = this.contatos.filter(c => c.stAtivo == 1).length
            this.totalInativos = this.contatos.filter(c => !c.stAtivo).length
        });
    }

    novoContato() {
        this.exibirCadastroContatos = true;
    }
}
