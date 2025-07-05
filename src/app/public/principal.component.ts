import { Component, ViewEncapsulation } from '@angular/core';
import { NavbarComponent } from './views/navbar/navbar.component';
import { HomeComponent } from './views/home/home.component';
import { ProductComponent } from './views/product/product.component';
import { AboutComponent } from './views/about/about.component';
import { FooterComponent } from './views/footer/footer.component';
import { CartComponent } from './views/cart/cart.component';
import { LoginComponent } from './views/login/login.component';
import { OrderComponent } from './views/order/order.component';

@Component({
  selector: 'app-principal',
  imports: [
      NavbarComponent, 
      HomeComponent,
      ProductComponent,
      AboutComponent,
      FooterComponent,
      CartComponent,
      LoginComponent,
      OrderComponent,
  ],
  template: `
    <div>
      <app-navbar></app-navbar>
      <app-home></app-home>
      <app-product></app-product>
      <app-about></app-about>
      <app-footer></app-footer>
      <app-login></app-login>
      <app-cart></app-cart>
      <app-order></app-order>
    </div>
  `,
  styleUrl: './principal.component.css',
  encapsulation: ViewEncapsulation.None  // 🔥 Hace que los estilos se apliquen globalmente
})
export class PrincipalComponent {
  title = 'Acceso publico';
}
