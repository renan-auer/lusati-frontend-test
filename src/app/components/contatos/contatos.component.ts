import { Component, OnInit } from '@angular/core';
import { Contato } from 'src/app/model/contato';
import { ContatoService } from 'src/app/services/contato.service';

@Component({
    templateUrl: './contatos.component.html',
    styleUrls: ['./contatos.component.css']
})
export class ContatosComponent implements OnInit {

    constructor(private contatoService: ContatoService) {}

    contatos: Contato[] = []

    totalAtivos: number = 0
    totalInativos: number = 0
    total: number = 0

    exibirFiltroContatos = false
    exibirCadastroContatos = false
    
    ngOnInit() {
        this.contatos = [
            {id: 1, stAtivo: 1, nrCelular: '222', dsEmail: 're', dsContato: '213123'},
            {id: 2, stAtivo: 0, nrCelular: '333', dsEmail: 'ddas', dsContato: '86765765'}
        ]
//        this.contatoService.getContatos().subscribe(contatos => {
    //       this.contatos = contatos
           this.total = this.contatos.length
           this.totalAtivos = this.contatos.filter(c => c.stAtivo == 1).length
           this.totalInativos = this.contatos.filter(c => !c.stAtivo).length
  //      });
    }
}
