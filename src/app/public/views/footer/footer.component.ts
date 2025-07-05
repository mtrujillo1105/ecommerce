import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  template: `
    <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <h5><i class="fas fa-shopping-bag me-2"></i>TechStore</h5>
                    <p>Tu tienda de confianza para productos tecnológicos.</p>
                </div>
                <div class="col-md-4">
                    <h5>Enlaces</h5>
                    <ul class="list-unstyled">
                        <li><a href="#" class="text-light">Términos y Condiciones</a></li>
                        <li><a href="#" class="text-light">Política de Privacidad</a></li>
                        <li><a href="#" class="text-light">Envíos y Devoluciones</a></li>
                    </ul>
                </div>
                <div class="col-md-4">
                    <h5>Contacto</h5>
                    <p><i class="fas fa-envelope me-2"></i>info_techstore.com</p>
                    <p><i class="fas fa-phone me-2"></i>+1 234 567 8900</p>
                </div>
            </div>
        </div>
    </footer>
  `,
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
