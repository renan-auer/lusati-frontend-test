import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Subscription } from 'rxjs';

@Component({
    templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {

    items!: MenuItem[];

    products!: any[];

    chartData: any;

    chartOptions: any;

    subscription!: Subscription;

    constructor() {
        
    }

    ngOnInit() {
  
        this.items = [
            { label: 'Add New', icon: 'pi pi-fw pi-plus' },
            { label: 'Remove', icon: 'pi pi-fw pi-minus' }
        ];
    }
}
