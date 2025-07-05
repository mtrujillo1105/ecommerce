import { Component } from '@angular/core';

@Component({
  selector: 'app-order',
  imports: [],
  template: `
      <div class="modal fade" id="ordersModal" tabindex="-1">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Mis Pedidos</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <div id="ordersList"></div>
                </div>
            </div>
        </div>
    </div>
  `,
  styleUrl: './order.component.css'
})
export class OrderComponent {

}
