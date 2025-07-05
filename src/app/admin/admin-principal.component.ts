import { Component, ViewEncapsulation } from '@angular/core';
import { ProductComponent } from './views/admin-product/admin-product.component';
import { CategoryComponent } from './views/admin-category/admin-category.component';
import { OrderComponent } from './views/admin-order/admin-order.component';
import { ConfigComponent } from './views/admin-config/admin-config.component';
import { HeaderComponent } from './components/admin-header/admin-header.component';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './views/admin-customer/admin-customer.component';
import { AdminDashboardComponent } from './views/admin-dashboard/admin-dashboard.component';
import { AdminSidebarComponent } from './components/admin-sidebar/admin-sidebar.component';
import { AdminProductModalComponent } from './components/admin-product-modal/admin-product-modal.component';
import { AdminCategoryModalComponent } from './components/admin-category-modal/admin-category-modal.component';

@Component({
  selector: 'app-admin-principal',
  imports: [
    ProductComponent,
    CategoryComponent,
    OrderComponent,
    ConfigComponent,
    HeaderComponent,
    CommonModule,
    CustomerComponent,
    AdminDashboardComponent,
    AdminSidebarComponent,
    AdminProductModalComponent,
    AdminCategoryModalComponent
  ],
  template:`
    <div class="container-fluid">
      <div class="row">

        <!-- Sidebar -->
        <app-admin-sidebar
            class="col-md-3 col-lg-2 px-0"
            [opcion]="opcion"
            (notificarAlPadre)="showSection($event)"
        ></app-admin-sidebar>

        <!-- Main Content -->
        <div class="col-md-9 col-lg-10">
            <div class="p-4">

              <!-- Header Component-->
              <app-header></app-header>
              
              <!-- Dashboard Section -->
              <app-admin-dashboard *ngIf="opcion === 'dashboard'"></app-admin-dashboard>

              <!-- Products Section -->
              <app-product *ngIf="opcion === 'products'"></app-product>

              <!-- Categories Section -->
              <app-category *ngIf="opcion === 'categories'"></app-category>

              <!--Orders Section -->
              <app-order *ngIf="opcion === 'orders'"></app-order>

              <!--Config Section -->
              <app-config *ngIf="opcion === 'settings'"></app-config>

              <!--Customer Section -->
              <app-customer *ngIf="opcion === 'customers'"></app-customer>

            </div>

        </div>
      </div>
    </div>

    <!-- Product Modal -->
    <app-admin-product-modal></app-admin-product-modal>

    <!-- Category Modal -->
     <app-admin-category-modal></app-admin-category-modal>
    
  `,
  styleUrl: './admin-principal.component.css',  
  encapsulation: ViewEncapsulation.None 
})
export class AdminPrincipalComponent {
  title = 'Solo Admin';
  opcion = 'dashboard';

  showSection(evento: string) {
    this.opcion = evento;
    console.log(evento);
  }
}
