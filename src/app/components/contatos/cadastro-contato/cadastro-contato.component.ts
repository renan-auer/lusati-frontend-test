import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Grupo } from 'src/app/model/grupo';
import { ContatoService } from 'src/app/services/contato.service';
import { GrupoService } from 'src/app/services/grupo.service';

@Component({
    selector: 'cadastro-contato',
    templateUrl: './cadastro-contato.component.html',
    styleUrls: ['./cadastro-contato.component.css'],
    providers: [MessageService],
})
export class CadastroContatosComponent implements OnInit {

    constructor(
        private contatoService: ContatoService,
        private grupoService: GrupoService,
        private messageService: MessageService
    ) { }

    @Output() close = new EventEmitter()
    @Output() cadastroConcluido = new EventEmitter()

    tab = 0

    listaOrigem: Grupo[] = []
    listaDestino: Grupo[] = []

    stAtivo
    nrCelular
    dsContato
    dsEmail

    ngOnInit() {
        this.grupoService.getGrupos().subscribe(data => {
            this.listaOrigem = data
        })
    }

    closeDialog() {
        this.close.emit()
    }

    salvar() {
        this.contatoService.salvarContatos({
            dsContato: this.dsContato,
            dsEmail: this.dsEmail,
            nrCelular: this.nrCelular,
            stAtivo: this.stAtivo ? 1 : 0,
            grupos: this.listaDestino,
        }).subscribe({
            next: (response) => {
                this.messageService.add({ severity: 'success', summary: 'Sucesso!', detail: 'Contato salvo com sucesso!' });
                this.cadastroConcluido.emit()
            },
            error: (error) => {
                this.messageService.add({ severity: 'error', summary: 'Erro!', detail: 'Erro ao salvar contato!' });
                this.closeDialog()
            }

        })
    }
}
