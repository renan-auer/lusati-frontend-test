import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'filtro-contatos',
    templateUrl: './filtro-contatos.component.html',
    styleUrls: ['./filtro-contatos.component.css']
})
export class FIltroContatosComponent implements OnInit {


    constructor(
    ) { }

    @Input() filtro 
    @Output() filtrar = new EventEmitter()

    status
    textoBusca

    ngOnInit() {
        this.status = this.filtro?.status
        this.textoBusca = this.filtro?.textoBusca
    }

    removerFiltros() {
        this.status = null
        this.textoBusca = null
        this.filtrarContatos()
    }

    filtrarContatos() {
        this.filtrar.emit({
            status: this.status,
            textoBusca: this.textoBusca
        })
    }

}
