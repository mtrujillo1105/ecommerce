import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  template: `
    <section id="home" class="hero-section text-center">
        <div class="container">
            <h1 class="display-4 mb-4">Bienvenido a TechStore</h1>
            <p class="lead mb-4">Los mejores productos tecnológicos al mejor precio</p>
            <a href="#products" class="btn btn-light btn-lg">Ver Productos</a>
        </div>
    </section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
