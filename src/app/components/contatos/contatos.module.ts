import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContatosRoutingModule } from './contatos-routing.module';
import { ContatosComponent } from './contatos.component';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { CadastroContatosComponent } from './cadastro-contato/cadastro-contato.component';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { TabViewModule } from 'primeng/tabview';
import { InputTextModule } from 'primeng/inputtext';
import { InputSwitchModule } from 'primeng/inputswitch';
import { PickListModule } from 'primeng/picklist';
import { MessageService } from 'primeng/api';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { FIltroContatosComponent } from './filtro-contatos/filtro-contatos.component';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
    imports: [
        CommonModule,
        TableModule,
        TooltipModule,
        InputTextModule,
        InputSwitchModule,
        TabViewModule,
        FormsModule,
        DropdownModule,
        ToastModule,
        ButtonModule,
        DialogModule,
        PickListModule,
        ContatosRoutingModule
    ],
    declarations: [ContatosComponent, CadastroContatosComponent, FIltroContatosComponent],
    providers: [MessageService]
})
export class ContatosModule { }
