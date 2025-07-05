declare var bootstrap: any;
import { Component, inject } from '@angular/core';
import { AdminProductService } from '../../services/admin-product.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-product-modal',
  imports: [CommonModule, FormsModule],
  template: `
    <!-- Product Modal -->
    <div class="modal fade" id="productModal" tabindex="-1">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Nuevo Producto</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                  <form (submit)="guardar();$event.preventDefault()" enctype="multipart/form-data">
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label class="form-label">Nombre del Producto</label>
                                <input 
                                    [(ngModel)]="form.name"
                                    name = "name"                                
                                    type="text" 
                                    class="form-control">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label">Categoría</label>
                                <select 
                                  [(ngModel)] = "form.category_id"
                                  name = "category_id"
                                  class="form-select">
                                    <option value="">Seleccionar categoría</option>
                                    <option value="1">Electrónicos</option>
                                    <option value="2">Ropa</option>
                                    <option value="3">Hogar</option>
                                </select>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label class="form-label">Precio</label>
                                <input 
                                    type="number" 
                                    [(ngModel)]="form.price"
                                    name = "price"
                                    class="form-control" 
                                    step="0.01">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label">Stock</label>
                                <input 
                                    type="number" 
                                    [(ngModel)]="form.stock"
                                    name = "stock"
                                    class="form-control">
                            </div>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Descripción</label>
                            <textarea 
                                [(ngModel)]="form.description"
                                name = "description"
                                class="form-control" 
                                rows="3"
                            ></textarea>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Imagen</label>
                            <input type="file" class="form-control">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                        <button type="submit" class="btn btn-primary">Guardar Producto</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  `,
  styleUrl: './admin-product-modal.component.css'
})
export class AdminProductModalComponent {
  private adminProductService = inject(AdminProductService);

  form = {
    name : '',
    category_id :0,
    price: 0,
    stock: 0,
    description: '',
    image_url: ''
  };
  async guardar () {
    try{
      console.log(this.form);
      const formData = new FormData();
      formData.append('name', this.form.name);
      formData.append('category_id', String(this.form.category_id));
      formData.append('price', String(this.form.price));
      formData.append('stock', String(this.form.stock));
      formData.append('description', this.form.description);

      const resultado =await this.adminProductService.create(formData);
      console.log('Producto guardado: ', resultado);
    }
    catch(error) {
      console.error('Error al guardar: ', error);
    }
  }

  cerrarModal() {
    const modalElement = document.getElementById('productModal');
    const modal = bootstrap.Modal.getInstance(modalElement) || new bootstrap.Modal(modalElement);
    modal.hide();
  }
}
