import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = [];
  private cartItemsSubject = new BehaviorSubject<any[]>([]);
  
  item$ = this.cartItemsSubject.asObservable();
  itemCount$ = this.item$.pipe(map(items => items.length));

  constructor() {}

  getCartItems() {
    return this.cartItemsSubject.asObservable();
  }

  addToCart(item: any) {
    const index = this.cartItems.findIndex(ci => ci.id === item.id);
    if (index > -1) {
      this.cartItems[index].quantity += item.quantity;
    } else {
      this.cartItems.push({...item});
    }
    this.updateCart();
  }

  updateQuantity(productId: number, quantity: number) {
    const index = this.cartItems.findIndex(ci => ci.id === productId);
    if (index > -1) {
      this.cartItems[index].quantity += quantity;
      let cantidad = this.cartItems[index].quantity;
      if (cantidad < 1) {
        this.cartItems[index].quantity = 1;
      }
      this.updateCart();
    }
  }

  removeFromCart(productId: number) {
    this.cartItems = this.cartItems.filter(ci => ci.id !== productId);
    this.updateCart();
  }  

  clearCart() {
    this.cartItems = [];
    this.updateCart();
  }

  getTotalQuantity() {
    return this.cartItems.reduce((acc, item) => acc + item.quantity, 0);
  }  

  getTotalPrice(): number {
    return this.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }

  getCart() {
    return this.cartItemsSubject.value;
  }

  private updateCart() {
    this.cartItemsSubject.next([...this.cartItems]);
  }

}
