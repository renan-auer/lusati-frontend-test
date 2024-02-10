import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContatosRoutingModule } from './contatos-routing.module';
import { ContatosComponent } from './contatos.component';
import { TableModule } from 'primeng/table';
import { CadastroContatosComponent } from './cadastro-contato/cadastro-contato.component';

@NgModule({
    imports: [
        CommonModule,
        TableModule,
        ContatosRoutingModule
    ],
    declarations: [ContatosComponent, CadastroContatosComponent]
})
export class ContatosModule { }
