import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Contato } from 'src/app/model/contato';
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

    @Input() contato: Contato

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

        if (this.contato) {
            //EM CASO DE EDIÇÃO BUSCA O CONTATO COMPLETO COM SEUS GRUPOS
            this.contatoService.getContatosPorId(this.contato.id).subscribe({
                next: (response) => {
                    this.contato = response
                    this.stAtivo = response.stAtivo == 1 ? true : false
                    this.dsContato = response.dsContato
                    this.nrCelular = response.nrCelular
                    this.dsEmail = response.dsEmail

                    this.obterGrupos()
                }
            })
        } else {
            this.stAtivo = false
            this.dsContato = null
            this.nrCelular = null
            this.dsEmail = null
            this.obterGrupos()
        }

    }

    obterGrupos() {
        this.grupoService.getGrupos().subscribe(data => {
            this.listaOrigem = data.filter(d => d.stAtivo == 1)
            if (this.contato) {
                // EM CASO DE EDIÇÃO REMOVE OS ITENS DA LISTA DE ORIGEM
                this.contato.grupos.forEach(g => {
                    const index = this.listaOrigem.findIndex(l => l.id === g.id)
                    if (index != -1) {
                        this.listaOrigem.splice(index, 1)
                    }
                })
                this.listaDestino = this.contato.grupos
            }
        })
    }

    closeDialog() {
        this.close.emit()
    }

    salvar() {
        this.salvarOuAlterar().subscribe({
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

    salvarOuAlterar() {
        const body = {
            dsContato: this.dsContato,
            dsEmail: this.dsEmail,
            nrCelular: this.nrCelular,
            stAtivo: this.stAtivo ? 1 : 0,
            grupos: this.listaDestino,
        }

        if (this.contato) {
            return this.contatoService.alterarContato(this.contato.id, body)
        }

        return this.contatoService.salvarContato(body)
    }
}
