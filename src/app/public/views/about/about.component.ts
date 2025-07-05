import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  template: `
    <section id="about" class="py-5 bg-light">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <h2>Sobre Nosotros</h2>
                    <p class="lead">Somos una tienda especializada en tecnología con más de 10 años de experiencia.</p>
                    <p>Ofrecemos productos de las mejores marcas con garantía y el mejor servicio al cliente.</p>
                </div>
                <div class="col-lg-6">
                    <img src="https://via.placeholder.com/500x300/007bff/ffffff?text=TechStore" class="img-fluid rounded" alt="About Us">
                </div>
            </div>
        </div>
    </section>
  `,
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
