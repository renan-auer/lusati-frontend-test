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

    contatoEdicao: Contato

    contatos: Contato[] = []
    contatosFiltrados: Contato[] = []

    totalAtivos: number = 0
    totalInativos: number = 0
    total: number = 0

    exibirFiltroContatos = false
    exibirCadastroContatos = false

    filtro

    ngOnInit() {
        this.obterContatos()
    }


    editar(contato: Contato) {
        this.contatoEdicao = contato
        this.exibirCadastroContatos = true
    }

    concluiuCadastro() {
        this.contatoEdicao = null
        this.exibirCadastroContatos = false
        this.obterContatos()
    }

    obterContatos() {
        this.contatoService.getContatos().subscribe(contatos => {
            this.contatos = contatos
            this.filtrar()
            this.total = this.contatos.length
            this.totalAtivos = this.contatos.filter(c => c.stAtivo == 1).length
            this.totalInativos = this.contatos.filter(c => !c.stAtivo).length
        });
    }

    novoContato() {
        this.exibirCadastroContatos = true;
    }

    abrirModalFiltro() {
        this.exibirFiltroContatos = true;
    }
    
    filtrar() {
        this.contatosFiltrados = this.contatos.filter(contato => {
            let correspondeFiltro = true

            if(this.filtro?.status) {
                correspondeFiltro = contato.stAtivo == (this.filtro.status == 'Ativo' ? 1 : 0)
            }

            if(correspondeFiltro && this.filtro?.textoBusca) {
                correspondeFiltro = contato.dsContato?.toUpperCase().includes(this.filtro.textoBusca?.toUpperCase()) || 
                contato.dsEmail?.toUpperCase().includes(this.filtro.textoBusca?.toUpperCase()) || 
                contato.nrCelular?.toUpperCase().includes(this.filtro.textoBusca?.toUpperCase()) 
            }

            return correspondeFiltro
        })
        this.exibirFiltroContatos = false
    }
}
