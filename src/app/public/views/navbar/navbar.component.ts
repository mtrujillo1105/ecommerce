import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  template: `
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
        <div class="container">
            <a class="navbar-brand" href="#"><i class="fas fa-shopping-bag me-2"></i>TechStore</a>
            
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav me-auto">
                    <li class="nav-item"><a class="nav-link" href="#home">Inicio</a></li>
                    <li class="nav-item"><a class="nav-link" href="#products">Productos</a></li>
                    <li class="nav-item"><a class="nav-link" href="#about">Nosotros</a></li>
                </ul>
                
                <div class="d-flex align-items-center">
                    <button class="btn btn-outline-light me-2" data-bs-toggle="modal" data-bs-target="#cartModal">
                        <i class="fas fa-shopping-cart"></i>
                        <span class="badge bg-danger badge-cart" id="cartCount">{{ count$ | async }}</span>
                    </button>
                    <button class="btn btn-light" data-bs-toggle="modal" data-bs-target="#loginModal" id="loginBtn" [ngClass]="{ 'd-none': isLoggedIn }">
                        <i class="fas fa-user me-1"></i>Ingresar
                    </button>
                    <div class="dropdown" [ngClass]="{'d-none': !isLoggedIn}" id="userMenu">
                        <button class="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown">
                            <i class="fas fa-user me-1"></i><span id="userName">{{ usuario }}</span>
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#ordersModal">Mis Pedidos</a></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><a class="dropdown-item" href="#" (click)="logout()">Cerrar Sesión</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  `,
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
    private cartService = inject(CartService);
    private authService = inject(AuthService);

    count$ = this.cartService.itemCount$;
    usuario = '';
    isLoggedIn = false;

    constructor() {
        this.authService.user$.subscribe(objUser => {
            this.isLoggedIn = !!objUser;
            this.usuario = !!objUser ? objUser.nombre: 'Usuario';
        });
    }

    logout() {
        this.authService.logout();
    }


}
