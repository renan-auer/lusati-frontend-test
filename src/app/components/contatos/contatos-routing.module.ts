import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContatosComponent } from './contatos.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: ContatosComponent }
    ])],
    exports: [RouterModule]
})
export class ContatosRoutingModule { }
